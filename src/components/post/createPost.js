import TextZone from '../input/textZone';
import PrimaryButton from '../button/primaryButton';
import TitleInput from '../input/titleInput';
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";

async function SendNewPost(title, content) {
    return fetch('http://localhost:5001/api/post/create',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'title': title,
            'content': content
        })
    })
    .then(data => {
        if (data.ok) {
            return data.json();
        }

        return null;
    });
}

const CreatePost = ({showPopup}) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createNewPost = await SendNewPost(
            title,
            content
        );
        if (createNewPost !== null) {
            navigate(0);
        }
    }

    function hidePopupInParent() {
        showPopup(false);
    }

    function changeTitle(changedTitle) {
        setTitle(changedTitle);
    }

    function changeContent(changedContent) {
        setContent(changedContent);
    }

    return (
        <div className='background-popup'>
            <div className="create-post">
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <TitleInput onChangeAction={changeTitle} />
                    </div>
                    <div>
                        <TextZone onChangeAction={changeContent} />
                    </div>
                    <div className="d-flex justify-content-evenly mt-4">
                        <PrimaryButton label="Annuler" actionOnClick={hidePopupInParent}/>
                        <PrimaryButton label="Valider" actionOnClick={null}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;
