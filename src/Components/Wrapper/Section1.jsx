import React from 'react'
import Section1_child from '../_child/Section1_child'
import { v4 as uuidv4 } from 'uuid';

const arr = [
  {
    id: uuidv4(),
    title: "Chill Mix",
    img:"/img/artist-img_1.svg",
  },
  {
    id: uuidv4(),
    title: "Pop Mix",
    img:"/img/artist-img_2.svg",
  },
  {
    id: uuidv4(),
    title: "Daily Mix 1",
    img:"/img/artist-img_3.svg",
  },
  {
    id: uuidv4(),
    title: "Daily Mix 5",
    img:"/img/artist-img_4.svg",
  },
  {
    id: uuidv4(),
    title: "Folk & Acoustic Mix",
    img:"/img/artist-img_5.svg",
  },
  {
    id: uuidv4(),
    title: "Daily Mix 4",
    img:"/img/artist-img_6.svg",
  },
]



function Section1() {

  const ItemComponent=()=> {
    return arr.map(item=> <Section1_child item={item}/>)
  }

  return (
    <section className='Section1'>
        <h1>Good afternoon</h1>
        <div className="Section1_grid_block">
          <ItemComponent/>
        </div>
    </section>
  )
}

export default Section1