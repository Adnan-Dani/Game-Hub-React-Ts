// UI
import { Text, SimpleGrid } from '@chakra-ui/react';

// Custom Components
import GameCard from './GameCard';

// Custom Hooks
import useGames from '../hooks/useGames';
import GameCardSkelton from './GameCardSkelton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null;
}

const GamesGrid = ({ selelectedGenre }: Props) => {
    const { data, error, isLoading } = useGames(selelectedGenre);
    const skeltons = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding='10'>
                {isLoading && skeltons.map(s => <GameCardContainer key={s}><GameCardSkelton /></GameCardContainer>)}
                {
                    data.map(g => <GameCardContainer key={g.id}><GameCard game={g} /></GameCardContainer>)
                }
            </SimpleGrid>

        </div>
    )
}

export default GamesGrid
