import { useState } from 'react'

// UI
import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'

// Custom Components
import Navbar from './components/Navbar'
import GamesGrid from './components/GamesGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import FilterSelector from './components/FilterSelector'

// Custom Hooks
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatform';
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `, // 1024 px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area={'nav'}>
        <Navbar />
      </GridItem>
      <Show above={"lg"}>
        <GridItem paddingX={5} area={'aside'}>
          <GenreList gameQuery={gameQuery} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem paddingLeft={10} area={'main'}>
        <GameHeading gameQuery={gameQuery} />
        <Flex marginTop={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          </Box>
          <FilterSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </Flex>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
