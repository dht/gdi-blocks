import { Icon } from '@gdi/web-ui';
import React from 'react';
import {
    Container,
    Wrapper,
    H2,
    Description,
    Row,
    Column,
    ResumeTitle,
    ResumeTitleText,
    Items,
    Item,
    JobTitle,
    JobCompany,
    Period,
    Year,
    Dash,
    LineRow,
    IconWrapper,
    JobDescription,
    Input,
    Box,
    InputBox,
    NameText,
    MapContainer,
    IconWrapperEmail,
    IconWrapperName,
} from './Resume.style';
import { useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.contact-ply05';

export type ResumeProps = {
    strings: ResumeStrings;
    colors: ResumeColors;
    extra: ResumeExtra;
};

export type ResumeStrings = {
    header: string;
    description?: string;
};

export type ResumeColors = {};

export type ResumeExtra = {
    resumeDatasetId?: string;
};

export function Resume(props: ResumeProps) {
    const { strings, extra } = props;
    const { header, description } = strings;
    const { resumeDatasetId } = extra;

    const items = useDataset(resumeDatasetId ?? '');

    const educationItems = items.filter((i: Json) => i.type === 'education');
    const experienceItems = items.filter((i: Json) => i.type === 'experience');

    function renderItem(item: Json) {
        const { yearStart, yearEnd, jobTitle, company, description } = item;

        return (
            <Item key={item.id} className='item'>
                <LineRow>
                    <JobCompany>{company}</JobCompany>
                    <Period>
                        <Year>{yearStart}</Year>
                        <Dash>-</Dash>
                        <Year>{yearEnd}</Year>
                    </Period>
                </LineRow>
                <JobTitle>{jobTitle}</JobTitle>
                <JobDescription>{description}</JobDescription>
            </Item>
        );
    }

    function renderItems(items: Json[]) {
        return items.map((item: Json) => renderItem(item));
    }

    return (
        <Wrapper className='Resume-container' data-testid='Resume-container'>
            <Container>
                <H2>{header}</H2>
                <Row>
                    <Column>
                        <ResumeTitle>
                            <ResumeTitleText>Name</ResumeTitleText>
                            <Input></Input>
                            <IconWrapperName>
                                <i className='material-symbols-outlined'>
                                    badge
                                </i>
                            </IconWrapperName>
                        </ResumeTitle>
                        <Items>{renderItems(educationItems)}</Items>
                    </Column>
                    <Column>
                        <ResumeTitle>
                            <ResumeTitleText>Email</ResumeTitleText>
                            <Input></Input>
                            <IconWrapperEmail>
                                <i className='material-symbols-outlined'>
                                    mail
                                </i>
                            </IconWrapperEmail>
                        </ResumeTitle>
                        <Items>{renderItems(experienceItems)}</Items>
                    </Column>
                </Row>
            </Container>
            <MapContainer></MapContainer>
        </Wrapper>
    );
}

export default Resume;
