import clsx from "clsx";
import Link from "next/link";
import { CustomButtonProps } from "./custom_button_props";

export type RedButtonProps = CustomButtonProps

const RedButton: React.FC<RedButtonProps> = ({
    text,
    link,
    onClickButton,
    customClassName,
    ...props
}) => {
    return (
        (link ?
            <Link
                className={clsx(
                    'font-interTight pt-2 pb-2 pl-3 pr-3 text-oppositeText bg-red-500 select-none whitespace-nowrap',
                    'transition-all duration-200',
                    'sm:hover:opacity-[0.5]',
                    'active:opacity-[0.5] sm:active:opacity',
                    customClassName
                )}
                href={link}
                legacyBehavior
            >
                <a {...props}>{text}</a>
            </Link>
        :
            <button
                className={clsx(
                    'font-interTight pt-2 pb-2 pl-3 pr-3 text-oppositeText bg-red-500 text-center select-none whitespace-nowrap',
                    'transition-all duration-200',
                    'sm:hover:opacity-[0.5]',
                    'active:opacity-[0.5] sm:active:opacity',
                    'text text-align-center',
                    customClassName
                )}
                onClick={onClickButton}
            >
                <a {...props}>{text}</a>
            </button>
        )
    );
}

export default RedButton;