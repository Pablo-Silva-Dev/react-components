import { Button, ActiveButton } from './styles'

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export function PaginationItem({
    number,
    isCurrent = false,
    onPageChange
}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <ActiveButton>
                {number}
            </ActiveButton>
        )
    }

    return (
        <Button
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}