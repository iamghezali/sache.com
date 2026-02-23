import { useEffect, useRef, useState } from 'react';

export default function useCountdown() {
    const [secondsLeft, setSecondsLeft] = useState<number>(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const countDown = (seconds: number) => {
        if (secondsLeft > 0) return;

        setSecondsLeft(seconds);

        intervalRef.current = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return { secondsLeft, countDown };
}
