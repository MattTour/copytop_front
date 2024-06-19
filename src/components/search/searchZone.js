import Searchbar from "./searchbar";
import Tags from "./tags";
import "../../style/search.css"
import PrimaryButton from "../button/primaryButton";

const SearchZone = () => {
    return (
        <div className="search-zone">
            <Searchbar />
            <Tags />
            <div className="mt-5">
                <PrimaryButton label="Rechercher" />
            </div>
        </div>
    )
}

export default SearchZone;
