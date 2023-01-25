import React from 'react';
import { Logo, TrianglesBk } from '@gdi/web-ui';
import { sortBy } from 'shared-base';
import { switchToFullscreen } from '../../utils/fullscreen';
import {
    A,
    Clear,
    Content,
    FullScreenWrapper,
    Group,
    H1,
    H2,
    Li,
    LogoWrapper,
    Ul,
    Wrapper,
} from './Home.style';

export type HomeProps = {
    groupedBlocks: Json;
    currentTemplate?: string;
    callbacks: {
        navigateToBlock: (blockId: string) => void;
        navigateToTemplate: (templateId: string) => void;
        clearFocus: () => void;
    };
};

export function Home(props: HomeProps) {
    const { groupedBlocks, currentTemplate, callbacks } = props;

    function renderBlock(block: NameAndOrder) {
        const { name } = block;

        return (
            <Li key={name}>
                <A
                    onClick={() => callbacks.navigateToBlock(name)}
                    key={block.name}
                    className='block'
                >
                    {name}
                </A>
            </Li>
        );
    }

    function renderBlocks(template: string) {
        const blocks = groupedBlocks[template];

        return Object.keys(blocks)
            .map((key) => ({
                name: key.replace('block-', ''),
                order: blocks[key],
            }))
            .sort(sortBy('order'))
            .map((block: NameAndOrder) => renderBlock(block));
    }

    function renderTemplate(template: string) {
        return (
            <Group key={template} className='template'>
                <H2 onClick={() => callbacks.navigateToTemplate(template)}>
                    {template}
                </H2>
                {renderBlocks(template)}
            </Group>
        );
    }

    function renderTemplates() {
        return Object.keys(groupedBlocks)
            .filter(
                (template: string) =>
                    !currentTemplate || template === currentTemplate
            )
            .map((template: string) => renderTemplate(template));
    }

    return (
        <TrianglesBk>
            <Wrapper className='Home-wrapper' data-testid='Home-wrapper'>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>

                <Content>
                    <H1>
                        Blocks{' '}
                        {currentTemplate && (
                            <Clear onClick={() => callbacks.clearFocus()}>
                                clear focus
                            </Clear>
                        )}
                    </H1>
                    <Ul>{renderTemplates()}</Ul>
                </Content>
                <FullScreenWrapper>
                    <button onClick={switchToFullscreen}>
                        <i className='material-icons'>fullscreen</i>
                    </button>
                </FullScreenWrapper>
            </Wrapper>
        </TrianglesBk>
    );
}

type NameAndOrder = {
    name: string;
    order: number;
};

export default Home;
