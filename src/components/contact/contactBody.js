import PrimaryButton from "../button/primaryButton";
import TextZone from "../input/textZone";

const ContactBody = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <TextZone />
                <PrimaryButton label="Envoyer"/>
            </div>
        </div>
    )
}

export default ContactBody;
