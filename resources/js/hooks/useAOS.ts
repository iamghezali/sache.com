import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLayoutEffect } from 'react';

export default function useAOS() {
    useLayoutEffect(() => {
        function runOnLoad() {
            AOS.init();
            AOS.refreshHard();
        }

        if (typeof window !== 'undefined') {
            if (document.readyState === 'complete') {
                runOnLoad();
            } else {
                window.addEventListener('load', runOnLoad);

                return () => window.removeEventListener('load', runOnLoad);
            }
        }
    }, []);

    return AOS;
}
