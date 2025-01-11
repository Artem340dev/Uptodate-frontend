import clsx from "clsx";
import Link from "next/link";
import { CustomButtonProps } from "./custom_button_props";

export type DefaultButtonProps = CustomButtonProps

const DefaultButton: React.FC<DefaultButtonProps> = ({
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
                    'font-interTight pt-2 pb-2 pl-3 pr-3 rounded-full text-oppositeText bg-primaryColor select-none whitespace-nowrap',
                    'transition-all duration-200',
                    'sm:hover:opacity-[0.5]',
                    'active:opacity-[0.5] sm:active:opacity',
                    customClassName
                )}
                onClick={onClickButton}
                href={link || ''}
                {...props}
            >
                {text}
            </Link>
        :
            <button
                className={clsx(
                    'font-interTight pt-2 pb-2 pl-3 pr-3 rounded-full text-oppositeText bg-primaryColor select-none whitespace-nowrap',
                    'transition-all duration-200',
                    'sm:hover:opacity-[0.5]',
                    'active:opacity-[0.5] sm:active:opacity',
                    customClassName
                )}
                onClick={onClickButton}
            >
                <a {...props}>{text}</a>
            </button>
        )
    );
}

export default DefaultButton;