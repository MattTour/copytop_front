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
        <div className="mt-2">
            {tags.map((tag, index) => (
                <span key={index}>
                    <input type="checkbox" className="btn-check" name="tags" id={tag.id} value={tag.id} autoComplete="off" onChange={onChangeAction} />
                    <label className="btn tag" htmlFor={tag.id}>{tag.name}</label>
                </span>
            ))}
        </div>
    )
}

export default Tags;
