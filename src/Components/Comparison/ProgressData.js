import styled from 'styled-components'

const ProgressDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 60rem;
  margin-top: 1rem;
  padding-top: 1rem;
  background-color: #fff;
`

const MovieNumber = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  color: #302e2c;
  margin: 2rem 0 1rem 0;
`

const TotalOrders = styled.p`
  font-size: 3rem;
  font-weight: 400;
  color: #5f5c58;
  margin-bottom: 2rem;
`

const ProgressBar = styled.div`
  height: 1rem;
  width: 100%;
  border-radius: 3px;
  color: #eeecec;
  background-color: ${(props) => (props.secondary ? '#4fa806' : '#7f7d79')};
`

const ProgressData = (props) => {
  return (
    <>
      <ProgressDataBlock>
        <MovieNumber>2,346</MovieNumber>
        <TotalOrders>Total orders - Movie 1</TotalOrders>
        <ProgressBar />
      </ProgressDataBlock>
      <ProgressDataBlock>
        <MovieNumber>4,442</MovieNumber>
        <TotalOrders>Total orders - Movie 2</TotalOrders>
        <ProgressBar secondary />
      </ProgressDataBlock>
    </>
  )
}

export default ProgressData
