import React from 'react';
import { Wrapper, MenuItem, MenuItemLink } from './TopMenu.style';
import classnames from 'classnames';

export type TopMenuProps = {
    items: IMenuItem[];
    onClick: (item: IMenuItem) => void;
    colorsFont: IMenuItemColorFont;
};

export type IMenuItemColorFont = {
    isColor: boolean;
    backgroundColor: string;
    textColor: string;
    fontFamily: string;

};
   


export type IMenuItem = {
    href: string;
    title: string;
    isTitle?: boolean;
    isFlex?: boolean;
};

export function TopMenu(props: TopMenuProps) {
    const { items , colorsFont} = props;
    function renderItem(item: IMenuItem, index: number) {
        const { title, href, isTitle , isFlex } = item;
    
        console.log(colorsFont);
        if (!title) {
            return `text`;
        }

        const className = classnames(item, {
            selected: false,
        });

        return (
            <MenuItem key={href} extra={item}>
                <MenuItemLink
                    key={item.title + String(index)}
                    className={className}
                    href={href}
                    onClick={() => props.onClick(item)
                    } extra={item}
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
        <Wrapper className='TopMenu-wrapper' data-testid='TopMenu-wrapper' extra={colorsFont} >
            {renderItems()}
        </Wrapper>
    );
}

export default TopMenu;