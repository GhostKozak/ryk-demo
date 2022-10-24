import { FaCheck } from "react-icons/fa";

//Animation
import { motion } from "framer-motion";
import { cardAnimationLeft, cardAnimationRight } from "../animation";


const BoxSection = () => {
    return (
        <section className="box">
            <div className="container">
                <div className="block1"><motion.img variants={cardAnimationRight} initial="hidden" viewport={{ once: true }} whileInView="show" src="https://images.wallpaperscraft.com/image/single/street_silhouettes_buildings_394744_1280x720.jpg" alt="" /></div>
                <div className="block2">
                    <h1>Title</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt ullam similique distinctio consequuntur. Non quisquam, vitae architecto officia dolorum deleniti facere. Odio, obcaecati. Officia voluptate sit dicta eos quas.</p>
                    <ul>
                        <li><FaCheck /> List 1</li>
                        <li><FaCheck /> List 2</li>
                        <li><FaCheck /> List 3</li>
                        <li><FaCheck /> List 4</li>
                    </ul>
                    <button>Button</button>
                </div>
                <div className="block3"><h1>Title</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt ullam similique distinctio consequuntur. Non quisquam, vitae architecto officia dolorum deleniti facere. Odio, obcaecati. Officia voluptate sit dicta eos quas.</p>
                    <ul>
                        <li><FaCheck /> List 1</li>
                        <li><FaCheck /> List 2</li>
                        <li><FaCheck /> List 3</li>
                        <li><FaCheck /> List 4</li>
                    </ul>
                    <button>Button</button></div>
                <div className="block4"><motion.img variants={cardAnimationLeft} initial="hidden" viewport={{ once: true }} whileInView="show" src="https://images.wallpaperscraft.com/image/single/coffee_cappuccino_cup_393639_1280x720.jpg" alt="" /></div>
            </div>
        </section>
    )
}

export default BoxSection;