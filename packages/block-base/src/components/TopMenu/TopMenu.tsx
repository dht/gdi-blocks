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
    colorsFont: IMenuItemColorFont;
    mobileMenu: IMenuMobile;
};

export type IMenuItemColorFont = {
    isColor?: boolean;
    backgroundColor?: string;
    textColor?: string;
    fontFamily?: string;
    fontSize?: string;
};
   

export type IMenuMobile ={
    isPostionChanged?: boolean;
   position?: string;
   zIndex?: number;
   float?: string;
   backgroundColor?: string;
   color?: string;
   fontFamily?: string;
   fontSize?: string;
};



export type IMenuItem = {
    href: string;
    title: string;
    isTitle?: boolean;
    isFlex?: boolean;
};

export function TopMenu(props: TopMenuProps) {
    const { items, color = 'white' , colorsFont} = props;
    const { width } = useWindowSize();

    if (width < 700) {
        return <TopMenuMobile {...props} />;
    }
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
            <MenuItem key={href} colorFont={colorsFont}>
                <MenuItemLink
                    key={item.title + String(index)}
                    className={className}
                    href={href}
                    onClick={() => props.onClick(item)}
                    colorFont={colorsFont}
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