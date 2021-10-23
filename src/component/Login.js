import React,{useState} from 'react'
const axios=require('axios')
function Login() {
  const [user, setuser] = useState({email:" ",password:" ",name:" "})
const handleSubmit=(e)=> {
  e.preventDefault();
  console.log(user);
  let request={
      email:user.email,
      password:user.password,
      name:user.name}
 
  
  axios.post('http://localhost:5000/auth/createUser',request)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error.msg);
  })
}

const  handleOnchange=(e)=> {
  setuser({...user,[e.target.name]:e.target.value})
}
    return (
        <div>
      <form className="container"  onSubmit={handleSubmit} >
        <div className="  mb-3" >
          <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label>
          <input type="email" name="email"  value={user.email} onChange={handleOnchange} className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1"value={user.password}  className="form-label">Password</label>
          <input type="password" className="form-control" name="password" onChange={handleOnchange} id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPasswordas"value={user.name} className="form-label">Password</label>
          <input type="text" className="form-control" name="name" onChange={handleOnchange}  id="examapleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      


        </div>
    )
}

export default Login
