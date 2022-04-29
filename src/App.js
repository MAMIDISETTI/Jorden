import {
  BsFillChatLeftTextFill,
  BsFillLightningChargeFill,
  BsFillSquareFill,
  BsBagX,
  BsBriefcase,
  BsBoxArrowRight,
  BsFillCloudLightningFill,
  BsFillRssFill,
  BsBookmarkFill,
  BsBicycle,
} from 'react-icons/bs'

import BarChart from './components/BarChart'
import CowinDashboard from './components/CowinDashboard'
import ListItems from './components/ListItems'

import './App.css'

const App = () => (
  <div className="container">
    <div className="app-container">
      <div className="logo-container">
        <h1 className="logo">Bgn</h1>
      </div>

      <ul className="menu-list">
        <li className="menu-list-item">
          <BsFillChatLeftTextFill />
        </li>
        <li className="menu-list-item">
          <BsFillLightningChargeFill />
        </li>
        <li className="menu-list-item">
          <BsFillSquareFill />
        </li>
        <li className="menu-list-item active">
          <BsBagX />
        </li>
        <li className="menu-list-item active">
          <BsBriefcase />
        </li>
      </ul>
      <div className="menu-list1">
        <BsBoxArrowRight />
      </div>
    </div>
    <div className="grap-container">
      <h1 className="dashboard">Dashboard</h1>
      <div className="barchat-container">
        <div className="balance-container">
          <div>
            <h1 className="my">My Balance</h1>
            <p className="para">$2634.80</p>
          </div>
          <div className="sub-container">
            <h1 className="income">Income</h1>
            <h1 className="income">Spend</h1>
          </div>
          <div className="sub-container">
            <h1 className="income">Day</h1>
            <h1 className="income">Week</h1>
            <h1 className="income">Month</h1>
            <h1 className="income">Year</h1>
          </div>
        </div>
        <BarChart />
      </div>
      <div className="expenses-container1">
        <div className="expenses-container">
          <div>
            <h1 className="daily">Daily Expenses</h1>
            <div>
              <CowinDashboard />
            </div>
          </div>
          <div>
            <div className="foods">
              <BsFillCloudLightningFill />
              <div>
                <p className="rating">$95</p>
                <h1 className="head">Food</h1>
              </div>
            </div>
            <div className="foods">
              <BsFillRssFill />
              <div>
                <p className="rating">$95</p>
                <h1 className="head">Food</h1>
              </div>
            </div>
            <div className="foods">
              <BsBicycle />
              <div>
                <p className="rating">$95</p>
                <h1 className="head">Food</h1>
              </div>
            </div>
            <div className="foods">
              <BsBookmarkFill />
              <div>
                <p className="rating">$95</p>
                <h1 className="head">Food</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="blue-container">
          <h1 className="heading">A New Kind Of Life Insurance</h1>
          <button type="button" className="button">
            Explore Insurance
          </button>
        </div>
      </div>
    </div>
    <div className="list-container">
      <ListItems />
    </div>
  </div>
)

export default App
