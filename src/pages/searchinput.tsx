import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { SearchInput as SearchInputComponent } from '../components/Elements/SearchInput'
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

export default function SearchInput() {

    const props = {
        value: 'Description: Search state. Type: String. Required.',
        onChange: 'Description: Function used to update Search state . Type:(e: ChangeEvent<HTMLInputElement>) => void. Required.',
        placeholder: 'Description: HTMLInputElement placeholder.',
        disabled: 'Description: Disables the input. Type: Boolean.',
        style: 'Description: Input style. Type: CSS Properties.',
        className: 'Description: Input className. Type: String.'
    }

    const fruits = ['apple', 'banana', 'orange', 'pinaple', 'grape', 'cherry']

    const [items, setItems] = useState<string[]>(fruits)
    const [search, setSearch] = useState('')

    const updateSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

    useEffect(() => {
        (() => {
            if (search) {
                const filteredItem = items.filter(item => item.includes(search))
                setItems(filteredItem)
            } else {
                setItems(fruits)
            }
        }
        )()
        //eslint-disable-next-line
    }, [search])

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='SearchInput'
                    />
                    <Text
                        content='Used to fastly update a search.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SearchInputComponent
                        placeholder='type some fruit'
                        value={search}
                        onChange={updateSearch}
                    />
                    {
                        items.map(item => (
                            <p key={item}>{item}</p>
                        ))
                    }
                </PreviewContainer>
                <PropsContainer>
                    <SubTitle
                        content='Props'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(obj => (
                        <>
                            <SubTitle
                                content={obj[0]}
                                style={{
                                    fontSize: 16
                                }}
                            />
                            <Text
                                content={obj[1]}
                            />
                        </>
                    ))}

                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const fruits = ['apple', 'banana', 'orange', 'pinaple', 'grape', 'cherry']                    
                    "
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="const [items, setItems] = useState<string[]>(fruits)"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="const [search, setSearch] = useState('')"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="const updateSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children=" useEffect(() => {
                        (() => {
                            if (search) {
                                const filteredItem = items.filter(item => item.includes(search))
                                setItems(filteredItem)
                            } else {
                                setItems(fruits)
                            }
                        }
                        )()
                    }, [search])"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <SearchInputComponent
                    placeholder='type some fruit'
                    value={search}
                    onChange={updateSearch}
                    />
                    {
                        items.map(item => (
                            <p key={item}>{item}</p>
                            ))
                        }"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}