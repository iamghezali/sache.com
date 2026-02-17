import { StarIcon } from 'lucide-react';
import type { JSX } from 'react';

export default function ReviewStars({ value = 5 }): JSX.Element {
    const isValid = value >= 0 && value <= 5;
    const starCount = isValid ? Math.floor(value) : 0;

    return (
        <>
            <div
                className="relative inline-block"
                aria-label={`Rating: ${value} out of 5 stars`}
            >
                {/* Background Layer: 5 Dimmed Stars */}
                <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                            key={`bg-${i}`}
                            strokeWidth={0}
                            fill="#e0e0e0"
                        />
                    ))}
                </div>

                {/* Foreground Layer: Active Stars */}
                <div className="absolute inset-0 flex items-center overflow-hidden text-[#FFA52F]">
                    {Array.from({ length: starCount }).map((_, i) => (
                        <StarIcon
                            key={`fg-${i}`}
                            strokeWidth={0}
                            fill="#FFA52F"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
