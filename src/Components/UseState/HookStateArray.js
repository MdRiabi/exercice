import React, { useState } from 'react'

function HookStateArray() {
    const [item, setItem]= useState([]);
    const [employee, setEmployee] = useState("");
    const addItem =() =>{
        return(
          setItem([...item ,{
            id:item.length,
            name: employee
          }])  
        );
    }

    return (
        <div>
            <h2>Add Employee</h2>
            <input
            type='text' 
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            />
            <button onClick={() =>addItem()}></button>
        <ul>
            {
                item.map((it) =>(
                    <li key={it.id}>{it.name}</li>
                ))
            }
        </ul>
        /*when we work with array state we must create a copy of array */
        </div>

    )
}

export default HookStateArray
