import {useEffect, useState} from "react";

type ScrollResult = {
    bgPositionY: number,
    welcomeText : {
        positionY: number,
        opacity: number
    },
};

/**
 * Hook allowing to track the onScroll event of the window
 * @returns ScrollResult
 */
export default function useScroll(): ScrollResult
{
    const [result, setResult] = useState<ScrollResult>({
        bgPositionY: 0,
        welcomeText : {
            positionY: 0,
            opacity: 1
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            setResult({
                bgPositionY:  window.scrollY / 10,
                welcomeText : {
                    positionY: window.scrollY / 3,
                    opacity: 1 - (window.scrollY / 500)
                }
            });
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    return result;
}