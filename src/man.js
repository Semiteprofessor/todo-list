
import React from 'react'

const Man = ({manchester, deleteManchester}) => {
    const manchesterList = manchester.map(manchester => {
      if (manchester.age > 20) {
      return ( 
            <>
                <div key={manchester.id} className="list-type">
                    <h1>Name: {manchester.name}</h1>
                    <h1>Age: {manchester.age}</h1>
                    <h1>Position: {manchester.position}</h1>
                    <button onClick={() => {deleteManchester(manchester.id)}}>Delete</button>
                </div>
            </>
        )} else {
          return null;
      } 
      
    });
      
  return(
    <div>
      {manchesterList}
    </div>
)

}

export default Man
