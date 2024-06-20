const PrimaryLink = ({label, href}) => {
    return (
        <div>
            <a href={href} className="button-primary">{label}</a>
        </div>
    )
}

export default PrimaryLink;
