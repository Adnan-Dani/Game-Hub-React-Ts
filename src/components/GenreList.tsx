// UI
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

// Custom Hooks
import useGenres, { Genre } from "../hooks/useGenres"

// Interfaces
import { GameQuery } from "../App";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    gameQuery: GameQuery
}

const GenreList = ({ gameQuery, onSelectedGenre }: Props) => {
    const { isLoading, data, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />
    return (
        <List>
            {data.map(g => <ListItem paddingY="5px" key={g.id}>
                <HStack>
                    <Image boxSize="32px" borderRadius={8} src={g.image_background} />
                    <Button variant='link' fontWeight={g.id === gameQuery.genre?.id ? "bold" : "normal"} fontSize="lg" onClick={() => onSelectedGenre(g)} >{g.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList