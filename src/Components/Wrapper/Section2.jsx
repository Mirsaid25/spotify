import React from 'react'
import Sectiuon2_child from '../_child/Sectiuon2_child'
import { v4 as uuidv4 } from 'uuid';


const arr_Sectiuon2_child =[
  {
    id:uuidv4(),
    title:"Chill Mix",
    artists: "Julia Wolf, Khalid, ayokay and more",
    img: "/img/artist-img_1.svg",
  },
  {
    id:uuidv4(),
    title:"Pop Mix",
    artists: "Hey Violet, VÉRITÉ, Timeflies and more",
    img: "/img/artist-img_2.svg",
  },
  {
    id:uuidv4(),
    title:"Pheelz Mix",
    artists: "WizKid, Asake, Tiwa Savage and more",
    img: "/img/artist-img_3.svg",
  },
  {
    id:uuidv4(),
    title:"Indie Mix",
    artists: "Joywave, The xx, The Neighbourhood and...",
    img: "/img/artist-img_4.svg",
  },
]


function Section2({arr_Section2}) {

  const Item_Sectiuon2_child = () =>{
    return arr_Section2.arr_Sectiuon2_child.map(item=> <Sectiuon2_child item={item}/>)
  }


  return (
    <div className='Section2'>
    <div className="Section2_top">
      <h1>{arr_Section2.title}</h1>
      <span>SEE ALL</span>
    </div>
    <div className="Section2_grid_block">
      <Item_Sectiuon2_child/>
    </div>
    </div>
  )
}

export default Section2