import { Grid, GridItem, Show } from '@chakra-ui/react'

import './App.css'
import Navbar from './components/Navbar'
import GamesGrid from './components/GamesGrid'
import GenreList from './components/GenreList'

function App() {

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
      gap='1'
    >
      <GridItem area={'nav'}>
        <Navbar />
      </GridItem>
      <Show above={"lg"}>
        <GridItem paddingX={5} area={'aside'}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <GamesGrid />
      </GridItem>
    </Grid>
  )
}

export default App
