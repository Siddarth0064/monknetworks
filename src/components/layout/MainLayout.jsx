import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AnimatedBackground from './AnimatedBackground';

const MainLayout = ({ children }) => {
    const location = useLocation();
    const hideMasterBg = location.pathname === '/monknetworks/digital-solutions' ||
        location.pathname === '/monknetworks/about';

    return (
        <div style={{ minHeight: '100vh', width: '100%', background: '#050505' }}>
            {/* Master Background System - Hidden on specific pages for content focus */}
            {!hideMasterBg && <AnimatedBackground />}

            {/* Content Layer */}
            <div style={{ zIndex: 10, position: hideMasterBg ? 'static' : 'relative' }}>
                <Navbar />
                <main>
                    {hideMasterBg ? (
                        /* Direct render for scroll-driven 3D pages to prevent sticky positioning breaks */
                        <div>{children}</div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {children}
                        </motion.div>
                    )}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
