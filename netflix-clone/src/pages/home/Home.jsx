import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured genre={'Movies'}/>
      <List />
      <List />
    </div>
  )
}

export default Home
