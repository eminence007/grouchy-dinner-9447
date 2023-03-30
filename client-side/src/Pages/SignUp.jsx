import React, { useState } from "react";
import axios from "axios";
import "../Style/Signup.css"
import { findDOMNode } from "react-dom";

const SignUp = () => {
    
    const Dates = new Array(31).fill(0);
    const Month = new Array(12).fill(0);
    const Year = new Array(2022).fill(1980);

    const [feet,setFeet]=useState(0);
    const [inch ,setInch]=useState(0);

   const [date,setdate]=useState("")
   const [month,setMonth]=useState("")
   const [year,setYear]=useState("")

    
    

    
  const [user,setUser]=useState({
    
    email:"",
    password:"",
    sex:"",
    dob:"",
    height:0,
    weight:0
  })


  function feetcm(e){
        setFeet(()=>{
            return e.target.value
        });


        let TotalInch=(feet*12)+inch;
        let Centimeter=TotalInch/0.39370;
        setUser((pre)=>{
            return {...pre,height:Centimeter}
        })

  }
  function inchcm(e){
    setInch(()=>{
        return e.target.value
    });
    
    let TotalInch=(feet*12)+inch;
    let Centimeter=TotalInch/0.39370;
    setUser((pre)=>{
        return {...pre,height:Centimeter}
    })

}







  function changeHandle(e){
    setUser((pre)=>{
      return {...pre,[e.target.name]:e.target.value}
    })
  }
  function submitHandler(){
    setUser((pre)=>{
        console.log({...pre,dob:`${date}-${month}-${year}`})
        axios.post("http://loaclhost:8080/user/register",{...pre,dob:`${date}-${month}-${year}`})
        return {...pre,dob:`${date}-${month}-${year}`}
    })
    
    // axios.post("http://loaclhost:8080/user/register",user)

  }
  return <div className="m-auto w-[50%]">
    <h2 className="text-center mb-2 text-lg font-extrabold">Create Your Free Account</h2>
  <div className="container mx-auto px-20 p-3 rounded-lg bg-white shadow-md shadow-orange-100 mb-4"  >
  
      <div className="mb-2 rounded p-2 ">
          <label className="" htmlFor="email">
              Email
          </label>
          <input type="text" id="email" name="email" onChange={changeHandle} className="float-right border-2 rounded p-1" placeholder="Email" />
      </div>
      <div className="mb-2 rounded p-2">
          <label className="" htmlFor="password" >
              Password
          </label>
          <input type="text" name="password" id="password" onChange={changeHandle} className="float-right border-2 rounded p-1" placeholder="Password" />
      </div>
      <div className="mb-2 rounded p-2">
          <label className="" htmlFor="confirm">
              Confirm Password
          </label>
          <input type="text" id="confirm" className="float-right border-2 rounded p-1" placeholder="Confirm Password" />
      </div>
  </div>

  {/* Profile detail start */}
  <div className="container mx-auto px-20  p-3 rounded-lg bg-white shadow-md shadow-orange-100 mb-4" >
      <h2 className="text-center mb-2 text-lg font-extrabold">Profile Detail</h2>

      <div className="mb-2 grid items-center grid-cols-2 rounded p-2 ">
          <div className="" >
              Sex
          </div>
          <div className="">

              <div className=" flex gap-3">
                  <div className="flex gap-3" onClick={()=>{setUser({...user,sex:"male"})}} >
                      <input className="form-radio text-indigo-600" id='male' name="sex" type="radio" />
                      <label htmlFor="male">Male</label>
                  </div>

                  <div className="flex gap-3" onClick={()=>{setUser({...user,sex:"female"})}} >
                      <input className="text-lg" id="female" name="sex" type="radio" />
                      <label htmlFor="female" >Female</label>
                  </div>
              </div>
          </div>
      </div>

      <div className="mb-2 items-center grid grid-cols-2 rounded p-2 ">
          <div className="" >
              Birthday
          </div>
          <div className="">
              <div className=" flex gap-3 items-center">
                  <div className="">
                      <p className="text-sm">
                          Day
                      </p>
                      <select onChange={(e)=>{setdate(e.target.value)}} className="p-2 border rounded-md bg-white">
                        {Dates.map((e,i)=>{
                            return <option key={i+""} value={i+1}>
                            {i+1}
                        </option>
                        })}
                          
                      </select>
                  </div>
                  <div className="">
                      <p className="text-sm">
                          Month
                      </p> 
                      <select onChange={(e)=>{setMonth(e.target.value)}} className="p-2 border rounded-md bg-white px-5">
                      {Month.map((e,i)=>{
                            return <option key={i+""} value={i+1}>
                            {i+1}
                        </option>
                        })}
                          
                      </select>
                  </div>
                  <div className="">
                      <p className="text-sm">
                          Year
                      </p>
                      <input type="number" onChange={(e)=>{setYear(e.target.value)}} name="year" id="" className="border p-1 rounded-md w-24" />
                  </div>
              </div>
          </div>
      </div>

      <div className="mb-2 items-center grid grid-cols-2 rounded p-2 ">
          <div className="" >
              Height
          </div>
          <div className="">
              <div className=" flex gap-3 items-center">
                  <div className="">
                      <p className="text-sm">
                          ft
                      </p>
                      <select onChange={feetcm} className="p-2 border rounded-md bg-white">
                      {Month.map((e,i)=>{
                            return <option key={i+""} value={i+1}>
                            {i+1}
                        </option>
                        })}
                      </select>
                  </div>
                  <div className="">
                      <p className="text-sm">
                          in
                      </p>
                      <select onChange={inchcm}  className="p-2 border rounded-md bg-white">
                      {Month.map((e,i)=>{
                            return <option key={i+""} value={i+1}>
                            {i+1}
                        </option>
                        })}
                      </select>
                  </div>
                  <small className="pt-4">or</small>
                  <div className="">
                      <p className="text-sm">
                          cm
                      </p>
                      <input type="number" value={user.height} name="year" id="" className="border p-1 rounded-md w-24" />
                  </div>
              </div>
          </div>
      </div>

      <div className="mb-2 items-center grid grid-cols-2 rounded p-2 ">
          <div className="" >
              Weight
          </div>
          <div className="">
              <div className=" flex gap-3 items-center">
                  
                  <div className="">
                      <input type="number" name="weight" onChange={changeHandle} id="" className="border p-1 rounded-md w-24" />
                  </div>
                  <div className="">
                      <select  className="p-2 px-4 border rounded-md bg-white">
                          <option value="">
                              Kg
                          </option>
                      </select>
                  </div>
                  
              </div>
          </div>
      </div>
      
  </div>

  <div className="container mx-auto px-20 p-3 rounded-lg bg-white shadow-md shadow-orange-100 mb-4 text-md "  >
  <h2 className="text-center mb-2 text-lg font-extrabold">Terms of Service & Privacy Settings</h2>

      <div className="mb-4">
          <div className="flex gap-4 mb-1">
              <input type="checkbox" className="w-10 checked:bg-gray-900" name="check-all" id="check-all" />
              <label htmlFor="check-all">Check All</label>
          </div>
              <div className="">
                  By checking the box below you are indicating you have read and agree to our <span className="text-orange-600 font-extrabold">Terms of Service</span> and <span className="text-orange-600 font-extrabold">Privacy Policy</span>.
              </div>
      </div>

      <div className="mb-4">
          <div className="flex gap-4 mb-1">
              <input type="checkbox" className="w-6 text-green-600" name="check-agree" id="check-agree" />
              <label htmlFor="check-agree">
                  I agree to the Cronometer Terms of Service and Privacy Policy.
              </label>
          </div>
              <div className="font-extrabold">
              In order to give you the best experience using Cronometer, we need certain data permissions. (These are optional and can be updated in your settings any time.)
              </div>
      </div>

      <div className="mb-4">
          <div className="flex gap-4 mb-1">
              <input type="checkbox" className="w-8 text-green-600" name="check-news-letter" id="check-news-letter" />
              <label htmlFor="check-news-letter">
              I agree to receive Cronometer newsletter and promotional emails. (You can opt out at any time.)
              </label>
          </div>
      </div>

      <div className="mb-4">
          <div className="flex gap-4 mb-1">
              <input type="checkbox" name="check-inapp-adds" className="w-10 text-green-600" id="check-inapp-adds" />
              <label htmlFor="check-inapp-adds">
              I agree to receive personalized in-app ads.
              (You will receive less relevant, non-personalized ads if you opt out)
              </label>
          </div>
      </div>
      <div className=" text-center mt-16">
              <button onClick={submitHandler} className="test-center border py-2 bg-green-800 rounded-xl w-52">Submit</button>
             
          </div>
  </div>
</div>
  
  
  
  
  

};

export default SignUp;