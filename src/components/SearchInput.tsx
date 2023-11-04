// UI
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'

// Icons
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={event => {
            event.preventDefault();
            console.log(ref.current)
            if (ref.current) onSearch(ref.current.value)

        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} placeholder='Search games...' borderRadius={20} variant={'filled'} />
            </InputGroup>
        </form>
    )
}

export default SearchInput