import { useState, useEffect } from "react";

function useHeaderState() {
  const [isVisible, setVisible] = useState(false);
  const [isViewportScrolled, setViewportScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const updateOnResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      // document.body.style.overflow = "visible";
    } else {
      setIsMobile(false);
    }
  };

  const detectScroll = () => {
    if (window.scrollY > 50) setViewportScrolled(true);
    else setViewportScrolled(false);
  };

  // const hideMenu = () => setVisible(false);

  const toggle = () => setVisible(!isVisible);

  useEffect(() => {
    updateOnResize();
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateOnResize);
    return () => {
      window.removeEventListener("resize", updateOnResize);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isVisible]);

  return { isVisible, isViewportScrolled, toggle, isMobile };
}

export default useHeaderState;
