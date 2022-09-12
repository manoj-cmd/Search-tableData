import React, { useEffect, useState } from "react";

const RegistrationForm = () =>{

    const [users, setUsers] = useState({
        firstname: "",
         lastname: "",
         username: "",
         password: "",
         Confirmpassword: ""
    })

    const[record, setRecord] = useState([]);

    const {firstname, lastname, username, password, Confirmpassword  } = users

    const InputchanseHandle = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUsers({ ...users, [name] : value })
    }

    
    const submitHaldle = e => {

        const newrecord = {...users, id: new Date().getDate().toString()}
        console.log(newrecord)
        setRecord([ ...record, newrecord ])
     
      

    }

    useEffect(()=>{
        submitHaldle()
    },[])


    return(
        <>
        <form onSubmit={submitHaldle()}> 
              <div>
                  <label>First Name</label>
                  <input type="text" name="firstname" value={firstname} onChange={InputchanseHandle} />
              </div>
               <div>
                  <label>Last Name</label>
                  <input type="text" name="lastname" value={lastname} onChange={InputchanseHandle} />
              </div>
              <div>
                  <label>User Name</label>
                  <input type="text" name="username" value={username} onChange={InputchanseHandle} />
              </div>
              <div>
                  <label>Password</label>
                  <input type="password" name="password" value={password} onChange={InputchanseHandle} />
              </div>
              <div>
                  <label>Confirm password</label>
                  <input type="password" name="Confirmpassword" value={Confirmpassword} onChange={InputchanseHandle} />
              </div> 
              <div>
                  <button>Submit</button>
              </div>
              </form>
        </>
    )


}


export default RegistrationForm;