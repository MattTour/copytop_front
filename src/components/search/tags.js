import { useState, useEffect } from 'react';

const Tags = ({onChangeAction}) => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/api/tag/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTags(data);
            });
    }, []);

    return (
        <div className="">
            {tags.map((tag, index) => (
                <div key={index}>
                    <input type="checkbox" className="btn-check" name="tags" id={tags.id} value={tags.id} autoComplete="off" onChange={onChangeAction} />
                    <label className="btn tag" htmlFor={tags.id}>{tags.name}</label>
                </div>
            ))}
        </div>
    )
}

export default Tags;
