// UI
import { Text, SimpleGrid } from '@chakra-ui/react';

// Custom Components
import GameCard from './GameCard';

// Custom Hooks
import useGames from '../hooks/useGames';
import GameCardSkelton from './GameCardSkelton';
import GameCardContainer from './GameCardContainer';

const GamesGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeltons = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding='10'>
                {isLoading && skeltons.map(s => <GameCardContainer><GameCardSkelton key={s} /></GameCardContainer>)}
                {
                    data.map(g => <GameCardContainer><GameCard key={g.id} game={g} /></GameCardContainer>)
                }
            </SimpleGrid>

        </div>
    )
}

export default GamesGrid
