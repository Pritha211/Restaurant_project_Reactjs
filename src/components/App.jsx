import React, { useState } from "react";
import ReactDOM  from  "react-dom";
import Heading from "./Header";
import Card from "./Card";
import Menu from "./Menu";
import Navbar from "./Navbar";



function App(){
    const [menu,setMenu] = useState(Menu);


    function handleChange(event){
        var name = event.target.name;

        if(name === 'All'){
            setMenu(Menu);
        }else{
            setMenu(()=>{
                return(
                Menu.filter((menuItem)=>{
                    return(menuItem.category === name);
                })
                );
            })
        }
        
       
    }



    return (
        <div>
        <Heading />
        <Navbar onChange={handleChange} />
        <div className="big-container">
    {menu.map((item)=>{
        return(
        <div className="card-container">
        <Card id= {item.id}
        img={item.image}
        name={item.name}
        category= {item.category}
        price= {item.price}
        description= {item.description}
            />
        </div>
        ) 

    })}
    </div>
    
        
        </div>
    )
}

export default App;