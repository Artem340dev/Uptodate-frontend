import clsx from "clsx"

export type SortbyFilterIconProps = React.SVGAttributes<SVGSVGElement> & {
    className?: string
}

export const SortbyFilterIcon: React.FC<SortbyFilterIconProps> = ({
    className,
    ...props
}) => {
  return (
    <svg 
        width="26" 
        height="25" 
        viewBox="0 0 26 25" 
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
            'w-auto h-full object-contain select-none'
        )}
        {...props}
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99988 12.5C3.99988 7.39737 8.1364 3.26087 13.239 3.26087C18.3416 3.26087 22.4781 7.39737 22.4781 12.5C22.4781 17.6026 18.3416 21.7391 13.239 21.7391C8.1364 21.7391 3.99988 17.6026 3.99988 12.5ZM13.239 0C6.33553 0 0.739014 5.59643 0.739014 12.5C0.739014 19.4035 6.33553 25 13.239 25C20.1425 25 25.739 19.4035 25.739 12.5C25.739 5.59643 20.1425 0 13.239 0ZM14.8694 8.15217C14.8694 7.25172 14.1394 6.52174 13.239 6.52174C12.3386 6.52174 11.6086 7.25172 11.6086 8.15217V12.1657C11.6086 12.5578 11.7501 12.937 12.0068 13.2335L14.1808 15.7417C14.7705 16.4222 15.8003 16.4957 16.4807 15.9061C17.1612 15.3163 17.2347 14.2865 16.6451 13.6061L14.8694 11.5574V8.15217Z" />
    </svg>    
  )
}