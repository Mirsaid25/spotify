import React from 'react'

function Section1_child(item) {
  return (
    <div className='Section1_child'>
        <img src={item.item.img} alt="" />
        <span>{item.item.title}</span>
    </div>
  )
}

export default Section1_child