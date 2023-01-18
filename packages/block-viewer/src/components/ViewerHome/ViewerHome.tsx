import { Logo, TrianglesBk } from '@gdi/web-ui';
import React, { useState } from 'react';
import {
    A,
    Clear,
    Content,
    Group,
    H1,
    H2,
    Li,
    LogoWrapper,
    Ul,
    Wrapper,
} from './ViewerHome.style';
import { sortBy } from 'shared-base';
import { useNavigate } from 'react-router-dom';
import BlockPreview from '../BlockPreview/BlockPreview';
import byTemplate from '../../blocks/blocks.byTemplate.json';
import { useLocalStorage } from 'react-use';

export type ViewerHomeProps = {
    blocks: IBlocks;
};

export function ViewerHome(props: ViewerHomeProps) {
    const navigate = useNavigate();
    const [currentBlockName, setCurrentBlockName] = useState<string>('');
    const [currentTemplate, setCurrentTemplate] = useLocalStorage<string>(
        'currentTemplate',
        ''
    );

    function onClick(path: string) {
        navigate(path);
    }

    function focusOnTemplate(template: string) {
        setCurrentTemplate(template);
        navigate(`/templates/${template}`);
    }

    function renderBlock(block: NameAndOrder) {
        const { name } = block;

        const path = `/${name}`;

        return (
            <Li>
                <A
                    onClick={() => onClick(path)}
                    onMouseOver={() => setCurrentBlockName(name)}
                    key={block.name}
                    className='block'
                >
                    {name}
                </A>
            </Li>
        );
    }

    function renderBlocks(template: string) {
        const blocks = byTemplate[template];

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
                <H2 onClick={() => focusOnTemplate(template)}>{template}</H2>
                {renderBlocks(template)}
            </Group>
        );
    }

    function renderTemplates() {
        return Object.keys(byTemplate)
            .filter(
                (template: string) =>
                    !currentTemplate || template === currentTemplate
            )
            .map((template: string) => renderTemplate(template));
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
                    <H1>
                        Blocks{' '}
                        {currentTemplate && (
                            <Clear onClick={() => setCurrentTemplate('')}>
                                clear focus
                            </Clear>
                        )}
                    </H1>
                    <Ul>{renderTemplates()}</Ul>
                </Content>
                {renderPreview()}
            </Wrapper>
        </TrianglesBk>
    );
}

type NameAndOrder = {
    name: string;
    order: number;
};

export default ViewerHome;
