import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer one">
                    <h3>Hakkımızda</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                </div>
                <div className="footer two">
                    <h3>Keep Connected</h3>
                    <ul>
                        <li><a href=""><div className='social-link facebook'><FaFacebookF /></div> Like us on Facebook</a></li>
                        <li><a href=""><div className='social-link twitter'><FaTwitter /></div> Follow us on Twitter</a></li>
                        <li><a href=""><div className='social-link instagram'><FaInstagram /></div> Follow us on Pinterest</a></li>
                        <li><a href=""><div className='social-link youtube'><FaYoutube /></div> Subscribe us on Youtube</a></li>
                    </ul>
                </div>
                <div className="footer third">
                    <h3>Contact Information</h3>
                    <ul>
                        <li><FaHome />The company name
                            <span>Lorem ipsum dolor,</span>
                            Glasglow Dr 40 Fe 72.
                        </li>
                        <li><FaMobileAlt />1234567890</li>
                        <li><FaEnvelope /><a href="">contact@example.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                © 2022 Website. All Rights Reserved | Design by @GhostKozak
                <div className="links">
                    <a href="">Company Information</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;