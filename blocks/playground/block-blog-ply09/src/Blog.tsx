import { useDataset } from '@gdi/engine';
import React from 'react';
import {
    Card,
    CardHeader,
    CardFooterText,
    Container,
    Header,
    Row,
    SubHeader,
    Wrapper,
    CardBody,
    CardImage,
    CardTitle,
    CardDescription,
    Label,
    HeadingRow,
    HeadingColumn,
    BlogCard,
} from './Blog.style';

export const id = 'com.usegdi.blocks.blog-ply09';

export type BlogProps = {
    strings: BlogStrings;
    colors: BlogColors;
    extra: BlogExtra;
};

export type BlogStrings = {
    slogan?: string;
    header: string;
};

export type BlogColors = {};

export type BlogExtra = {
    blogDataSetId: string;
};

export function Blog(props: BlogProps) {
    const { extra, strings } = props;
    const { blogDataSetId } = extra;
    const { slogan, header } = strings;

    const blogData = useDataset(blogDataSetId);

    return (
        <>
            <Wrapper>
                <Container id='Blog'>
                    <HeadingRow>
                        <HeadingColumn>
                            <Header> {header} </Header>
                            <SubHeader> {slogan} </SubHeader>
                        </HeadingColumn>
                    </HeadingRow>
                    <Row>
                        {blogData.map((blog: Json) => {
                            return (
                                <>
                                    <BlogCard>
                                        <Card>
                                            <CardHeader>
                                                <CardImage
                                                    src={blog.imgUrl}
                                                />
                                            </CardHeader>
                                            <CardBody>
                                                <CardTitle>
                                                    {blog.title}
                                                </CardTitle>
                                                <CardDescription>
                                                    {blog.description}
                                                </CardDescription>
                                                <CardFooterText>
                                                    <Label>
                                                        {blog.name}
                                                    </Label>
                                                    <Label className='label2'>
                                                        {blog.date}
                                                    </Label>
                                                </CardFooterText>
                                            </CardBody>
                                        </Card>
                                    </BlogCard>
                                </>
                            );
                        })}
                    </Row>
                </Container>
            </Wrapper>
        </>
    );
}

export default Blog;
