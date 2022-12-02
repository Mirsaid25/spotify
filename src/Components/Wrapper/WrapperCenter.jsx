import React from "react";
import Header from "../Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { v4 as uuidv4 } from 'uuid';


const Arr_Section2 =[
    {
        id: uuidv4(),
        title:"Your top mixes",
        arr_Sectiuon2_child:[
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
            
    },
    {
        id: uuidv4(),
        title:"Made for you",
        arr_Sectiuon2_child:[
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
            
    },
    {
        id: uuidv4(),
        title:"Recently played",
        arr_Sectiuon2_child:[
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
            
    },

]

function WrapperCenter() {
    const Item_Section2=()=>{
        return Arr_Section2.map(item=> <Section2 arr_Section2={item}/>)
    }
    return (
        <div className="WrapperCenter">
            <Header/>
            <Section1/>
            <Item_Section2/>
        </div>
    )
};

export default WrapperCenter;