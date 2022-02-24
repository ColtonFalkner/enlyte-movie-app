import React from 'react'
import styled from 'styled-components'
import Clock from '../ClockSVG'
import Graph from './Graph'
import ProgressData from './ProgressData'

const ComparisonCardBody = styled.div`
  display: block;
  position: relative;
  flex: 2;
  width: 200rem;
  height: 100rem;
  border-radius: 3px;
  margin: 0 auto;
  padding: 2rem 4rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem #302e2c;
`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  width: 180rem;
  height: 15rem;
  margin: 4rem 2rem 2rem 4rem;
`
const CardTitle = styled.h1`
  display: flex;
  font-size: 5rem;
  font-weight: 600;
  color: #302e2c;
  height: 15rem;
  width: 50rem;
  margin: 4rem 0 2rem 0;
`

const AvgValue = styled.p`
  text-justify: end;
  font-size: 3.5rem;
  font-weight: 400;
  color: #5f5c58;
  margin: 4rem 0 2rem 4rem;
  direction: rtl;
`

const ComparisonDiv = styled.div`
  display: flex;
  align-items: center;
  width: 180rem;
  /* flex-wrap: wrap; */ //save this for the media query
`

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const AnalysisDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  width: 180rem;
  height: 15rem;
  margin: 4rem 0 2rem 4rem;
`

const AnalysisText = styled.div`
  font-size: 3.5rem;
  font-weight: 400;
  color: #5f5c58;
`
const UpdatedOn = styled.div`
  font-size: 3rem;
  font-weight: 400;
  color: #5f5c58;
  padding-top: 3rem;
`
const ComparisonCard = () => {
  return (
    <ComparisonCardBody>
      <TitleDiv>
        <CardTitle>Total Movie Sales</CardTitle>
        <AvgValue>
          Average Value of Sales in the past month in: United States
          <br />
          All Sales:162,862
        </AvgValue>
      </TitleDiv>

      <ComparisonDiv>
        <Graph />
        <ProgressWrapper>
          <ProgressData />
        </ProgressWrapper>
      </ComparisonDiv>

      <AnalysisDiv>
        <AnalysisText>
          <strong>Analysis of Sales:</strong>
          <br />
          The value has been changed over time, and last month reached a level
          of over $50,000.
        </AnalysisText>
        <UpdatedOn>
          {' '}
          <Clock /> Update on 16.07.2015
        </UpdatedOn>
      </AnalysisDiv>
    </ComparisonCardBody>
  )
}

export default ComparisonCard
