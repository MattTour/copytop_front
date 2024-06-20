const PrimaryButton = ({label, actionOnClick}) => {
    return (
        <div>
            <button className="button-primary" type="submit" onClick={actionOnClick}>{label}</button>
        </div>
    )
}

export default PrimaryButton;
