import { AiOutlineLinkedin, AiOutlineFilePdf } from "react-icons/ai";
import { BeakerIcon } from "@heroicons/react/outline";
import { FiGithub, FiLinkedin } from "react-icons/fi";



function Header() {
    return ( 
        <header className="h-96 md:h-72">
                { /* Header */}
                <div className="flex h-64 w-screen bg-stone-800 text-white">
                    <div className="flex flex-col space-y-3 text-4xl ml-5 p-10 w-screen items-center justify-center">
                        <img src="profile_picture.png" className="rounded-full w-28 h-28"></img>
                        <h1 className="italic font-bold">Bruno Selistre</h1>
                        <p className="italic text-base">API Engineer</p>
                    </div>                                    
                </div>
                { /* Sub-Header */}
                <div className="flex flex-col md:flex-row columns-4 items-center md:items-center justify-center h-1/4 md:h-14 md:space-x-20">
                    <span className="flex space-x-3">
                        <BeakerIcon className="h-5 w-5"/>
                        <p><a href="" target="_blank" rel="noreferrer noopener">Projects</a></p>
                    </span>
                    <span className="flex space-x-3">
                        <AiOutlineFilePdf className="h-6 w-6"/>
                        <p><a href="" target="_blank" rel="noreferrer noopener">Download PDF</a></p>
                    </span>
                    <span className="flex space-x-3">
                        <FiGithub className="h-5 w-5"/>
                        <p><a href="https://github.com/brunoselistre" target="_blank" rel="noreferrer noopener">GitHub</a></p>
                    </span>
                    <span className="flex space-x-3">
                        <FiLinkedin className="h-5 w-5"/>
                        <p><a href="https://www.linkedin.com/in/bruno-selistre-a29559182/" target="_blank" rel="noreferrer noopener">LinkedIn</a></p>
                    </span>                    
                </div>
                <hr className="border-t-[0.1px] border-gray-300 mx-10 md:mx-40 xl:mx-72"/>
        </header>

     );
}

export default Header;