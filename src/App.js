import './App.scss'
import ComparisonCard from './Components/Comparison/ComparisonCard'
import MovieCard from './Components/MovieCard/MovieCard'

function App() {
  return (
    <div>
      <ComparisonCard />
      <MovieCard title='Movie 1' releaseDate='May 3, 2015' />
      {/* <MovieCard /> */}
    </div>
  )
}

export default App
