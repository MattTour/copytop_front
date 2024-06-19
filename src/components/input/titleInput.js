const TitleInput = ({onChangeAction}) => {
    return (
        <div className="">
            <input onChange={(e)=>onChangeAction(e.target.value)} type="text" className="title-input" id="title" placeholder="Entrez le titre de votre post..."/>
        </div>
    )
}

export default TitleInput;
