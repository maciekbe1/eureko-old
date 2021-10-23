import Button from "@/components/button";
import Input from "@/components/input";
import Portal from "@/components/portal";
import Icon from "@/components/icon";
import { useState } from "react";
import { usePopper } from "react-popper";
export default function HeaderNavbarLogin({
  isViewportScrolled,
}: {
  isViewportScrolled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
  });
  return (
    <>
      <Button
        ref={setReferenceElement}
        className="absolute right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          path="mdiAccountCircle"
          size={isViewportScrolled ? 1 : 1.5}
          className="text-gray-200"
        />
      </Button>
      <Portal>
        {isOpen && (
          <div
            className="absolute z-20 bg-white rounded-md shadow-lg"
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div className="p-4">
              <Input name="name" />
              <Input name="password" />
              <Button variant="primary" size="small">
                Zaloguj
              </Button>
              <Button variant="primary" outline size="small">
                Anuluj
              </Button>
            </div>
          </div>
        )}
      </Portal>
    </>
  );
}
