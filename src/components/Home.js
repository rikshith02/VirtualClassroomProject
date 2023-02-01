import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header.js';
import Img from './Img.js';
import SignUp from'./SignUp.js';
import { NavLink } from 'react-router-dom';
import { useNavigate} from 'react-router-dom'

const Home = (e) => {

   
    const [inpval,setInpval]=useState({
        name:"",
        password:""

     } )

     const [data,setData] = useState()

     console.log(inpval);
     const getdata= (e) =>{
        const{value,name}=e.target;
        setInpval(()=>{
            return{
                ...inpval,
                [name]:value

            }
        }
        )
     }
         const addData = (e) =>{
            e.preventDefault();
            const getUserArr = localStorage.getItem("user");
            console.log(getUserArr)

            const {name,password} = inpval;
            if(name===""){
                alert("Please enter username")
            }
            else if(password===""){
                alert("Please enter password")
                 
            }
            else if(password.length<6){
                alert("Password should contain more than 6 characters")
            }
            else{
                console.log("Succes");
                localStorage.setItem("user",JSON.stringify([...data,inpval]));
                // if(getUserArr && getUserArr.length){
                //     const userdata = JSON.parse(getUserArr);
                //     const userlogin = userdata.filter((el,k)=>{
                //         return el.name === name && el.password === password
                //     }
                //     );

                //     if(userlogin.length === 0){
                //         alert("Invalid Details");
                //     }
                //     else
                //     {
                //         console.log("login Sucess");
                //         localStorage.setitem("user_login",JSON.stringify( userlogin))
                //         history("/Dashboard");
                //     }


                // }
            }

        }
        const navigate = useNavigate();
        const navigateToDashboard =()=>{
            navigate('/Dashboard');
        }

    return (
    <>
    <Header/>
        <div className="container mt-3">
            <section className="d-flex justify-content-between">
                <div className="left mt-5 p-3" style={{width:"100%"}} >
                    <h3 className="text-center  col-lg-6">Sign In</h3>
                     <Form>
                       <Form.Group className="mb-3 col-lg-6 " controlId="formBasicUsername">
                          <Form.Control type="Username" name="name" onChange={getdata} placeholder="Username" />
                       </Form.Group>
                       <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                          <Form.Control type="password" name="password"  onChange={getdata} placeholder="Password" />
                        </Form.Group>
                       <Button variant="primary" type="submit"  className="col-lg-6" onClick={navigateToDashboard}>Login</Button>
                        </Form>    
                        <p className="mt-3 col-lg-6">Don't have an account yet?<span><NavLink to="/SignUp">SignUp</NavLink></span></p> 
                </div>
                <div>
                    <Img/>
                </div>
            </section>
        </div>
    </>
  )
}

export default Home
