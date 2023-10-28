// UI
import { Text, SimpleGrid } from '@chakra-ui/react';

// Custom Components
import GameCard from './GameCard';

// Custom Hooks
import useGames from '../hooks/useGames';
import GameCardSkelton from './GameCardSkelton';

const GamesGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeltons = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding='10'>
                {isLoading && skeltons.map(s => <GameCardSkelton key={s} />)}
                {
                    games.map(g => <GameCard key={g.id} game={g} />)
                }
            </SimpleGrid>

        </div>
    )
}

export default GamesGrid
