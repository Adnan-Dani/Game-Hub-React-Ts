import { ReactNode } from "react"

// UI
import { Box } from '@chakra-ui/react'

interface Props {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box overflow="hidden" borderRadius={10}>
            {children}
        </Box>
    )
}

export default GameCardContainer
