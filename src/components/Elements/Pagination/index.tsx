import { PaginationItem } from "./PaginationItem";
import {
    ButtonsContainer,
    Container,
    PagesCounterContainer, StrongText, Text
} from "./styles";

interface PaginationProps {
    totalOfItems: number;
    itemsPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

export function Pagination({
    currentPage = 1,
    itemsPerPage = 10,
    totalOfItems,
    onPageChange
}: PaginationProps) {

    const siblingsCount = 2
    const lastPage = Math.floor(totalOfItems / itemsPerPage)
    const totalPagesIndicator = Number(totalOfItems / itemsPerPage)

    function generatePagesArray(from: number, to: number) {
        return [...new Array(to - from)]
            .map((_, index) => {
                return from + index + 1
            })
            .filter(page => page > 0)
    }

    const previousPages = currentPage > 1 ?
        generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []

    const nextPages = currentPage < lastPage ?
        generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []

    return (
        <Container>
            <PagesCounterContainer>
                <StrongText>showing</StrongText>
                <StrongText>{currentPage}</StrongText>
                <StrongText> of </StrongText>
                <StrongText>{totalPagesIndicator}</StrongText>
                <StrongText>pages</StrongText>
            </PagesCounterContainer>
            <ButtonsContainer>

                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1} />
                        {currentPage > (2 + siblingsCount) && (<Text>...</Text>)}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => (
                    <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                ))}

                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

                {nextPages.length > 0 && nextPages.map(page => (
                    <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                ))}

                {currentPage + siblingsCount < lastPage && (
                    <>
                        {currentPage > (2 + siblingsCount) && (<Text>...</Text>)}
                        <PaginationItem onPageChange={onPageChange} number={lastPage} />
                    </>
                )}
            </ButtonsContainer>
        </Container>
    )
}