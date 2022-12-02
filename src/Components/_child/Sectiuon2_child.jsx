
import React from 'react'

function Sectiuon2_child({item}) {

  return (
    <div className='Sectiuon2_child'>
        <img src={item.img} alt="" />
        <h2>{item.title}</h2>
        <p>{item.artists}</p>
    </div>
  )
}

export default Sectiuon2_child