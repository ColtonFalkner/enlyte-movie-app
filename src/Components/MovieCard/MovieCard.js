import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../Global'

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100rem;
  height: 56.25rem;
  border-radius: 3px;
  margin: 0px auto;
  //Extract to variable
  background-color: #fff;
  box-shadow: 0 0 0.5rem #302e2c;
`

const CardWrapper = styled.div``

const MovieTitle = styled.h1`
  font-size: 5rem;
  padding: 4rem 0 2rem 4rem;
  color: #302e2c;
  font-weight: semi-bold;
`

const ReleaseDate = styled.p`
  font-size: 3.5rem;
  padding: 1rem 0 2rem 4rem;
  color: #302e2c;
  font-weight: semi-bold;
`
const TicketDate = styled.p`
  font-size: 3.5rem;
  padding: 1rem 0 2rem 4rem;
  color: #302e2c;
  font-weight: semi-bold;
`

const BuyButton = styled.button`
  width: 109px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #3a8ea5;
  background-color: #3a8ea5;
  font-size: 3.5rem;
  font-weight: 600;
  color: #fff;
`

const MovieCard = (props) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <CardBase>
        <div className='movieTitle'>
          <MovieTitle>{props.title}</MovieTitle>
          <ReleaseDate>{props.releaseDate}</ReleaseDate>
        </div>
        <div className='purchaseTicket'>
          <TicketDate>
            {props.ticketDate}
            <BuyButton>Buy Tickets</BuyButton>
          </TicketDate>
          <hr />
          <TicketDate>
            {props.ticketDate}
            <BuyButton>Buy Tickets</BuyButton>
          </TicketDate>
        </div>
      </CardBase>
    </React.Fragment>
  )
}

export default MovieCard
