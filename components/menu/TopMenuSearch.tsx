import { useLocalSearch } from "@/hooks/explore/useLocalSearch";
import { useSearchQuery } from "@/hooks/explore/useSearch";
import { useDictionary } from "@/hooks/useDictionary";
import { ArticleModel } from "@/models/article";
import { clearHistory, removeQuery } from "@/store/features/history/historySlice";
import { RootState } from "@/store/store";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CentredDrawer } from "../../ui/drawers/CentredDrawer";
import { DrawerBody, DrawerTrigger } from "../../ui/drawers/drawer_components";
import { CloseIcon } from "../../ui/icons/CloseIcon";
import { SearchIcon } from "../../ui/icons/SearchIcon";
import IconInput from "../../ui/inputs/IconInput";
import DefaultLink from "../../ui/links/DefaultLink";
import RedLink from "../../ui/links/RedLink";
import SearchArticleCover from "../articles/covers/SearchArticleCover";

export type TopMenuSearchProps = React.HTMLProps<HTMLDivElement> & {
    onPerformingSearch?: () => void
}

const TopMenuSearch: React.FC<TopMenuSearchProps> = ({
    onPerformingSearch,
    ...props
}) => {
    const [result, setResult] = useState<ArticleModel[]>([]);
    const router = useRouter();

    const { language, translate } = useDictionary();

    const { history } = useSelector((state: RootState) => state.history);
    const dispatch = useDispatch();

    const { searchInput, query, setQuery } = useLocalSearch(
        <IconInput
            placeholder={translate('common.search.search_placeholder')}
            customClassName='w-full'
            inputClassName='text-base'
            fullBordered={true}
            icon={
                <SearchIcon
                    className="fill-secondaryText" 
                />
            }
        />
    );

    const { data, refetch } = useSearchQuery(
        { 
            count: 3,
            query: query,
            miniSearch: true,
            filters: {topics: [], sort_by: undefined}
        },
        {
            enabled: false,
            refetchOnWindowFocus: false,
        },
    );

    const performSearch = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLAnchorElement>, providedQuery?: string) => {
        event.preventDefault();
        onPerformingSearch && onPerformingSearch();

        router.push(`/explore?query=${encodeURIComponent(providedQuery || query)}`);
    }

    useEffect(() => {
        refetch();
    }, [query]);

    useEffect(() => {
        if (data?.articles) {
            setResult(data.articles);
        }
    }, [data]);
    
    return (
        <CentredDrawer
            drawerSize="md"
            title={translate('common.search.drawer.name')}
            closeTooltip={translate('common.search.drawer.close_tooltip')}
        >
            <DrawerTrigger>
                {(onClick) => (
                    <div className={clsx(
                        'h-4'
                    )}>
                        <SearchIcon
                            className={clsx(
                                'fill-primaryColor',
                                'transition-all duration-200',
                                'sm:hover:opacity-50',
                                'active:opacity-50 sm:active:opacity'
                            )}
                            onClick={onClick}
                        />
                    </div>
                )}
            </DrawerTrigger>
            <DrawerBody>
                <form onSubmit={performSearch}>
                    {searchInput}
                </form>
                <Accordion
                    isCompact
                    itemClasses={{
                        title: 'font-interTight font-semibold text-primaryText text-base'
                    }}
                >
                    <AccordionItem
                        title={translate('common.search.recent_queries_text')}
                    >
                        <div className={clsx(
                            'flex flex-col w-full gap-2'
                        )}>
                            <div className={clsx(
                                'flex flex-col gap-4 justify-between w-full'
                            )}>
                                <div className={clsx(
                                    'flex flex-col'
                                )}>
                                    {history.filter((query, index) => index < 10).map(query =>
                                        <div className={clsx(
                                            'flex flex-row justify-between w-full'
                                        )}>
                                            <DefaultLink
                                                text={query}
                                                link=""
                                                onClick={(event: React.MouseEvent<HTMLAnchorElement>) => performSearch(event, query)}
                                                actived={true}
                                                customClassName='font-interTight font-semibold text-primaryText'
                                            />
                                            <Button
                                                isIconOnly
                                                className="text-default-400"
                                                size="sm"
                                                variant="light"
                                                onPress={() => dispatch(removeQuery({query: query}))}
                                            >
                                                <div 
                                                    className="w-3 aspect-square"
                                                >
                                                    <CloseIcon customClassName="fill-secondaryText" />
                                                </div>
                                            </Button>
                                        </div>

                                    )}
                                </div>
                                <div className={clsx(
                                    'w-auto'
                                )}>
                                    <RedLink 
                                        text={translate('common.search.clear_history_button')}
                                        link=''
                                        onClick={(event: React.MouseEvent<HTMLAnchorElement>) => dispatch(clearHistory())}
                                        customClassName={clsx(
                                            'font-interTight font-semibold text-sm',
                                            history.length <= 0 && 'hidden'
                                        )}
                                        actived={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>
                <div className={clsx(
                    'flex flex-col gap-1 w-full h-auto'
                )}>
                    {result.map((article, index) =>
                        <div>
                            <SearchArticleCover
                                key={index}
                                id={article.id}
                                heading={article.heading}
                                description={article.description}
                                createdAt={article.createdAt}
                                query={query}
                                topics={article.topics}
                                author={article.author}
                                url={"/api/files/get?path=articles/" + article.id + "/icon.png"}
                            />
                        </div>
                    )}
                </div>
            </DrawerBody>
        </CentredDrawer>
    );
}

export default TopMenuSearch;