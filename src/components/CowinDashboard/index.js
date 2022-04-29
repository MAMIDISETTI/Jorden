import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const data = [
  {
    count: 809680,
    language: 'T',
  },
  {
    count: 4555697,
    language: 'H',
  },
  {
    count: 12345657,
    language: 'E',
  },
]

const CowinDashboard = () => (
  <ResponsiveContainer width={180} height={300}>
    <PieChart>
      <Pie
        cx="70%"
        cy="40%"
        data={data}
        startAngle={0}
        endAngle={360}
        innerRadius="40%"
        outerRadius="80%"
        dataKey="count"
      >
        <Cell name="T" fill="#fecba6" />
        <Cell name="H" fill="#b3d23f" />
        <Cell name="E" fill="#a44c9e" />
      </Pie>
      <Legend
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
    </PieChart>
  </ResponsiveContainer>
)

export default CowinDashboard
