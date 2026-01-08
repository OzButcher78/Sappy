
import React, { useState, useEffect, createContext, useContext } from 'react';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import Websites from './pages/Websites.tsx';
import Services from './pages/Services.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Legal from './pages/Legal.tsx';
import Privacy from './pages/Privacy.tsx';

// Navigation Context to allow deep components to navigate without breaking the sandbox
interface NavigationContextType {
  path: string;
  navigateTo: (newPath: string) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  path: '/',
  navigateTo: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

const App: React.FC = () => {
  // Initialize from hash if available, otherwise default to home
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash.replace(/^#/, '') || '/';
    return hash;
  });

  const navigateTo = (newPath: string) => {
    // Standardize path
    const sanitizedPath = newPath.startsWith('/') ? newPath : `/${newPath}`;
    setCurrentPath(sanitizedPath);
    // Update hash silently for URL consistency without triggering reload issues
    window.location.hash = sanitizedPath;
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.replace(/^#/, '') || '/';
      if (newHash !== currentPath) {
        setCurrentPath(newHash);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]);

  const renderPage = () => {
    const [path] = currentPath.split('?');
    const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');

    // Project detail route handling: supports /projects/slug
    if (normalizedPath.startsWith('/projects/') && normalizedPath.split('/').length >= 3) {
      const slug = normalizedPath.split('/')[2];
      return <ProjectDetail slug={slug} />;
    }

    switch (normalizedPath) {
      case '/': 
      case '':
        return <Home />;
      case '/projects': 
        return <Projects />;
      case '/websites': 
        return <Websites />;
      case '/services': 
        return <Services />;
      case '/about': 
        return <About />;
      case '/contact': 
        return <Contact />;
      case '/legal':
        return <Legal />;
      case '/privacy':
        return <Privacy />;
      default: 
        return <Home />;
    }
  };

  const getActiveId = () => {
    const path = currentPath.split('?')[0];
    if (path === '/' || path === '' || path === '/home') return 'home';
    return path.split('/')[1];
  };

  return (
    <NavigationContext.Provider value={{ path: currentPath, navigateTo }}>
      <Layout activePage={getActiveId()}>
        {renderPage()}
      </Layout>
    </NavigationContext.Provider>
  );
};

export default App;
