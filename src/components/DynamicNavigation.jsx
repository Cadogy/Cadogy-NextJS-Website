import { useState, useEffect } from 'react';
import Navigation from './Navigation';

const DynamicNavigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Navigation scrolled={scrolled} />;
};

export default DynamicNavigation;
