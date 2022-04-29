// Write your code here

import {BsSearch, BsFillSquareFill} from 'react-icons/bs'

import UserProfile from '../UserProfile'
import './index.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Queen Rose',
    role: '6 hours ago',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Andini Poul',
    role: '6 hours ago',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jenifer malone',
    role: '6 hours ago',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
    name: 'Lowrence Ann',
    role: '3 hours ago',
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
    name: 'Carl Maria',
    role: '5 Hours ago',
  },
]

const ListItems = () => (
  <div>
    <div className="bs-container">
      <BsSearch className="li1" />
      <BsFillSquareFill className="li" />
      <h1 className="hedings">August Brown</h1>
      <p className="profile">S</p>
    </div>
    <div className="visa-card">
      <h1 className="visa-head">My Cards</h1>
      <p className="visa-para">+</p>
    </div>
    <div className="visa-container">
      <h1 className="vi-head">Visa</h1>
      <p className="vi-para">**** **** **** 3678</p>
      <div>
        <h1 className="vi-head">name : sairam</h1>
      </div>
    </div>
    <div className="visa-card">
      <h1 className="visa-head">Recent Transactions</h1>
      <p className="visa-para">+</p>
    </div>
    <div className="list-container">
      <ul>
        {userDetailsList.map(eachItem => (
          <UserProfile userDetails={eachItem} />
        ))}
      </ul>
      <button type="submit" className="btn">
        See More
      </button>
    </div>
  </div>
)
export default ListItems
