
// Custom Hooks
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const { isLoading, data, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />
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