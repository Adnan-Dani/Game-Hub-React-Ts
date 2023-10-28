
// UI
import { HStack, Image } from '@chakra-ui/react'

// Custom Components
import ColorModeSwitch from './ColorModeSwitch'
import logo from './../assets/images.png'

const Navbar = () => {
    return (
        <HStack justifyContent="space-between" p="10px">
            <Image src={logo} boxSize="60px" />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar
