
// Custom Hooks
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"

interface Props {
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
    const { isLoading, data, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />
    return (
        <List>
            {data.map(g => <ListItem paddingY="5px" key={g.id}>
                <HStack>
                    <Image boxSize="32px" borderRadius={8} src={g.image_background} />
                    <Button variant='link' fontSize="lg" onClick={() => onSelectedGenre(g)} >{g.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList