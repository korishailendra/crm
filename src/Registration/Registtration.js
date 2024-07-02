import React, { useEffect } from 'react'
import sign from "../images/sign.png"
import image2svg from "../images/image2.svg"
import hand from "../images/hand.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
export default function Registtration() {


  // Populate Country Select Dropdown
  const [countrySelect setCountrySelect] = useState([])

  async function populateCountrySelect() {

    try {
      const resp = await axios.get(`https://stratagem.igniculuss.com/api/Users/getCountryNames`)
      console.log(resp.data)
      setCountrySelect(resp)
    }
    catch (error) {
      console.log(error)


    }


  }

  useEffect(() => {
    populateCountrySelect();
  }, [])


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
    country: '',
    password: '',
    businessType: '',

  });




  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('https://stratagem.igniculuss.com/api/Users', formData);
      setSuccess('Registration successful!');
      console.log('Registration response:', response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        setError(`Registration failed: ${error.response.data.message}`);
      } else if (error.request) {
        // Request was made but no response received
        setError('No response from server.');
      } else {
        // Something else happened while setting up the request
        setError(`Error: ${error.message}`);
      }
      console.error('Registration error:', error);
    }
  };


  return (
    <div className="bg-gradient-to-r from-cyan-400 to-sky-400">
      {/* Desktop View */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center items-center w-full">
          <div className="w-2/3 flex justify-center items-center">
            <div className="rounded-lg bg-white w-2/3 p-8">
              <div className="flex justify-center items-center">
                <img src={image2svg} alt="My SVG" width={100} height={100} className="pt-2" />
              </div>
              <div className="flex justify-center">
                <img src={sign} width={500} height={250} />
              </div>
              <div className="flex justify-center items-center relative mb-4">
                <svg className="absolute bottom-6 left-36" width={36} height={46} viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23C9.94113 23 18 12.7025 18 0C18 12.7025 26.0589 23 36 23C26.0589 23 18 33.2975 18 46C18 33.2975 9.94113 23 0 23Z" fill="#02A7CC" />
                </svg>
                <div className="font-extrabold text-slate-900 text-4xl ml-2">Hello, Igniculuss</div>
                <img src={hand} className="absolute bottom-3 right-28" width={40} height={40} />
              </div>
              <div className="flex justify-center">
                <div className="text-center text-base leading-6 w-4/5 pb-4 text-slate-500">Skip repetitive and manual
                  sales-marketing tasks. Get highly productive through automation and save tons of time!
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex items-center bg-white justify-center py-6 my-0">
            <div className="w-2/3 max-w-container">
              <div className="my-12 lg:mb-8 flex items-center gap-1">
                <svg width={32} height={40} viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20C8.83656 20 16 11.0457 16 0C16 11.0457 23.1634 20 32 20C23.1634 20 16 28.9543 16 40C16 28.9543 8.83656 20 0 20Z" fill="#282828" />
                </svg>
                <span className="text-slate-950 font-bold text-2xl ml-4">Create Your Account </span>
              </div>
              <div className="mx-auto">
                <form onSubmit={handleSubmit} className="grid space-y-6" id="myForm">
                  <label className="text-slate-500 pb-2" style={{ marginBottom: '-15px', marginTop: 11 }}>First Name</label>
                  <input type="text" id="fnameInput" onChange={handleChange} className="rounded-md px-3 py-3 border text-sm focus:outline-none text-violet-600" style={{ border: '1px solid #D5D5D5' }} placeholder="First Name" />
                  <label className="text-slate-500 pb-2" style={{ marginBottom: '-15px', marginTop: 11 }}>Last Name</label>
                  <input type="text" id="lnameInput" onChange={handleChange} onChange={handleChange} className="rounded-md px-3 py-3 border text-sm text-violet-600 focus:outline-none" style={{ border: '1px solid #D5D5D5' }} placeholder="Last Name" />
                  <label className="text-slate-500 pb-2" style={{ marginBottom: '-15px', marginTop: 11 }}>Email</label>
                  <input type="email" id="emailInput" onChange={handleChange} className="rounded-md px-3 py-3 border text-sm text-violet-600 focus:outline-none" style={{ border: '1px solid #D5D5D5' }} placeholder="123@gmail.com" />
                  <label className="text-slate-500 pb-2" style={{ marginBottom: '-15px', marginTop: 11 }}>Password</label>
                  <input type="password" id="passwordInput" onChange={handleChange} className="rounded-md px-3 py-3 border text-sm text-violet-600 focus:outline-none" style={{ border: '1px solid #D5D5D5' }} placeholder="XX XX" />
                  <label className="text-slate-500 pb-2" style={{ marginBottom: '-15px', marginTop: 11 }}>Confirm Password</label>
                  <input type="password" id="confirmPasswordInput" onChange={handleChange} className="rounded-md px-3 py-3 border text-sm text-violet-600 focus:outline-none" style={{ border: '1px solid #D5D5D5' }} placeholder="XX XX" />
                  <label className="text-slate-500 pt-2" style={{ marginBottom: '-15px', marginTop: 11 }}>Contact Number</label>
                  <div className="flex items-center border rounded-md">
                    <select className="h-10 rounded-md px-3 py-2 border text-sm text-violet-600 focus:outline-none bg-white" style={{ border: 'none', boxShadow: 'none' }} id="countryCodeSelect" disabled>
                      <option value disabled selected onChange={handleChange}>Country Code</option>
                    </select>
                    <input type="text" id="phoneInput" className="rounded-md px-3 py-2 border text-sm text-violet-600 focus:outline-none" style={{ border: 'none', boxShadow: 'none' }} placeholder="Phone Number" />
                  </div>
                  <label className="text-slate-500 pt-2" style={{ marginBottom: '-15px', marginTop: 11 }}>Business Type</label>
                  <select className="h-10 rounded-md px-3 border text-sm text-violet-600 focus:outline-none custom" style={{ border: '1px solid #D5D5D5' }} id="businessInput">
                    <option value disabled selected>Select</option>
                    <option value="Advisory" onChange={handleChange}>Advisory</option>
                    <option value="IT" onChange={handleChange}>IT</option>
                    <option value="Retail" onChange={handleChange}>Retail</option>
                    <option value="Ecommerce" onChange={handleChange}>Ecommerce</option>
                  </select>
                  <label className="text-slate-500 pt-2" style={{ marginBottom: '-15px', marginTop: 11 }} id="countryInput">Country</label>
                  <select className="h-10 rounded-md px-3 py-0 border text-sm text-violet-600 focus:outline-none" style={{ border: '1px solid #D5D5D5' }} id="countrySelect" disabled>
                    {countrySelect.map((index) => {
                      return {
                     
                        < option > { index.countryName }</>
                    }

                  })}

                </select>
                <button type="submit" className="h-11 font-medium bg-cyan-400 hover:bg-cyan-500 text-gray-100 text-lg rounded-md">Submit</button>
                <div className="relative text-center py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative inline-block px-4 bg-white text-slate-800">Or log in with</div>
                </div>
                <button className="h-11 flex items-center justify-center font-medium text-gray-700 text-medium rounded-md border border-gray-300">
                  <svg width="16px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
                    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
                    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
                    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
                  </svg>
                  &nbsp; Continue with Google
                </button>
                <div className="text-center text-sm text-gray-600">
                  Already have an Account?
                  <Link to="/" className="font-semibold text-sm text-blue-700 no-underline"> Log In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >

  )
}
