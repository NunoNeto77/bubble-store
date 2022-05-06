import React from 'react'
import "./Home.css"

const Home = () => {

  const image =
    "https://sites.create-cdn.net/siteimages/20/3/1/203128/19/3/0/19306529/1000x1000.png?1619107408";

  return (
    <div className='homeContainer'>
      <img src={image} id="homeImage" style={{height:"700px", marginBottom:"90px"}}/>
    </div>
  )
}

export default Home;