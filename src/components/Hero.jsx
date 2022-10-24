import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";

//Animation
import { motion } from "framer-motion"
import { fadeInDown, titleAnimation, zoom } from "../animation";

//CSS
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Hero = () => {
    return (
        <section className="hero">
            <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{
                delay: 6000,
                disableOnInteraction: true
            }} className="mySwiper" style={{ color: "#F0AB27" }}>
                <SwiperSlide>
                    <div className='slider-content'>
                        <img src="https://w.wallhaven.cc/full/ey/wallhaven-eyqexl.jpg" className='bg' alt="" />
                        <div className="container">
                            <motion.div className="slider-text" variants={fadeInDown} initial="hidden" whileInView="show" viewport >
                                <div className="hide">
                                    <motion.h1 variants={titleAnimation}>Lorem ipsum</motion.h1>
                                </div>
                                <div className="hide">
                                    <motion.p variants={titleAnimation}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus placeat rerum ad aliquam dolorum fugit saepe, eum rem nulla! Saepe voluptatum sunt mollitia fuga cupiditate esse dolores eum, quibusdam temporibus?</motion.p>
                                </div>
                                <motion.button className='button-primary' variants={zoom}>Read More</motion.button>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-content'>
                        <img src="https://w.wallhaven.cc/full/4g/wallhaven-4g9wml.jpg" className='bg' alt="" />
                        <div className="container">
                            <motion.div className="slider-text" variants={fadeInDown} initial="hidden" whileInView="show" viewport >
                                <div className="hide">
                                    <motion.h1 variants={titleAnimation}>Lorem ipsum</motion.h1>
                                </div>
                                <div className="hide">
                                    <motion.p variants={titleAnimation}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus placeat rerum ad aliquam dolorum fugit saepe, eum rem nulla! Saepe voluptatum sunt mollitia fuga cupiditate esse dolores eum, quibusdam temporibus?</motion.p>
                                </div>
                                <motion.button className='button-primary' variants={zoom}>Read More</motion.button>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-content'>
                        <img src="https://w.wallhaven.cc/full/4y/wallhaven-4yre8g.jpg" className='bg' alt="" />
                        <div className="container">
                            <motion.div className="slider-text" variants={fadeInDown} initial="hidden" whileInView="show" viewport >
                                <div className="hide">
                                    <motion.h1 variants={titleAnimation}>Lorem ipsum</motion.h1>
                                </div>
                                <div className="hide">
                                    <motion.p variants={titleAnimation}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus placeat rerum ad aliquam dolorum fugit saepe, eum rem nulla! Saepe voluptatum sunt mollitia fuga cupiditate esse dolores eum, quibusdam temporibus?</motion.p>
                                </div>
                                <motion.button className='button-primary' variants={zoom}>Read More</motion.button>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}


export default Hero;