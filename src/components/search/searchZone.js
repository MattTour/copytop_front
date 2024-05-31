import Searchbar from "./searchbar";
import Tags from "./tags";
import "../../style/search.css"
import PrimaryButton from "../button/primaryButton";

const SearchZone = () => {
    return (
        <div className="search-zone">
            <Searchbar />
            <Tags />
            <PrimaryButton label="Rechercher" />
        </div>
    )
}

export default SearchZone;
