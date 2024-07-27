import React from 'react'
import verify from "../images/verify.png"
import image2 from "../images/image2.svg"
import hand from "../images/hand.png"
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import group381 from "../images/Group 381.png"
import { main_base_url } from '../Config';
import { urlchange_base } from '../Config';

export default function Verifyotp() {
  const { userId } = useParams()
  const [userEmail, setUserEmail] = useState();// Set this to the user's email
  const [otp, setOtp] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [otpSentMessage, setOtpSentMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [base64Image, setBase64Image] = useState('');
  const [emailreg, setEmailreg] = useState('')

  useEffect(() => {
    const registration = JSON.parse(localStorage.getItem('registrationdata'))
    if (registration) {
      setEmailreg(registration.data.email)
    }


  }, ['myData', 'registrationdata']);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBase64Image(event.target.result.split(',')[1]);
        document.getElementById('profileImage').src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };



  const navigate = useNavigate()
  const showToast = (message, backgroundColor) => {
    Toastify({
      text: message,
      duration: 1000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: backgroundColor,
      stopOnFocus: true,
    }).showToast();
  };


  useEffect(() => {
    let timer;
    if (resendDisabled) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setResendDisabled(false);
            // agar true kr doge to 60 sec ke baad bhi send ho jayega verify otp 
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendDisabled]);


  // if (!emailreg) {
  //   showToast("Otp field is required", "#FF0000");
  //   return;
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formValues = {
      emailid: emailreg,
      otp: otp
    };

    try {
      const response = await axios.post(`${main_base_url}/Users/verify/otp`, formValues);
      if (response.data.status === 200) {
        setUserEmail(userEmail);
        toggleModal();

        showToast(response.data.message, "#00FF00")

      } else {
        setOtp(response.data.data.errors, "#FF0000")
      }

    } catch (error) {
      console.error('Error:', error);
      if (error.response.data.message) {
        showToast(error.response.data.message, "#FF0000")

      }
      else {
        showToast(error.response.data.errors.Otp, "#FF0000")

      }
      // showToast(error.response.data, 'red');
    }
  };
  const handleResend = async (event) => {
    event.preventDefault();

    console.log('Resending OTP to:', userEmail); // Log the email being sent

    try {
      const response = await axios.post(`${main_base_url}/Users/send/otp`, { Email: emailreg });
      if (response.data.status === 200) {
        setUserEmail(userEmail);
        showToast(response.data.message, "#00FF00");
        setResendDisabled(true);
      } else {
        alert('Failed to resend OTP');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to resend OTP: ' + error.message);
    }
  };


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = {
      userId: userId,
      name: companyName,
      host: companyName + ".copulaa.com",
      tenentLogo: base64Image,
      connectionString: "string"
    };



    try {
      const response = await axios.post(`${main_base_url}/Tenants`, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(response.data)
      const data = response.data
      if (data.isSuccess === false) {
        // console.log('Success:', response.data.tenantId);
        showToast(data.message, "#FF0000");
      } else {
        showToast("Company Added Successfully", "#00ff00");
        localStorage.setItem('companyData', JSON.stringify(data));
        localStorage.setItem('myData', response.data.tenantId);
        const host = response.data.tenant.host;
        console.log(response)
        const port = 3000; // Port where your React app is running
        const tenantId = response.data.tenant.tenantId
        // Construct the new URL with the subdomain and navigate to the welcome page
        const newUrl = `http://${host.split('.')[0]}.${urlchange_base}/welcome/${tenantId}`;
        window.location.href = newUrl;

      }
    } catch (error) {
      console.error('Error:', error.response.data.errors.tenant);
      showToast(error.response.data.errors.tenant, "#FF0000");
    }
  };

  return (

    <>

      <div>

        {/* Main modal */}
        {isModalOpen && (
          <div
            id="static-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-60"
          >
            <div className="relative  p-4 w-full max-w-xl">
              {/* Modal content */}
              <div className="relative bg-white rounded-xl  shadow ">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4  rounded-t dark:border-gray-700">
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={toggleModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}

                <div className="relative bg-white rounded-lg p-8 border-gray-200 border-2">
                  <div className="flex justify-center">
                    <div className="text-slate-900 font-semibold text-xl">
                      Add Company Logo
                    </div>
                  </div>
                  <div className="flex justify-center py-4">
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <img
                        src={group381}
                        alt="My SVG"
                        width={150}
                        height={150}
                        className="w-24 h-24 rounded-full border-1 border-gray-200 object-contain"
                        id="profileImage"
                        onClick={handleImageClick}
                      />
                    </label>
                    <input
                      id="imageInput"
                      required
                      type="file"
                      accept="image/png, image/jpeg, image/svg+xml"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="text-slate-900" id="fix">
                      Supported formats: JPEG, PNG, GIF, MP4, PDF,
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <form className="grid space-y-4 w-72 py-4" id="myForm" onSubmit={handleUpload}>
                      <label className="text-slate-800 pb-2">Company Name</label>
                      <input
                        type="text"
                        required
                        className="h-10 rounded-md px-3 py-6 border text-sm focus:outline-none"
                        placeholder="Company Name and Host Name"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                      <button type='submit' className="h-11 w-72 font-medium bg-cyan-400 hover:bg-cyan-500 text-gray-100 text-base rounded-md my-4">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>

                {/* Modal footer */}

              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-cyan-400 to-sky-400 min-h-screen flex items-center justify-center">
        <div className="hidden md:flex w-2/3 items-center justify-center">
          <div className="bg-white rounded-lg w-2/3 p-6">
            <div className="flex justify-center mb-4">
              <img src={image2} alt="My SVG" width={100} height={100} />
            </div>
            <div className="flex justify-center mb-4">
              <img src={verify} alt="Image" width={500} height={250} />
            </div>
            <div className="flex items-center justify-center mb-2">
              <svg width={36} height={46} viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 23C9.94113 23 18 12F.7025 18 0C18 12.7025 26.0589 23 36 23C26.0589 23 18 33.2975 18 46C18 33.2975 9.94113 23 0 23Z" fill="#02A7CC" />
              </svg>
              <div className="font-extrabold text-slate-900 text-4xl ml-2">Hello, Igniculuss</div>
              <img src={hand} alt="Hand" width={50} height={50} className="ml-2" />
            </div>
            <div className="text-center text-base leading-6 text-slate-500 mb-10">
              Skip repetitive and manual sales-marketing tasks. Get highly productive through automation and save tons of time!
            </div>
          </div>
        </div>
        <div className="w-1/3 min-h-screen flex items-center bg-white justify-center py-6">
          <div className="w-2/3 max-w-container">
            <a href="/" className="mt-12 flex items-center gap-1">
              <svg width={32} height={40} viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20C8.83656 20 16 11.0457 16 0C16 11.0457 23.1634 20 32 20C23.1634 20 16 28.9543 16 40C16 28.9543 8.83656 20 0 20Z" fill="#282828" />
              </svg>
              <span className="text-slate-950 font-bold text-2xl py-6">Verify Your Sign-up</span>
            </a>
            <div className="text-slate-800 text-sm">
              Enter the one-time password sent to your Email ID: <span>{emailreg}</span>
            </div>
            <div className="mx-auto">
              <form className="grid space-y-6" onSubmit={handleSubmit}>
                <div className="flex justify-end py-2">
                  <div className="text-right text-cyan-600 no-underline">
                    <a href="/change">Change</a>
                  </div>
                </div>

                <input
                  type="number"
                  className="h-10 rounded-md px-3 border text-xs focus:outline-none"
                  style={{ margin: 0, border: '1px solid #D5D5D5' }}
                  placeholder="XXX XXX"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <div className="flex justify-between m-0 pb-12">
                  <div
                    className={`text-left text-slate-950 cursor-pointer ${resendDisabled ? 'disabled' : ''}`}
                    onClick={!resendDisabled ? handleResend : null}
                  >
                    {resendDisabled ? `Resend in ${countdown}s` : 'Resend in'}
                  </div>
                  <a>
                    <div className="text-right text-cyan-600 no-underline">
                      Choose Other Way
                    </div>
                  </a>
                </div>
                <button className="h-11 w-full font-medium bg-cyan-400 hover:bg-cyan-500 text-gray-100 text-base rounded-md" type="submit">
                  Verify
                </button>
                <div className="text-center text-sm pb-12 font-medium text-gray-600">
                  {otpSentMessage && <div id="otpSentMessage" style={{ color: 'green', marginTop: 10 }}>{otpSentMessage}</div>}
                </div>
              </form>
              {/* <div
              className={`text-left text-slate-950 cursor-pointer ${resendDisabled ? 'disabled' : ''}`}
              onClick={handleResend}
            >
              {resendDisabled ? `Resend in ${countdown}s` : 'Resend'}
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}






