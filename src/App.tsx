import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'

import './App.css'
import Navbar from './components/Navbar'
import GamesGrid from './components/GamesGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatform';
import FilterSelector from './components/FilterSelector'

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
      <GridItem area={'main'}>
        <HStack spacing={5} paddingLeft={10}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <FilterSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <GamesGrid gameQuery={gameQuery} />


      </GridItem>
    </Grid>
  )
}

export default App
