import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import AboutMePage from '@/pages/AboutMePage';
// import ProjectsPage from '@/pages/ProjectsPage';
// import SkillsPage from '@/pages/SkillsPage';
// import BlogPage from '@/pages/BlogPage';
// import ContactPage from '@/pages/ContactPage';
import { AnimatePresence, motion } from 'framer-motion'; // For page transitions
// import AboutMePage from './pages/AboutMePage';


// Component to wrap routes for animation
const AnimatedRoutes = () => {
  const location = useLocation();

  // Define your page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '100vw', // Start from the right for initial load or next page
    },
    in: {
      opacity: 1,
      x: 0, // Slide to center
    },
    out: {
      opacity: 0,
      x: '-100vw', // Slide to the left when exiting
    },
  };

  // Define transition properties
  const pageTransition = {
    type: 'tween', // Or 'spring'
    ease: 'easeOut',
    duration: 0.3, // Shorter duration for snappier feel
  };

  return (
    <AnimatePresence mode="wait"> {/* 'wait' mode waits for exit animation to complete before new component mounts */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            key="about" // Unique key for each route ensures animation re-triggers
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ width: '100%' }} // Ensure motion.div takes full width
          >
            <AboutMePage />
          </motion.div>
        } />
        <Route path="/projects" element={
          <motion.div
            key="projects"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ width: '100%' }}
          >
            {/* <ProjectsPage /> */}
          </motion.div>
        } />
        <Route path="/skills" element={
          <motion.div
            key="skills"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ width: '100%' }}
          >
            {/* <SkillsPage /> */}
          </motion.div>
        } />
        <Route path="/blog" element={
          <motion.div
            key="blog"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ width: '100%' }}
          >
            {/* <BlogPage /> */}
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            key="contact"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ width: '100%' }}
          >
            {/* <ContactPage /> */}
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <MainLayout>
        <AnimatedRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;