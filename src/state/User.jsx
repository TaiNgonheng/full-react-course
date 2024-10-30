import {useState} from "react";

const User = (props)=>{
    const [user, setUser] = useState({
        firstname:"Tai Ngonheng",
        lastname:"Tai Ngonheng",
        email:"Tai Ngonheng@gmail.com",
    });
    function updateuser(){
        setUser({
            firstname:"Elon musk",
            lastname:"Mark Zuckerberg",
            email:"heng6888807@gmail.com",
        })
    }
    return(
      <>
          <h1>user details</h1>
          <p>{user.firstname}</p>
          <p>{user.lastname}</p>
          <p>{user.email}</p>

          <button onClick={updateuser}>Click Me</button>
      </>
    );
}
export default User;