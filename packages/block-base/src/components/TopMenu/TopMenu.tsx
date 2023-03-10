import React from 'react';
import { Wrapper, MenuItem, MenuItemLink } from './TopMenu.style';
import classnames from 'classnames';
import { useTheme } from 'styled-components';
import { useWindowSize } from 'react-use';
import { TopMenu as TopMenuMobile } from './mobile/TopMenuMobile';

export type TopMenuProps = {
    items: IMenuItem[];
    onClick: (item: IMenuItem) => void;
    color?: string;
};

type IMenuItem = {
    href: string;
    title: string;
};

export function TopMenu(props: TopMenuProps) {
    const { items, color = 'white' } = props;
    const { width } = useWindowSize();

    if (width < 700) {
        return <TopMenuMobile {...props} />;
    }

    function renderItem(item: IMenuItem, index: number) {
        const { title, href } = item;

        if (!title) {
            return null;
        }

        const className = classnames(item, {
            selected: false,
        });

        return (
            <MenuItem key={href} color={color}>
                <MenuItemLink
                    key={item.title + String(index)}
                    className={className}
                    href={href}
                    onClick={() => props.onClick(item)}
                    color={color}
                >
                    {title}
                </MenuItemLink>
            </MenuItem>
        );
    }

    function renderItems() {
        return items.map((item: IMenuItem, index) => renderItem(item, index));
    }

    return (
        <Wrapper className='TopMenu-wrapper' data-testid='TopMenu-wrapper'>
            {renderItems()}
        </Wrapper>
    );
}

export default TopMenu;
