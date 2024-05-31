const Tags = () => {
    return (
        <div className="">
            <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" />
            <label className="btn tag" for="btn-check">Annonces</label>
            <input type="checkbox" class="btn-check" id="annonces" autocomplete="off" />
            <label className="btn tag" for="annonces">Nouveautés</label>
        </div>
    )
}

export default Tags;
