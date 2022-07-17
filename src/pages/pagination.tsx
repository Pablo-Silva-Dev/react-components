import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Pagination as PaginationComponent } from '../components/Elements/Pagination'
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function Pagination() {

    const props = {
        imgUrl: 'Description: Path to find image. Type: String. Required.',
        size: 'Description: Image size. Type: "small" | "medium" | "large". Default: "medium".',
        style: 'Description: Image style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    const [page, setPage] = useState(1)

    const fakeData = Array.from(Array(40).keys())
    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Pagination'
                    />
                    <Text
                        content='Used to display user profile image.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <PaginationComponent
                        onPageChange={setPage}
                        currentPage={page}
                        totalOfItems={fakeData.length}
                        itemsPerPage={5}
                    />
                </PreviewContainer>

                <PropsContainer>
                    <SubTitle
                        content='Props:'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(prop => (
                        <>
                            <SubTitle
                                content={prop[0]}
                                style={{
                                    fontSize: 16
                                }}
                            />
                            <Text
                                content={prop[1]}
                            />
                        </>
                    ))}
                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <Pagination
                    imageUrl='https://www.pablosilvadev.com.br/Pagination.svg'
                    size='medium'
                />"
                />
            </ComponentContainer>
        </Container>
    )
}