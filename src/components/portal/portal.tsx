import { createPortal } from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  return typeof window !== "undefined"
    ? createPortal(children, document.body)
    : null;
}
