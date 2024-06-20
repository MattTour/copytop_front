import TextZone from '../input/textZone';
import PrimaryButton from '../button/primaryButton';
import TitleInput from '../input/titleInput';
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import Tags from '../search/tags';

async function SendNewPost(title, content, tags) {
    return fetch('http://localhost:5001/api/post/create',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'title': title,
            'content': content,
            'tags': tags
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

    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createNewPost = await SendNewPost(
            title,
            content,
            tags
        );
        if (createNewPost !== null) {
            navigate(0);
        }
    }

    const handleChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setTags([...tags, value]);
        }
        else {
            setTags(tags.filter((e) => e !== value));
        }
    };

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
                    <div>
                        <Tags onChangeAction={handleChange} />
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
