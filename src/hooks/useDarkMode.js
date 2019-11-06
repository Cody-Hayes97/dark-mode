import { useLocalStorage } from "./UseLocalStorage";
import { useEffect } from "react";

export function useDarkMode(initialValues = {}) {
  const [value, setValue] = useLocalStorage("DarkModeOn", initialValues);

  useEffect(() => {
    if (value) {
      document.body.classList.toggle("dark-mode");
    } else {
      document.body.className = "";
    }
  }, [value]);

  return [value, setValue];
}
