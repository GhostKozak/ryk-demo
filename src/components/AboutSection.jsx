import Wave from "./Wave";

//Animation
import { motion } from "framer-motion";
import { aboutCardAnimationA, aboutCardAnimationB, aboutCardAnimationC } from "../animation";

const AboutSection = () => {
    return (
        <section className="about">
            <Wave viewport={{ once: true }} />
            <div className="container">
                <h1>HAKKIMIZDA</h1>
                <div className="grid" >
                    <motion.div variants={aboutCardAnimationA} initial="hidden" viewport={{ once: true }} whileInView="show" className="card">
                        <h2>Biz Kimiz</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis, et alias consequuntur nisi vero, delectus dignissimos sit commodi architecto sint officiis quam facere saepe! Cum, rem. Voluptas, animi assumenda?</p>
                    </motion.div >
                    <motion.div variants={aboutCardAnimationB} initial="hidden" viewport={{ once: true }} whileInView="show" className="card">
                        <h2>Ne Zamandır Buradayız</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis, et alias consequuntur nisi vero, delectus dignissimos sit commodi architecto sint officiis quam facere saepe! Cum, rem. Voluptas, animi assumenda?</p>
                    </motion.div >
                    <motion.div variants={aboutCardAnimationC} initial="hidden" viewport={{ once: true }} whileInView="show" className="card">
                        <h2>Ne Yapıyoruz</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis, et alias consequuntur nisi vero, delectus dignissimos sit commodi architecto sint officiis quam facere saepe! Cum, rem. Voluptas, animi assumenda?</p>
                    </motion.div >
                </div>
            </div>
        </section>
    )
}

export default AboutSection;