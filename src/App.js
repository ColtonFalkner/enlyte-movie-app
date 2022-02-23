import ComparisonCard from './Components/Comparison/ComparisonCard'
import MovieCard from './Components/MovieCard/MovieCard'
import GlobalStyles from './Components/Global'

// import { Global } from 'recharts'

function App() {
  return (
    <>
      <GlobalStyles />
      <ComparisonCard />
      <MovieCard
        title='Movie 1'
        releaseDate='04 Jan 2015'
        ticketDate='May 3, 2015'
      />
      {/* <MovieCard
        title='Movie 2'
        releaseDate='6 Feb 2015'
        ticketDate='May 3, 2015'
      /> */}
    </>
  )
}

export default App
