import logo from '../../img/logo.svg';
import notifIcon from '../../img/notification.svg';
import '../../style/navbar.css';
import { useEffect } from 'react';


const Navbar = () => {

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
            button.innerText = `Recevoir les notifications`;
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
            }).then(() => { console.log(subscription) })
            console.log(JSON.stringify(subscription));
        }

        main()
    })

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img className="logo" src={logo} alt="Copytop" />
                    </a>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <a className="nav-link" href="/">ANNONCES</a>
                            <a className="nav-link" href="/contact">CONTACT</a>
                            <a className="nav-link" href="/">RESSOURCES</a>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <div className='new-notif-btn nav-link'>
                                <img src={notifIcon} className='image-btn' alt='Bell notification' />
                            </div>
                            <div id="push-permission" className='notif-btn'></div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="navbar-filler">
            </div>
        </div>
    )
}

export default Navbar;
