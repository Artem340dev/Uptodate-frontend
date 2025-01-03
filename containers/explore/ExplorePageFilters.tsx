import Filter from "@/components/filters/Filter"
import FilterSet from "@/components/filters/FilterSet"
import { FiltersIcon } from "@/components/icons/FiltersIcon"
import { useFilters } from "@/hooks/useFilters"
import { useTopics } from "@/hooks/useTopics"
import clsx from "clsx"
import { useState } from "react"

export type ExplorePageFiltersProps = React.HTMLProps<HTMLDivElement> & {

}

const ExplorePageFilters: React.FC<ExplorePageFiltersProps> = ({

}) => {
    const { filters, setFilter } = useFilters();
    const { topics } = useTopics();

    const [isUnwrapped, setIsUnwrapped] = useState(false);

    return (
        <div className={clsx(
            'flex flex-col',
            'transition-all duration-200',
            !isUnwrapped && 'gap-0',
            isUnwrapped && 'gap-4'
        )}>
            <div 
                className={clsx(
                    'flex flex-row items-center select-none gap-2',
                    'transition-all duration-200',
                    'sm:hover:opacity-50',
                    'active:hover:opacity-50 sm:active:opacity'
                )}
                onClick={() => setIsUnwrapped(prev => !prev)}
            >
                <FiltersIcon
                    className='w-auto h-3'
                />
                <p>Filters</p>
            </div>
            <div className={clsx(
                'flex flex-col gap-2',
                'transition-all duration-200',
                'overflow-hidden',
                isUnwrapped && 'max-h-auto',
                !isUnwrapped && 'max-h-0'
            )}>
                <Filter
                    name='Sort by'
                    isSelected={option => filters.sort_by === option}
                    applyFilter={option => setFilter('sort_by', option)}
                    options={['Ascending', 'Descending', 'Alphabetically']}
                    multiple={false}
                    unwrapping={true}
                />
                <FilterSet
                    name='Topics'
                >
                    {Array.from(new Set(topics.map(topic => topic.parent))).map(parent => 
                        <Filter
                            name={parent}
                            isSelected={option => filters.topics.includes(option)}
                            applyFilter={option => setFilter('topics', !filters.topics.includes(option) ? [...filters.topics, option] : filters.topics.filter(topic => topic !== option))}
                            options={topics.filter(topic => topic.parent === parent).map(topic => topic.name)}
                            multiple={true}
                            unwrapping={false}
                        />
                    )}
                </FilterSet>
            </div>
        </div>
    );
}

export default ExplorePageFilters;