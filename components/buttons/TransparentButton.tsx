import clsx from "clsx";
import Link from "next/link";

export type TransparentButtonProps = React.HTMLProps<HTMLDivElement> & {
    text: string
    link: string
    className?: string
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
    text,
    link,
    className
}) => {
    return (
        <Link 
            className={clsx(
                'font-interTight font-semibold pt-2 pb-2 pl-3 pr-3 rounded-full text-primaryText select-none whitespace-nowrap',
                'transition-all duration-200',
                'sm:hover:bg-emphasizingColor2',
                'active:bg-emphasizingColor2 sm:active:bg',
                'border border-solid border-borderColor',
                className
            )}
            href={link}
        >
            {text}
        </Link>
    );
}

export default TransparentButton;