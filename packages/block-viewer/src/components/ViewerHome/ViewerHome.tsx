import { Logo, TrianglesBk } from '@gdi/web-ui';
import React, { useState } from 'react';
import {
    A,
    Content,
    H1,
    Li,
    LogoWrapper,
    Ul,
    Wrapper,
} from './ViewerHome.style';
import { sortBy } from 'shared-base';
import { useNavigate } from 'react-router-dom';
import BlockPreview from '../BlockPreview/BlockPreview';

export type ViewerHomeProps = {
    blocks: IBlocks;
};

export function ViewerHome(props: ViewerHomeProps) {
    const navigate = useNavigate();
    const [currentBlockName, setCurrentBlockName] = useState<string>('');
    const { blocks } = props;

    function onClick(path: string) {
        navigate(path);
    }

    function renderBlock(block: IBlock) {
        const { name } = block;

        const path = `/${name}`;

        return (
            <Li>
                <A
                    onClick={() => onClick(path)}
                    onMouseOver={() => setCurrentBlockName(name)}
                    key={block.id}
                    className='block'
                >
                    {name}
                </A>
            </Li>
        );
    }

    function renderBlocks() {
        return Object.values(blocks)
            .sort(sortBy('name'))
            .map((block: IBlock) => renderBlock(block));
    }

    function renderPreview() {
        return <BlockPreview blockName={currentBlockName} />;
    }

    return (
        <TrianglesBk>
            <Wrapper
                className='ViewerHome-wrapper'
                data-testid='ViewerHome-wrapper'
            >
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>

                <Content>
                    <H1>Blocks</H1>
                    <Ul>{renderBlocks()}</Ul>
                </Content>
                {renderPreview()}
            </Wrapper>
        </TrianglesBk>
    );
}

export default ViewerHome;
