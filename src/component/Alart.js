import React from 'react'

export default function Alart(props) {

    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div style={{height:'50px'}} className="my-2" >
    { props.alert && <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)} </strong> : {props.alert.msg} 
      </div>}
    </div>
    
  )
}
