import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/images/logo.svg';   

const Whatsapp = () => {
    const logoUrl = logo.src;
    return <FloatingWhatsApp  
    accountName='Dubai Hikvision' 
    phoneNumber='+971552929644' 
    avatar={logoUrl}
    statusMessage="Live chat now"
    chatMessage="Welcome to Dubai Hikvision 🤝. How can we help?"
    />
}

export default Whatsapp;