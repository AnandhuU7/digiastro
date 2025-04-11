import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from '../assets/images/logo.png';

const Whatsapp = () => {
    return (
        <FloatingWhatsApp
            accountName="Dubai Hikvision"
            phoneNumber="+971552929644"
            avatar={logo.src}
            statusMessage="Live chat now"
            chatMessage="Welcome to Dubai Hikvision 🤝. How can we help?"
        />
    );
};

export default Whatsapp;





