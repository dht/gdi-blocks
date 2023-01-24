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

export type TopMenuProps = {
    items: IMenuItem[];
    onClick: (item: IMenuItem) => void;
};

type IMenuItem = {
    href: string;
    title: string;
};

export function TopMenu(props: TopMenuProps) {
    const { items } = props;
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
            <MenuItem key={href}>
                <MenuItemLink
                    key={item.title + String(index)}
                    className={className}
                    href={href}
                    onClick={() => props.onClick(item)}
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
            animate__fadeInUp: showOverlay,
            animate__fadeOutDown: !showOverlay,
            hideOverlay: typeof showOverlay === 'undefined',
            disableOverlay: !showOverlay,
        });

        return (
            <Overlay className={className}>
                <Close onClick={() => setShowOverlay(false)}>
                    <i className='material-icons'>close</i>
                </Close>
                {renderItems()}
            </Overlay>
        );
    }

    function renderMenu() {}

    return (
        <Wrapper className='TopMenu-wrapper' data-testid='TopMenu-wrapper'>
            <Button onClick={() => setShowOverlay(true)} buttonColor={"black"} >
                <i className='material-icons'>menu</i>
            </Button>
            {renderOverlay()}
        </Wrapper>
    );
}

export default TopMenu;
