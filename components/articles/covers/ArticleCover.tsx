import { ArticleModel } from "@/models/article";
import { UserAvatarIcon } from "@/ui/icons/UserAvatarIcon";
import { formatDateExtended, retrieveDateFromISO } from "@/utils/date_utils";
import { capitalizeText, parseQueryText } from "@/utils/text_utils";
import { Card, CardBody, CardFooter, CardHeader, Image, Link, Tooltip } from "@nextui-org/react";
import clsx from "clsx";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { ArticleLikeButton } from "../likes/ArticleLikeButton";

export type ArticleCoverProps = {
    article: ArticleModel
    url: string
    query?: string
    className?: string
    extended: boolean
}

export const ArticleCover: React.FC<ArticleCoverProps> = ({
    article,
    url,
    query,
    extended,
    className
}) => {
    const [dayCreated, monthCreated, yearCreated] = useMemo(() => retrieveDateFromISO(article.createdAt), [article.createdAt]);

    const dispatch = useDispatch();

    return (
        <Card 
            shadow="none"
            radius="none"
            classNames={{
                base: 'bg-[transparent]'
            }}
        >
            <CardHeader className={clsx(
                "absolute p-2 z-[999]",
                !extended && 'hidden'
            )}>
                <ArticleLikeButton article={article} />
            </CardHeader>
            <CardBody className={clsx(
                "overflow-visible p-0",
                !extended && 'hidden'
            )}>
                <Image
                    alt={article.heading}
                    className="w-full object-cover object-top aspect-[5/3]"
                    radius="lg"
                    shadow="none"
                    disableSkeleton={false}
                    src={url}
                    width="100%"
                />
            </CardBody>
            <CardFooter className="pl-0 pr-0 pb-0">
                <div className={clsx(
                    'flex gap-2',
                    extended && 'flex-col',
                    !extended && 'flex-row'
                )}>
                    {!extended &&
                        <div className="w-2/5">
                            <Image
                                alt={article.heading}
                                className="w-full object-cover object-top aspect-[5/3]"
                                radius="lg"
                                shadow="none"
                                disableSkeleton={false}
                                src={url}
                                width="100%"
                            />
                        </div>
                    }
                    {extended &&
                        <div className={clsx(
                            'flex flex-row gap-2 items-center'
                        )}>
                            <UserAvatarIcon 
                                url={'/api/files/get?path=' + (article.author && article.author?.icon)}
                                size="sm"
                                className='w-full h-full aspect-square object-cover'
                            />
                            <div className={clsx(
                                'flex flex-col h-auto'
                            )}>
                                <p className={clsx(
                                    'relative font-interTight font-semibold text text-sm text-primaryText line-clamp-1'
                                )}>{article.author?.firstName + " " + article.author?.lastName}</p>
                                <p className={clsx(
                                    'relative font-interTight font-medium text text-sm text-roseText line-clamp-1'
                                )}>{formatDateExtended(article.createdAt)}</p>
                            </div>
                        </div>
                    }
                    <div className={clsx(
                        'flex flex-col gap-2',
                        !extended && 'w-3/5'
                    )}>
                        <div className="flex flex-col gap-1">
                            <Tooltip
                                content='Click to read'
                                closeDelay={0}
                                classNames={{
                                    content: 'bg-backgroundColor font-interTight font-semibold text-primaryColor'
                                }}
                            >
                                <Link 
                                    href={`/${dayCreated}/${monthCreated}/${yearCreated}/${article.heading}`}
                                    className={clsx(
                                        'sm:hover:opacity-50',
                                        'active:opacity-50 sm:active:opacity'
                                    )}
                                >
                                    <p className={clsx(
                                        "font-interTight font-semibold text-primaryText line-clamp-2",
                                        extended && 'text-base',
                                        !extended && 'text-sm'
                                    )}>{parseQueryText(capitalizeText(article.heading), query || '', 'bg-roseText text-primaryText')}</p>
                                </Link>
                            </Tooltip>
                            <p className={clsx(
                                "font-interTight font-medium text-secondaryText line-clamp-3",
                                extended && 'text-base',
                                !extended && 'text-sm' 
                            )}>{parseQueryText(article.description, query || '', 'bg-roseText text-primaryText')}</p>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default ArticleCover;