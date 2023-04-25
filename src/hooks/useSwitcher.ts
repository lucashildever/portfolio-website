import { useState, useEffect, useRef } from "react";

function useSwitcher(delay: number) {
  const [switcher, setSwitcher] = useState<boolean>(false);
  const intervalRef = useRef<number | undefined>();
  const timeoutRef = useRef<number | undefined>();

  useEffect(() => {
    timeoutRef.current = setTimeout(()=> {
      intervalRef.current = setInterval(() => {
        setSwitcher((prevSwitcher) => !prevSwitcher);
      }, 7000);
      clearInterval(timeoutRef.current);
    }, delay)

    clearInterval(intervalRef.current);
  }, []);

  return switcher;
}

export default useSwitcher