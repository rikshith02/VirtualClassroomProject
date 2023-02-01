import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header.js';
import Img from './Img.js';
import Role from './Role.js';
import { useNavigate} from 'react-router-dom';
import { isClickableInput } from '@testing-library/user-event/dist/utils/index.js';



const SignUp = (e) => {

    const [inpval,setInpval]=useState({
        name:"",
        password:"",
        role:""

     } )

     const [data,setData] = useState()

     console.log(inpval);
     const getdata= (e) =>{
        const{value,name,role}=e.target;
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

            const {name,password,role} = inpval;
            if(name===""){
                alert("Please enter username")
            }
            else if(password===""){
                alert("Please enter password")
                 
            }
            // else if(role===""){
            //     alert("Please enter role")
            // }
            else if(password.length<6){
                alert("Password should contain more than 6 characters")
            }
            else{
                console.log("Succes");
                localStorage.setItem("user",JSON.stringify([...data,inpval]));
            }

        }
        // const click=()=>{
        //     addData();
        //     // navigateToHome();
        // }
        const navigate = useNavigate();
        const navigateToHome =()=>{
            navigate('/');
        }

    return (
    <>
    <Header/>
        <div className="container mt-3">
            <section className="d-flex justify-content-between">
                <div className="left mt-5 p-3" style={{width:"100%"}} >
                    <h3 className="text-center  col-lg-6">Sign Up</h3>
                     <Form>
                       <Form.Group className="mb-3 col-lg-6 " controlId="formBasicUsername">
                          <Form.Control type="Username" name="name" onChange={getdata} placeholder="Username" />
                       </Form.Group>
                       <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                          <Form.Control type="password" name="password"  onChange={getdata} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicRole">
                            {/* <Form.Control type="text" name="role" onChange={getdata} placeholder="Role" /> */}
                            <div>
                                <Role/>
                            </div>
                        </Form.Group>
                        {/* <p className="mb-3 col-lg-6" >Role:</p>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckboxS">
                           <Form.Check type="checkbox" label="Student" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckboxT">
                         <Form.Check type="checkbox" label="Techer" />
                        </Form.Group> */}
                       <Button variant="primary" type="submit"  className="col-lg-6" onClick={()=>{navigateToHome();addData()}}>Submit</Button>
                        </Form>     
                </div>
                <div>
                    <Img/>
                </div>
            </section>
        </div>
    </>
  )
}

export default SignUp;
