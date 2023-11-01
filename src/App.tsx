import { Grid, GridItem, Show } from '@chakra-ui/react'

import './App.css'
import Navbar from './components/Navbar'
import GamesGrid from './components/GamesGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatform';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <GamesGrid gameQuery={gameQuery} />


      </GridItem>
    </Grid>
  )
}

export default App
