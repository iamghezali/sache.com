import type { JSX } from 'react';
import placeholder from '@/assets/placeholder.svg';
export default function PlaceholderImage(): JSX.Element {
    return (
        <img
            className="absolute inset-0 size-full object-cover"
            src={placeholder}
            alt="Placeholder Image"
        />
    );
}
