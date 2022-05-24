import Link from 'next/link';
import React, { CSSProperties } from 'react';
import { Container, ListItem, TextLink } from './styles';
import Icon from 'supercons'

interface ItemProps {
    content: string;
    url: string;
    iconName?: string;
}

interface ListProps {
    items: ItemProps[]
    stripped?: boolean;
    style?: CSSProperties;
    className?: string;
    iconsStyle?: CSSProperties;
    iconsSize: number;
    itemStyle?: CSSProperties;
    textItemStyle?: CSSProperties;
    textItemClassName?: string;
}

export function ListLink({
    items,
    stripped,
    style,
    className,
    iconsSize,
    iconsStyle,
    itemStyle,
    textItemStyle,
    textItemClassName
}: ListProps) {
    return (
        <Container
            style={style}
            className={className}
            data-testid='listlink-testid'
        >
            {stripped ?
                items.map((item, index) => (
                    item.iconName ?
                        <ListItem
                            key={item.content}
                            className={index % 2 === 0 ? 'stripped' : ''}
                            style={itemStyle}
                        >
                            <div
                                style={iconsStyle}
                            >
                                <Icon
                                    gluph={item.iconName} size={iconsSize}
                                />
                            </div>
                            <Link href={item.url} passHref>
                                <TextLink
                                    style={textItemStyle}
                                    className={textItemClassName}
                                >
                                    {item.content}
                                </TextLink>
                            </Link>
                        </ListItem>
                        :
                        <ListItem
                            key={item.content}
                            className={index % 2 === 0 ? 'stripped' : ''}
                        >
                            <Link href={item.url} passHref>
                                <TextLink
                                    style={textItemStyle}
                                    className={textItemClassName}
                                >
                                    {item.content}
                                </TextLink>
                            </Link>
                        </ListItem>
                ))
                :
                items.map(item => (
                    item.iconName ?
                        <ListItem
                            key={item.content}
                        >
                            <Icon
                                gluph={item.iconName} size={iconsSize}
                            />
                            <Link href={item.url} passHref>
                                <TextLink
                                    style={textItemStyle}
                                    className={textItemClassName}
                                >
                                    {item.content}
                                </TextLink>
                            </Link>
                        </ListItem>
                        :
                        <ListItem
                            key={item.content}
                        >
                            <Link href={item.url} passHref>
                                <TextLink
                                    style={textItemStyle}
                                    className={textItemClassName}
                                >
                                    {item.content}
                                </TextLink>
                            </Link>
                        </ListItem>
                ))
            }

        </Container>
    )
}