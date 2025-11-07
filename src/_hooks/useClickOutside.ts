import { useEffect, type RefObject } from "react";

const useClickOutside = (containerRef: RefObject<HTMLElement | null>, callback: () => void) => {
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) callback();
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [containerRef, callback]);
};

export default useClickOutside;
