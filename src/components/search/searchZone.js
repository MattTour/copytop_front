import Searchbar from "./searchbar";
import Tags from "./tags";
import "../../style/search.css"
import SearchButton from "../button/searchButton";

const SearchZone = () => {
    return (
        <div className="search-zone">
            <Searchbar />
            <Tags />
            <SearchButton label="Rechercher" />
        </div>
    )
}

export default SearchZone;
