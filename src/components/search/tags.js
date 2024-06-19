const Tags = () => {
    return (
        <div className="">
            <input type="checkbox" className="btn-check" id="btn-check" autoComplete="off" />
            <label className="btn tag" htmlFor="btn-check">Annonces</label>
            <input type="checkbox" className="btn-check" id="annonces" autoComplete="off" />
            <label className="btn tag" htmlFor="annonces">Nouveautés</label>
        </div>
    )
}

export default Tags;
