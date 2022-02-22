import React from 'react'

const MovieCard = (props) => {
  return (
    <div className='movieCard'>
      <div className='movieTitle'>
        <h1 className='movieTitle__title'>{props.title}</h1>
        <p className='movieTitle__releaseDate'>{props.releaseDate}</p>
      </div>
      <div className='purchaseTicket'></div>

      <div className=''></div>
    </div>
  )
}

export default MovieCard
