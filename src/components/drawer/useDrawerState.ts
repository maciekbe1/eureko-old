import { useState, useEffect } from "react";

function useHeaderState() {
  const [isVisible, setVisible] = useState(false);

  const toggle = () => setVisible(!isVisible);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isVisible]);

  return { isVisible, toggle };
}

export default useHeaderState;
