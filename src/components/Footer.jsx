import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export const Footer = () => {
    return (
        <>
            <div className="bg-white shadow-xl rounded-3xl px-4 py-6 mx-auto mb-8 max-w-[95%] lg:max-w-[90%] mt-[40px] lg:mt-[90px]">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    
                    {/* About Section */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-sm sm:text-md md:text-xl lg:text-2xl font-extrabold text-slate-900 mb-2">Prince Cart</h1>
                        <p className="text-xs sm:text-sm md:text-md lg:text-lg text-slate-900">
                            PRINCE CART is an online mini shopping platform. You can purchase anything with ease.<br />
                            A small React app to demonstrate e-commerce functionalities like Cart, Wishlist, Login, and Signup. <br />
                            Made responsive using Tailwind CSS.
                        </p>
                    </div>

                    {/* Useful Links Section */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2">Useful Links</h2>
                        <ul className="text-slate-800 text-sm sm:text-md md:text-lg lg:text-lg space-y-1">
                            <li><a href="#" className="hover:text-green-500">FAQs</a></li>
                            <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-green-500">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-green-500">Customer Support</a></li>
                            <li><a href="#" className="hover:text-green-500">Return & Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-4">Contact</h2>
                        <div className="flex justify-center lg:justify-end gap-6 text-slate-900">
                            <FontAwesomeIcon icon={faEnvelope} className="hover:text-green-700 transition-transform duration-300 hover:scale-110 text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                            <a href="https://www.linkedin.com/in/puneethlakshmanveligonda/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-green-700 transition-transform duration-300 hover:scale-110 text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                            </a>
                            <a href='https://github.com/puneethlakshman05' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="hover:text-green-700 transition-transform duration-300 hover:scale-110 text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                            </a>
                            <FontAwesomeIcon icon={faWhatsapp} className="hover:text-green-700 transition-transform duration-300 hover:scale-110 text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-4 border-gray-400" />

                {/* Footer Bottom */}
                <p className="text-center text-slate-900 text-sm sm:text-md md:text-lg">
                    <FontAwesomeIcon icon={faCopyright} /> All Rights Reserved 2025
                </p>
            </div>
        </>
    );
};
