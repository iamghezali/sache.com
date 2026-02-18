import { Link } from '@inertiajs/react';
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react';
import * as React from 'react';

import { buttonVariants, type Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
    return (
        <nav
            className={cn('mx-auto flex w-full justify-center', className)}
            role="navigation"
            aria-label="pagination"
            data-slot="pagination"
            {...props}
        />
    );
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
    return (
        <ul
            className={cn('flex flex-row items-center gap-4', className)}
            data-slot="pagination-content"
            {...props}
        />
    );
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
    return (
        <li
            data-slot="pagination-item"
            {...props}
        />
    );
}

type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
    React.ComponentProps<'a'>;

function PaginationLink({ href, className, isActive, children }: PaginationLinkProps) {
    return (
        <Link
            className={cn(
                buttonVariants({
                    variant: isActive ? 'neutral' : 'outline',
                    size: 'pagination',
                }),
                className,
            )}
            aria-current={isActive ? 'page' : undefined}
            data-slot="pagination-link"
            data-active={isActive}
            href={href}
            preserveScroll
        >
            {children}
        </Link>
    );
}

function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
    return (
        <PaginationLink
            className={cn('pl-2.5 uppercase', className)}
            aria-label="Go to previous page"
            {...props}
        >
            <ChevronLeftIcon />
            <span className="hidden sm:block">Previous</span>
        </PaginationLink>
    );
}

function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
    return (
        <PaginationLink
            className={cn('pr-2.5 uppercase', className)}
            aria-label="Go to next page"
            {...props}
        >
            <span className="hidden sm:block">Next</span>
            <ChevronRightIcon />
        </PaginationLink>
    );
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
    return (
        <span
            className={cn('flex size-9 items-center justify-center', className)}
            aria-hidden
            data-slot="pagination-ellipsis"
            {...props}
        >
            <MoreHorizontalIcon className="size-4" />
            <span className="sr-only">More pages</span>
        </span>
    );
}

export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };
