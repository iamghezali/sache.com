import type { JSX } from 'react';

interface Props {
    children?: string;
}

export default function RevealTextOnScroll({ children }: Props): JSX.Element {
    const words = children?.split(' ');

    return (
        <p className="text-6xl/tight font-medium capitalize">
            {words?.map((word, index) => (
                <span
                    key={index}
                    data-aos="mute-text"
                    data-aos-anchor-placement="top-top"
                    data-aos-offset="-32"
                >
                    {' '}
                    <span
                        data-aos="unmute-text"
                        data-aos-anchor-placement="top-center"
                        data-aos-duration="1000"
                    >
                        {word}
                    </span>
                </span>
            ))}
        </p>
    );
}
