import { FiltersContext, FiltersProvider } from '@/hooks/explore/useFilters';
import clsx from 'clsx';
import React from 'react';
import { LayoutProps } from './layout.type';

export type MenuPageLayoutProps = LayoutProps;

const MenuPageLayout: React.FC<MenuPageLayoutProps> = ({
    children,
    topMenu,
    footer,
    ...props
}) => {
    return (
        <div className='relative flex flex-col items-center gap-16 w-full h-auto'>
            <div className={clsx(
                'relative flex flex-col items-center gap-8 w-full h-auto'
            )}>
                {topMenu}
                <div className={clsx(
                    'relative flex flex-col items-center gap-8 sm:gap-16 mt-[120px] w-full'
                )}>
                    {children}
                </div>
            </div>
            {footer}
        </div>
    );
}

export default MenuPageLayout;