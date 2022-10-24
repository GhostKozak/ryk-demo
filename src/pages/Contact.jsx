import { FaEnvelope, FaMapPin, FaPhoneAlt } from "react-icons/fa";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//Components
import TeklifFormu from "../components/TeklifFormu";
import StaticPageBanner from "../components/StaticPageBanner";

const Contact = () => {
    return (
        <motion.div className="contact-page" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <StaticPageBanner title="İletişim" />
            <div className="container">
                <div className="info">
                    <div className="address">
                        <FaMapPin /> Adres Lorem ipsum dolor sit amet.
                    </div>
                    <div className="phone">
                        <FaPhoneAlt /> +90 506 847 67 79
                    </div>
                    <div className="mail">
                        <FaEnvelope /> info@example.com
                    </div>
                </div>
                <TeklifFormu />
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.188781301295!2d29.001921816116912!3d41.0211256265816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab82bea99445f%3A0x6ed7f4baceb4476c!2sMaiden&#39;s%20Tower!5e0!3m2!1sen!2str!4v1666435501544!5m2!1sen!2str"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact;