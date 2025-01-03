import { SearchIcon } from "@/components/icons/SearchIcon";
import IconInput from "@/components/inputs/IconInput";
import { useSearch } from "@/hooks/useSearch";
import clsx from "clsx";
import ExplorePageFilters from "./ExplorePageFilters";
import BlueButton from "@/components/buttons/BlueButton";
import DefaultButton from "@/components/buttons/DefaultButton";

export type ExplorePageSearchProps = React.HTMLProps<HTMLDivElement> & {
}

const ExplorePageSearch: React.FC<ExplorePageSearchProps> = ({
}) => {
    const { articles, performSearch, query, setQuery } = useSearch();

    return (
        <div className={clsx(
            'w-full flex flex-col gap-2'
        )}>
            <p className={clsx(
                'font-interTight font-semibold text-sm'
            )}>Recent articles</p>
            <div className={clsx(
                'flex flex-col gap-2 w-full'
            )}>
                <div className={clsx(
                    'flex flex-row gap-4'
                )}>
                    <IconInput
                        placeholder='Search by name'
                        className='w-full'
                        inputClassName='text-base'
                        onValueChange={value => setQuery(value)}
                        icon={<SearchIcon />}
                    />
                    {/* <BlueButton
                        text='Search'
                        onClickButton={() => performSearch()}
                        className='font-interTight font-medium text-sm rounded-md'
                    /> */}
                </div>
                <ExplorePageFilters />
            </div>
            {query.length > 0 &&
                <p className={clsx(
                    'font-interTight font-medium text-base'
                )}>{`Articles with query '${query}' (${articles.length})`}</p>
            }
        </div>
    );
}

export default ExplorePageSearch;