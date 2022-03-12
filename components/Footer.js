import { MailIcon, LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";

function Footer() {
    return ( 
        <footer>
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center h-44 md:h-20 w-screen bg-stone-800 text-white p-8 space-y-3 md:space-y-0 md:space-x-24">
                    <div className="flex space-x-3">
                        <PhoneIcon className="h-6 w-6"/>
                        <p><a href={`tel:${+351}${917578672}`}>+351 917578672</a></p>                           
                    </div>
                    <div className="flex space-x-3">
                        <MailIcon className="h-6 w-6"/>
                        <p><a href={`mailto:${"b.selistre@hotmail.com"}`}>Send me a message</a></p>
                    </div>
                    <div className="flex space-x-3">
                        <LocationMarkerIcon className="h-6 w-6"/>
                        <p>Almada, Portugal</p>
                    </div>
                </div>

        </footer>
     );
}

export default Footer;