import React, { useContext } from "react";
import { fname, lname } from "./CompA";

const CompC = () =>{
   // const myfname = useContext(fname)
    //const mylname = useContext(lname)
   
    return(
        <div>
        <fname.Consumer> 
            {(fname) => {
            return(
                <lname.Consumer>
                    {(lname)=>{
                        return <h1>My Name is {fname} {lname} </h1>;
                    }}
                </lname.Consumer>
            )
            
          
            }}
            </fname.Consumer>
                    </div>  
          )
   
}
export default CompC;