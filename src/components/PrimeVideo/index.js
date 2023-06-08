// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachmovie => eachmovie.categoryId === actionMovie,
  )

  const comedyMovieList = moviesList.filter(
    eachmovie => eachmovie.categoryId === comedyMovie,
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="img-prime-video"
      />
      <div className="category-container">
        <h1 className="category-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovieList} />
        <h1 className="category-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
