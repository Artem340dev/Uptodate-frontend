import React from 'react'
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

export type ArticleCoverIconProps = React.ImgHTMLAttributes<HTMLElement> & {
    url: string,
    className?: string
}

export const ArticleCoverIcon: React.FC<ArticleCoverIconProps> = ({
    url,
    className,
    ...props
}) => {
  return (
    <Image
      src={url}
      alt='Image is likely not to be supported'
      className={clsx(
        'object-contain select-none',
        className
      )}
      width={1600}
      height={900}
    />
  )
}