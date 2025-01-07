import Image from "next/image"
import icon from '@/public/images/filters_icon_2.png';
import clsx from "clsx";

export type UnwrappingElementIconProps = React.SVGAttributes<SVGSVGElement>

export const UnwrappingElementIcon: React.FC<UnwrappingElementIconProps> = ({ ...props }) => {
  return (
    <svg 
      viewBox="0 0 16 9" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0709 2.34322L8.70692 8.70718C8.31639 9.0977 7.68323 9.0977 7.2927 8.70718L0.928741 2.34322C0.538216 1.95269 0.538216 1.31953 0.928741 0.929002C1.31926 0.538477 1.95243 0.538477 2.34295 0.929002L7.99981 6.58586L13.6567 0.929002C14.0472 0.538477 14.6804 0.538477 15.0709 0.929002C15.4614 1.31953 15.4614 1.95269 15.0709 2.34322Z" />
    </svg>
  )
}