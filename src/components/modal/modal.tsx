import React, { useState } from "react";
import { createPortal } from "react-dom";
import Portal from "@/components/portal";

type Props = {
  children: JSX.Element;
  activator: Function;
};

const Modal = ({ children, activator }: Props) => {
  const [show, setShow] = useState(false);

  // const content = show && (
  //   <div className="fixed inset-0 z-30 flex justify-center lg:items-center">
  //     <span
  //       id="blackOverlay"
  //       className="absolute w-full h-full bg-black opacity-60"
  //     ></span>
  //     <div className="relative modal lg:w-2/6 sm:w-4/6 xs:w-11/12 xs:top-20">
  //       {React.cloneElement(children, { setShow })}
  //     </div>
  //   </div>
  // );

  return (
    <React.Fragment>
      {activator({ setShow })}
      {/* {createPortal(content, document.body)} */}
      <Portal>
        {show && (
          <div className="fixed inset-0 z-30 flex justify-center lg:items-center">
            <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-60"
            ></span>
            <div className="relative modal lg:w-2/6 sm:w-4/6 xs:w-11/12 xs:top-20">
              {React.cloneElement(children, { setShow })}
            </div>
          </div>
        )}
      </Portal>
    </React.Fragment>
  );
};

export default Modal;
