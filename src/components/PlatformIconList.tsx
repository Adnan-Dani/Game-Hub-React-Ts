// Ui
import { Icon, HStack } from '@chakra-ui/react';

// Custom Hooks
import { Platform } from '../hooks/useGames'

// React Icons
import { FaXbox, FaApple, FaLinux, FaWindows, FaPlaystation, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'


interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        andorid: FaAndroid,
        apple: FaApple,
        linux: FaLinux,
        iphone: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />)}
        </HStack>
    )
}

export default PlatformIconList
