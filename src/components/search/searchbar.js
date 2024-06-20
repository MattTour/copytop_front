const Searchbar = ({onChangeAction}) => {
    return (
        <div className="">
            <input className="searchbar" type="text" onChange={(e)=>onChangeAction(e.target.value)} placeholder="Entrez votre recherche..."/>
        </div>
    )
}

export default Searchbar;
