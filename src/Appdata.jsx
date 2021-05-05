import React, { useState } from 'react';
import ToDoLists from "./ToDoLists";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
const Appdata=()=>{
    const [inputList,setInputList]=useState("");
    const [Items,setItems]=useState([]);
    const ItemEvent=(event)=>{
       setInputList(event.target.value);
    };
    const ListOfItems=()=>{
     setItems((oldItems)=>{
       return [...oldItems,inputList]; 
     });
     setInputList('');
    };
    const deleteItems =(id)=> {
    console.log("deleted"); 

    setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>
        {
         return index !==id;
        });
    });
  };
return (<>
<div className='main_div'>
<div className='center_div'>
<br/>
<h1>ToDo List</h1> 
<br/> 
<input type="text" placeholder='Add a Items' value={inputList} onChange={ItemEvent}/>
<Tooltip title="Add">
<Button onClick={ListOfItems} className="btn_green"><AddIcon/></Button>
</Tooltip>
<ol>
    {/*<li>{inputList}</li>*/}

    {Items.map((itemval,index)=>
    {
      return (
        <ToDoLists 
        key={index}
        id={index}
       text={itemval} 
       onSelect={deleteItems}
       />
       );
    })}
</ol>
</div>
</div>
</>);
};
export default Appdata;