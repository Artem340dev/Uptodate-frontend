import React from 'react'
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

import filters_icon from '@/public/images/filters_icon_3.png';

export type TopicsFilterIconProps = React.SVGAttributes<SVGSVGElement> & {
    className?: string
}

export const TopicsFilterIcon: React.FC<TopicsFilterIconProps> = ({
    className,
    ...props
}) => {
    return (
      <svg 
        width="29" 
        height="27" 
        viewBox="0 0 29 27" 
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          'w-auto h-full object-contain select-none'
        )}
        {...props}
      >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H0V12H12V0ZM28.8564 12L21.9282 0L15 12H28.8564ZM12 21C12 24.3137 9.31371 27 6 27C2.68629 27 0 24.3137 0 21C0 17.6863 2.68629 15 6 15C9.31371 15 12 17.6863 12 21ZM22.7981 19.5836L21.3088 15L19.8195 19.5836H15L18.899 22.4164L17.4097 27L21.3088 24.1672L25.2078 27L23.7185 22.4164L27.6175 19.5836H22.7981Z" />
      </svg>
    )
}