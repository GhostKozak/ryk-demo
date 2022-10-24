import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import "animate.css";
import "swiper/css";
import "swiper/css/autoplay";


const ProjectListSlider = () => {
    return (
        <section className="projectListSlider">
            <Swiper autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }} modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                <SwiperSlide>
                    <div className="project">
                        <img src="https://images.wallpaperscraft.com/image/single/street_neon_night_city_139596_1280x720.jpg" alt="" />
                        <div className="body">
                            <h3>Project A</h3>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                            <button className="center-button">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <img src="https://images.wallpaperscraft.com/image/single/street_neon_night_city_139596_1280x720.jpg" alt="" />
                        <div className="body">
                            <h3>Project A</h3>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                            <button className='center-button'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <img src="https://images.wallpaperscraft.com/image/single/street_neon_night_city_139596_1280x720.jpg" alt="" />
                        <div className="body">
                            <h3>Project A</h3>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                            <button className='center-button'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <img src="https://images.wallpaperscraft.com/image/single/street_neon_night_city_139596_1280x720.jpg" alt="" />
                        <div className="body">
                            <h3>Project A</h3>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                            <button className='center-button'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <img src="https://images.wallpaperscraft.com/image/single/street_neon_night_city_139596_1280x720.jpg" alt="" />
                        <div className="body">
                            <h3>Project A</h3>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                            <button className='center-button'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <img src="https://images.wallpaperscraft.com/image/single/street_neon_night_city_139596_1280x720.jpg" alt="" />
                        <div className="body">
                            <h3>Project A</h3>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                            <button className='center-button'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <img src="https://images.wallpaperscraft.com/image/single/street_neon_night_city_139596_1280x720.jpg" alt="" />
                        <div className="body">
                            <h3>Project A</h3>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                            <button className='center-button'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section >
    )
}

export default ProjectListSlider;