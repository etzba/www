import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UseScrollTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, [location]);

  return null;
}
