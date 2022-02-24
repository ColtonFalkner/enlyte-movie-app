import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts'

const data = [
  { name: 'Jan', Movie1: 62, Movie2: 48 },
  { name: 'Feb', Movie1: 60, Movie2: 49 },
  { name: 'Mar', Movie1: 40, Movie2: 60 },
  { name: 'Apr', Movie1: 51, Movie2: 38 },
  { name: 'May', Movie1: 36, Movie2: 55 },
  { name: 'Jun', Movie1: 24, Movie2: 37 },
  { name: 'Jul', Movie1: 39, Movie2: 30 },
]

const Graph = (props) => {
  return (
    <div style={{ width: 500, height: 250 }}>
      <ResponsiveContainer>
        <AreaChart
          width={'auto'}
          height={'auto'}
          data={data}
          margin={{ top: 20, right: 16, left: 8, bottom: 16 }}
        >
          <CartesianGrid opacity={0.3} />
          <XAxis dataKey='name' fontSize={15}>
            <Label
              value={'Comparison - Movie 1 and Movie 2'}
              position={'bottom'}
              fontSize={10}
            />
          </XAxis>
          <YAxis fontSize={15} interval={0} tickSize={5} />
          <ReferenceDot ifOverflow='extendDomain' />
          <Tooltip viewBox={'x: 0, y: 0, width: 20px, height: 15px'} />

          <Area
            type='monotone'
            dataKey='Movie1'
            stackId='1'
            dot={{ stroke: 'RGB(159, 157, 155)', strokeWidth: 4, r: 2 }}
            stroke='RGB(159, 157, 155)'
            fill='RGBA(95, 92, 88, 0.2)'
          />
          <Area
            type='monotone'
            dataKey='Movie2'
            stackId='2'
            dot={{ stroke: 'RGB(79, 168, 6)', strokeWidth: 4, r: 2 }}
            stroke='RGB(79, 168, 6)'
            fill='RGBA(79, 168, 6, 0.2)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
