import { motion } from "framer-motion";
import { fadeInLeft } from "../animation";

const StaticPageBanner = ({ title }) => {
    return (
        <section className="staticpage-banner">
            <img src="https://images.wallpaperscraft.com/image/single/sea_night_rocks_92716_2560x1440.jpg" className="bg" alt="" />
            <div className="container">
                <motion.h1 variants={fadeInLeft} initial="hidden" whileInView="show" viewport >{title}</motion.h1>
            </div>
        </section>
    )
}

export default StaticPageBanner;