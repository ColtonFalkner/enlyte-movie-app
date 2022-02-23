import React from 'react'
import styled from 'styled-components'

import Clock from './ClockSVG'

const CardBase = styled.div`
  display: inline-block;
  position: relative;
  width: 100rem;
  height: 56.25rem;
  border-radius: 3px;
  margin: 0px auto;
  //Extract to variable
  background-color: #fff;
  box-shadow: 0 0 0.5rem #302e2c;
`
const ReleaseDateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1rem 2rem;
`
const MovieTitle = styled.h1`
  font-size: 5rem;
  padding: 4rem 0 2rem 4rem;
  color: #302e2c;
  font-weight: 600;
`

const ReleaseDate = styled.div`
  display: inline-block;
  font-size: 3.5rem;
  padding: 1rem 1rem 2rem 4rem;
  color: #302e2c;
  font-weight: 600;
`
const ReleasedOn = styled.div`
  display: inline-block;
  font-size: 3rem;
  font-weight: 200;
`

const TicketWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem;
  padding: 2rem 0 2rem 0;
  border-bottom: 1px solid #dfdede;
`

const TicketDate = styled.p`
  font-size: 3.5rem;
  padding: 1rem 0 2rem 0;
  color: #5f5c58;
  font-weight: 600;
`

const BuyButton = styled.button`
  padding: 2.5rem 5rem;
  border-radius: 4px;
  border: 1px solid #3a8ea5;
  background-color: #3a8ea5;
  font-size: 3.5rem;
  font-weight: 600;
  color: #fff;
`
const MovieCard = (props) => {
  return (
    <>
      <CardBase>
        <MovieTitle>{props.title}</MovieTitle>
        <ReleaseDateWrapper>
          <ReleaseDate>
            Release Date <Clock />
          </ReleaseDate>
          <ReleasedOn>{props.releaseDate}</ReleasedOn>
        </ReleaseDateWrapper>

        <TicketWrapper>
          <TicketDate>{props.ticketDate}</TicketDate>
          <BuyButton>Buy Tickets</BuyButton>
        </TicketWrapper>

        <TicketWrapper>
          <TicketDate>{props.ticketDate}</TicketDate>
          <BuyButton>Buy Tickets</BuyButton>
        </TicketWrapper>
      </CardBase>
    </>
  )
}

export default MovieCard
