import { useEffect } from "react";
import { scrollToSectionById } from "./useScrollToSection";

export default function useScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const id = hash.replace("#", "");

    setTimeout(() => {
      scrollToSectionById(id);
    }, 800);
  }, []);
}