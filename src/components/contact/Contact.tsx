import React, {useRef /*useState*/} from "react";
import {FaAddressCard, FiCopy} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import Tooltip from "../tooltip/Tooltip";
//import Snackbar from "../snackbar/Snackbar";

export default function Contact() {
    const mailRef = useRef<HTMLInputElement | null>(null);
    //const [snackbarText, setSnackbarText] = useState('');
    const inputClasses = "w-full my-2 px-2 py-1 border-1 outline-none border-gray-200 rounded focus:border-orange-500";

    const handleMailClick = () => {
        if(mailRef !== null){
            const element = mailRef.current!;
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(element);
            selection!.removeAllRanges();
            selection!.addRange(range);
            document.execCommand("Copy");
            selection!.removeAllRanges();
            //setSnackbarText('Adresse mail copiée !');
        }
    };

    return (
        <>
            <SectionTitle icon={<FaAddressCard/>} text="CONTACT"/>
            <form className="flex flex-col w-full text-lg mt-8">
                <div className="flex">
                    <div className="w-1/3 flex flex-col flex-initial mr-2">
                        <input autoComplete="off" className={inputClasses} type="text" name="name" placeholder="Votre nom" required/>
                        <input autoComplete="off" className={inputClasses} type="email" name="email" placeholder="Votre email" required/>
                        <input autoComplete="off" className={inputClasses} type="text" name="subject" placeholder="Sujet" required/>
                    </div>
                    <div className="w-2/3 flex ml-2">
                        <textarea name="message" placeholder="Votre message" className="w-full h-16 transition-all duration-200 focus:h-full border-b-1 border-gray-800 px-2 py-1 outline-none focus:border-orange-500 bg-transparent" required/>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <input className="px-4 py-1 bg-transparent cursor-pointer transition duration-150 text-orange-700 hover:bg-orange-500 hover:text-white rounded border-1 border-orange-500"
                           type="submit" value="Envoyer"/>
                </div>
            </form>
            <hr className="my-4"/>
            <div className="flex text-xl">
                Me joindre directement :
                <Tooltip title="Copier l'adresse" width="">
                    <span onClick={handleMailClick} className="underline ml-2 cursor-pointer flex transition duration-150 hover:text-orange-600">
                        <div ref={mailRef}>
                            gendrejeremy@yahoo.fr
                        </div>
                        <div className="ml-1">
                            <FiCopy/>
                        </div>
                    </span>
                </Tooltip>
            </div>

        </>
    );
}