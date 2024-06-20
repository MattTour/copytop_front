const TextZone = ({onChangeAction}) => {
    return (
        <div className="">
            <textarea onChange={(e)=>onChangeAction(e.target.value)} className="text-zone" id="textzone" placeholder="Entrez le contenu de votre message..."/>
        </div>
    )
}

export default TextZone;
