import { useEffect } from "react";

/**
 * Hook that detects clicks outside of the passed ref 
 */
const useClickedOutside = (ref, callback) => {
    useEffect(() => {
        /**
         * Return true if clicked outside of element
         */
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) 
                callback(true);
            else callback(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);
}

export default useClickedOutside;