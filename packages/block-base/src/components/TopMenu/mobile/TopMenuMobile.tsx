import React, { useEffect, useState } from 'react';
import {
    Wrapper,
    Button,
    MenuItem,
    MenuItemLink,
    Overlay,
    Close,
} from './TopMenuMobile.style';
import classnames from 'classnames';
import {IMenuMobile } from '../TopMenu'
export type TopMenuProps = {
    items: IMenuItem[];
    onClick: (item: IMenuItem) => void;
    mobileMenu: IMenuMobile;
};

type IMenuItem = {
    href: string;
    title: string;
};

export function TopMenu(props: TopMenuProps) {
    const { items , mobileMenu} = props;
    const [showOverlay, setShowOverlay] = useState<boolean>();

    useEffect(() => {
        if (showOverlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showOverlay]);

    function renderItem(item: IMenuItem, index: number) {
        const { title, href } = item;

        if (!title) {
            return null;
        }

        const className = classnames(item, {
            selected: false,
        });

        return (
            <MenuItem key={href} mobileMenus={mobileMenu} >
                <MenuItemLink
                    key={item.title + String(index)}
                    className={className}
                    href={href}
                    onClick={() => props.onClick(item) } mobileMenus={mobileMenu}
                   
                >
                    {title}
                </MenuItemLink>
            </MenuItem>
        );
    }

    function renderItems() {
        return items.map((item: IMenuItem, index) => renderItem(item, index));
    }

    function renderOverlay() {
        const className = classnames('animate__animated', {
            animate__fadeInLeft: showOverlay,
            animate__fadeOutLeft: !showOverlay,
            hideOverlay: typeof showOverlay === 'undefined',
            disableOverlay: !showOverlay,
        });

        return (
            <Overlay className={className} mobileMenus={mobileMenu}>
                <Close onClick={() => setShowOverlay(false)} mobileMenus={mobileMenu}>
                    <i className='material-icons'> {mobileMenu.isPostionChanged ? 'arrow_back' : 'close'}</i>
                </Close>
                {renderItems()}
            </Overlay>
        );
    }

    function renderMenu() {}

    return (
        <Wrapper className='TopMenu-wrapper' data-testid='TopMenu-wrapper' mobileMenus={mobileMenu}>
            <Button onClick={() => setShowOverlay(true)} mobileMenus={mobileMenu}> 
                <i className='material-icons'>menu</i>
            </Button>
            {renderOverlay()}
        </Wrapper>
    );
}

export default TopMenu;
