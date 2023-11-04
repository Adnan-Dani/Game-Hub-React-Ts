
// UI
import { HStack, Image } from '@chakra-ui/react'

// Custom Components
import ColorModeSwitch from './ColorModeSwitch'
import logo from './../assets/images.png'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void
}

const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack p="10px">
            <Image src={logo} boxSize="60px" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />

        </HStack>
    )
}

export default Navbar
