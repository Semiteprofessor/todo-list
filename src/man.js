
import React from 'react'

const Man = (props) => {
    const {manchester} = props;
    const manchesterList = manchester.map(manchester => {
      if (manchester.age < 20) {
      return ( 
            <>
                <div key={manchester.id}>
                    <h1>{manchester.name}</h1>
                    <h1>{manchester.age}</h1>
                </div>
            </>
        )} else return null;
      } 
      
);
      
  return(
    <div>
      {manchesterList}
    </div>
)

}

export default Man
