// UI
import { Text, SimpleGrid } from '@chakra-ui/react';

// Custom Components
import GameCard from './GameCard';

// Custom Hooks
import useGames from '../hooks/useGames';

const GamesGrid = () => {
    const { games, error } = useGames();
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding='10'>
                {
                    games.map(g => <GameCard key={g.id} game={g} />)
                }
            </SimpleGrid>

        </div>
    )
}

export default GamesGrid
