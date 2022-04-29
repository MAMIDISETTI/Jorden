import {PureComponent} from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Jan',
    uv: 800000,
    pv: 10000,
    amt: 5000,
  },
  {
    name: 'Feb',
    uv: 60000,
    pv: 13000,
    amt: 3000,
  },
  {
    name: 'Mar',
    uv: 20000,
    pv: 3000,
    amt: 7000,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3700,
    amt: 3500,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 10000,
    amt: 8000,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 6000,
    amt: 12000,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 5000,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 14000,
    amt: 3500,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,
    amt: 10000,
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 6000,
    amt: 4500,
  },
  {
    name: 'Nav',
    uv: 3490,
    pv: 5000,
    amt: 7000,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 7000,
    amt: 4000,
  },
]

class BarChart extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0'

  render() {
    return (
      <div style={{width: '100%', height: 300}}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="#000FFF"
              fill="#ADD8E6"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#e06936"
              fill="#F4C2C2"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
export default BarChart
