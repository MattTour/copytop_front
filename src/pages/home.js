import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HomeBody from '../components/home/homeBody';

import '../style/home.css';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        function main() {
            const permission = document.getElementById('push-permission');
            if ((!permission ||
                !('Notification' in window) ||
                !('serviceWorker' in navigator))
                // Notification.permission !== 'default'
            ) {
                return;
            }
            const button = document.createElement('button');
            button.innerText = 'Recevoir les notifications';
            permission.appendChild(button);
            button.addEventListener('click', askPermission);
        }

        async function askPermission() {
            const permission = await Notification.requestPermission()
            if (permission === 'granted') {
                registerServiceWorker()
            }
        }

        async function registerServiceWorker() {
            const registration = await navigator.serviceWorker.register(`./sw.js`);
            let subscription = await registration.pushManager.getSubscription();
            if (!subscription) {
                subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: await getPublicKey()
                })
            }
            await saveSubscription(subscription);
        }

        async function getPublicKey() {
            const { key } = await fetch('http://localhost:5001/api/push/key', {
                headers: {
                    Accept: 'application/json'
                }
            }).then(r => r.json())
            return key
        }

        /**
         * 
         * @param {PushSubscription} subscription 
         */
        async function saveSubscription(subscription) {
            await fetch('http://localhost:5001/api/push/subscribe', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(subscription)
            }).then(()=> { console.log(subscription)})
            console.log(JSON.stringify(subscription));
        }

        main()
    })

    return (<>
        <Navbar />
        <HomeBody />
        <Footer />
        <div id="push-permission"></div>
    </>
    )
}

export default Home;
