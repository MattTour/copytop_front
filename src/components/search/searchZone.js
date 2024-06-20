import Searchbar from "./searchbar";
import Tags from "./tags";
import "../../style/search.css"
import PrimaryButton from "../button/primaryButton";
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";

const SearchZone = () => {
    const navigate = useNavigate();

    const [tags, setTags] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let params = "?search="+searchInput;
        Object.keys(tags).map(function(key) {
            params += "&"+tags[key]+"=true"

            return null;
        });
        navigate("/" + params);
        navigate(0);
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

    function changeSearch(changedSearch) {
        setSearchInput(changedSearch);
    }

    return (
        <div className="search-zone">
            <form onSubmit={handleSubmit}>
                <Searchbar onChangeAction={changeSearch}/>
                <Tags onChangeAction={handleChange} />
                <div className="mt-5">
                    <PrimaryButton label="Rechercher" actionOnClick={null} />
                </div>
            </form>
        </div>
    )
}

export default SearchZone;
