import { useState, useEffect } from "react";

function useHeaderState() {
  const [isVisible, setVisible] = useState(false);

  const onToggle = () => setVisible(!isVisible);
  const onClose = () => setVisible(false);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isVisible]);

  return { isVisible, onToggle, onClose };
}

export default useHeaderState;
