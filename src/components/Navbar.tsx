
import { HStack, Image } from '@chakra-ui/react'

import logo from './../assets/images.png'
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
    return (
        <HStack justifyContent="space-between" p="10px">
            <Image src={logo} boxSize="60px" />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar
