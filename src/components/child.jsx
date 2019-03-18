import React from 'react'
export const GetData = (props)=>{
    return(
        <ul class="chat" style={{listStyleType:'none'}}>
        {props.addData.length>0 && props.addData.map(data=><li key={data}>{data}</li>)}
        </ul>
    );

}