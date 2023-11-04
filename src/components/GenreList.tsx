// UI
import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";

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
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.map(g => <ListItem paddingY="5px" key={g.id}>
                    <HStack>
                        <Image objectFit='cover' boxSize="32px" borderRadius={8} src={g.image_background} />
                        <Button whiteSpace='normal' textAlign='left' variant='link' fontWeight={g.id === gameQuery.genre?.id ? "bold" : "normal"} fontSize="lg" onClick={() => onSelectedGenre(g)} >{g.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreList