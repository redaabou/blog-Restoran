import React from 'react'
import Categories from '../components/home/Categories'
import LastRepasAdded from '../components/home/LastRepasAdded'



function Home() {
  return (
    <div>
        <Categories />
        <div className="container" style={{ marginTop: '20px' }}>
            <LastRepasAdded />

        </div>
    </div>
  )
}

export default Home
