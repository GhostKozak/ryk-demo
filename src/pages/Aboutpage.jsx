import { Link, Outlet, useLocation } from 'react-router-dom'

//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

//Components
import StaticPageBanner from "../components/StaticPageBanner";

const Aboutpage = () => {
    const { pathname } = useLocation();
    const title = pathname.split("/")[2];
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            <StaticPageBanner title={title === undefined ? "Hakkımıza" : title.replace("-", " ")} />
            <section className="content">
                <div className="container">
                    <div className="side-nav">
                        <Link to="test">Test</Link>
                        <Link to="test2">Test 2</Link>
                    </div>
                    <div className="page">
                        <Outlet />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Aboutpage;