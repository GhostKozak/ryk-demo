// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//Components
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import BoxSection from "../components/BoxSection";
import ProjectListSlider from "../components/ProjectListSlider";


const Homepage = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Hero />
            <AboutSection />
            <ProjectListSlider />
            <BoxSection />
        </motion.div>
    )
}

export default Homepage;