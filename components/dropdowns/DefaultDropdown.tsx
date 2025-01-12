import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import clsx from "clsx";
import React, { useMemo, useState } from "react"
import { UnwrappingElementIcon } from "../icons/UnwrappingElementIcon";

export type DefaultDropdownProps = React.HTMLProps<HTMLDivElement> & {
    name: string
    icon?: React.ReactNode
    selectedKeys?: string[]
    componentSize: 'sm' | 'base' | 'md'
    onSelected?: (key: Set<string>) => void
    options: DefaultDropdownOption[]
}

export type DefaultDropdownOption = {
    name: string
    value: string
    icon?: React.ReactNode
}

const DefaultDropdown: React.FC<DefaultDropdownProps> = ({
    name,
    icon,
    componentSize,
    selectedKeys,
    onSelected,
    options
}) => {
    const [isOpen, setIsOpen] = useState<boolean>();

    const trigger = useMemo(() => 
        <div className={clsx(
            'flex flex-row items-center gap-2',
            'font-interTight font-semibold'
        )}>
            <div className={clsx(
                componentSize === 'sm' && 'h-4',
                componentSize === 'base' && 'h-4',
                componentSize === 'md' && 'h-5',
            )}>
                {icon}
            </div>
            <p className={clsx(
                `text-${componentSize}`
            )}>{name}</p>
            <div className={clsx(
                'h-1.5'
            )}>
                <UnwrappingElementIcon
                    className={clsx(
                        'w-auto h-full fill-primaryColor',
                        'transition-all duration-200',
                        isOpen && 'rotate-180'
                    )}
                />
            </div>
        </div>    
    , [name, icon, isOpen]);

    return (
        <Dropdown
            className="relative w-auto"
            onOpenChange={setIsOpen}
        >
            <DropdownTrigger
                className={clsx(
                    "w-auto text-primaryText",
                    "transition-all duration-200",
                    "sm:hover:opacity-50",
                    "active:opacity-50 sm:active:opacity"
                )}
            >
                {trigger}
            </DropdownTrigger>
            <DropdownMenu
                disallowEmptySelection
                selectionMode="single"
                itemClasses={{
                    title: 'font-interTight font-medium text-primaryText',
                    selectedIcon: "text-redText",
                }}
                variant="flat"
                selectedKeys={selectedKeys}
                closeOnSelect={false}
                onSelectionChange={(keys) => {
                    onSelected && onSelected(keys as Set<string>)
                }}
            >
                {options.map(option => 
                    <DropdownItem
                        key={option.value}
                        startContent={option.icon}
                    >
                        {option.name}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
}

export default DefaultDropdown;