import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        className="fixed text-[30px] w-[50px] h-[50px] pb-[45px] bottom-4 right-4 p-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
        onClick={scrollToTop}
      >
        ^
      </button>
    )
  );
};

export default BackToTop;