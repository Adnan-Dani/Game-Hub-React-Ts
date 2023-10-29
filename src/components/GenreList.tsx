
// Custom Hooks
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const { isLoading, data, error } = useGenres();
    console.log(data)
    return (
        <List>
            {data.map(g => <ListItem paddingY="5px" key={g.id}>
                <HStack>
                    <Image boxSize="32px" borderRadius={8} src={g.image_background} />
                    <Text fontSize="lg" >{g.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList