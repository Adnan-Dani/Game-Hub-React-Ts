
// UI
import { HStack, Image } from '@chakra-ui/react'

// Custom Components
import ColorModeSwitch from './ColorModeSwitch'
import logo from './../assets/images.png'
import SearchInput from './SearchInput'

const Navbar = () => {
    return (
        <HStack p="10px">
            <Image src={logo} boxSize="60px" />
            <SearchInput />
            <ColorModeSwitch />

        </HStack>
    )
}

export default Navbar
