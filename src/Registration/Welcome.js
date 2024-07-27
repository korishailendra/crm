import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import union1 from "../images/Union (1).png"
import { useNavigate } from 'react-router-dom';
import { main_base_url } from '../Config';
const WelcomePage = () => {

  const navigate = useNavigate()

  const [welcomedata, setWelcomeData] = useState([]);
  const { tenantId } = useParams();
  const id = tenantId
  const handlewelcomedata = async () => {
    try {
      console.log(`Fetching data for tenant: ${id}`);
      const response = await axios.get(`${main_base_url}/Tenants/tenantuser/${id}`);
      console.log('Response:', response.data.tenantWithUsers);
      setWelcomeData(response.data.tenantWithUsers);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("registrationdata", JSON.stringify(response.data.tenantWithUsers));
      
    } catch (error) {
      console.error('Error fetching welcome data:', error);
    }
  };
  useEffect(() => {
    if (tenantId) {
      handlewelcomedata();
    } else {
      console.error('No userId found in URL parameters.');
    }
  }, [tenantId]);



  return (
    <div className="desktop bg-gradient-to-r from-cyan-400 to-sky-400">
      <div className="flex w-[700] min-h-screen justify-center items-center">
        <div className="hidden lg:block">
          <div className="rounded-3xl my-12 py-6 bg-white relative" style={{ width: '100%' }}>
            <div className="absolute w-24 top-28">
              <img src="images/Union (1).png" alt="" />
            </div>
            <div className="absolute w-24 top-28 right-0">
              <img src={union1} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img
                id="logoImg"
                src={welcomedata.tenantUrl}
                alt="Company Logo"
                className="pt-4 rounded-full object-contain"
                style={{ height: '100px', width: '100px' }}
              />
            </div>
            <div className="flex justify-center pt-12">
              <div className="font-extrabold text-sky-600 text-5xl">
                Welcome
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center leading-6 w-[430px] py-2 text-xl text-slate-500 font-medium">
                {/* {registrationdata && (
                  <p id="companyName">{registrationdata.firstName} {registrationdata.lastName}</p>
                )} */}
                {welcomedata.firstName} {welcomedata.lastName}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center text-base leading-6 w-[430px] pt-2 pb-2 text-slate-500">
                {/* Business Sloution/ */}
                {welcomedata.tenantName}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button onClick={() => navigate(`/`)} className="h-11 font-medium bg-cyan-400 hover:bg-cyan-500 text-base text-gray-100 px-12 my-8 rounded-md w-72">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
