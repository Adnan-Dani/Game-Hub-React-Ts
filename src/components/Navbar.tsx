
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from './../assets/images.png'

const Navbar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="60px" />
            <Text>Movie Hub</Text>
        </HStack>
    )
}

export default Navbar
