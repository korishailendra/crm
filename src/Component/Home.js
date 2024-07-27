import React from 'react'
import hand from "../images/hand.png"
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart } from 'react-google-charts';


const data = [
  ['City', 'Count All(Name)'],
  ['New 3D Printing...', 40],
  ['Direct Leads.', 20],
  ['Customer Retention', 30],
  ['Customer Marketing', 35],
  ['3D Printers Promo', 25]
];



const options = {
  title: 'Open Leads',
  chartArea: { width: '50%', height: '70%' },
  hAxis: {
    title: 'Count All(Name)',
    minValue: 0,
    gridlines: {
      color: 'transparent'
    }
  },
  vAxis: {
    title: '',
    gridlines: {
      color: 'red'
    }
  },
  bar: { groupWidth: '45%' },
  legend: { position: 'none' }
};
export default function Home({ tenantName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const navigate = useNavigate()

  const [userDetail, setuserDetail] = useState("")
  const [registrationdata, setregistrationdata] = useState("")

  useEffect(() => {
    const saveData = localStorage.getItem('registrationdata')
    const regdata = saveData ? JSON.parse(saveData) : null;
    console.log(regdata)
   
    if (regdata) {
      setregistrationdata(regdata)
    }
    else {
      console.log("Company data not found")
    }

    

  }, [])

  // console.log(registrationdata)



  useEffect(() => {
    const savedData = localStorage.getItem('userDetail');
    const mydataa = savedData ? JSON.parse(savedData) : null;

    if (mydataa) {
      setuserDetail(mydataa.userDetail);
    } else {
      console.log("company data not found");
    }
  }, []); // Add dependency array here to ensure this runs only once
  return (
    <>
      <div>

        {/* component pages  */}
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold mr-2" id="companyName">
                {userDetail ? `${userDetail.firstName} ${userDetail.lastName}` :
                (registrationdata ? `${registrationdata.firstName} ${registrationdata.lastName}` : 'Guest')}

                
            </h2>


            {/* {userDetail && (

              <h2 className="text-2xl font-bold mr-2 " id="companyName"> {userDetail.firstName}    {userDetail.lastName}</h2>
            )} */}
            {/* {firstName} {lastName}   */}


            {/* {registrationdata && (
              <h2 className="text-2xl font-bold mr-2 " id="companyName"> {registrationdata.firstName} {registrationdata.lastName}</h2>
            )} */}

            <img src={hand} alt="Hand" className="w-7 h-7" />
          </div>
          <div className="flex justify-between items-center px-4 py-2  space-x-1">
            <div className="relative inline-block text-left">
              <div>
                <button type="button" className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 " id="menu-button" aria-expanded="false" aria-haspopup="true">
                  Till Date
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {/* Dropdown menu */}
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" id="dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative inline-block text-left">
              <div>
                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                  <p id="companyName2"> Shubham rajput</p>
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {/* Dropdown menu */}
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" id="dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative inline-block text-left">
              <div className="">
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 bg-blue-500 hover:bg-gray-400 h-9"
                  id="menu-button4"
                  onClick={toggleMenu}
                  aria-expanded={isMenuOpen ? 'true' : 'false'}
                  aria-haspopup="true"
                >
                  <i className="fa-solid fa-plus text-white" />
                </button>
              </div>

              {/* Dropdown menu */}
              {isMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  id="dropdown-menu4"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button4"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
                      Add Component
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">
                      Recorder
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">
                      View in Full Screen
                    </a>
                    <form method="POST" action="#" role="none">
                      <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex">


          <div className="w-1/2 bg-white m-4 rounded-lg mb-4">
            <div className="flex justify-between items-center px-4 py-2 border-b-2 border-slate-300">
              <div>
                <div className="font-bold">Leads By Source Campaign</div>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                    Till Date
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Dropdown menu */}
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" id="dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                    <form method="POST" action="#" role="none">
                      <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '100%', height: 350 }}>
              <Chart
                chartType="BarChart"
                width="100%"
                height="350px"
                data={data}
                options={options}
              />
            </div>
          </div>
          <div className="w-1/2 bg-white m-4 rounded-lg">
            <div className="flex justify-between items-center px-4 py-2 border-b-2 border-slate-300">
              <div>
                <div className="font-bold">Cases By Priority (Per Owner)</div>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                    Till Date
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Dropdown menu */}
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" id="dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                    <form method="POST" action="#" role="none">
                      <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-4 py-2  ">
              <div>
                <div className="p-4">Active Cases</div>
              </div>
              <div className="flex">
                <div className="mr-2">
                  <svg className="w-6 h-4" viewBox="0 0 24 14" fill="#EF1763" xmlns="http://www.w3.org/2000/svg">
                    <rect width={24} height={14} rx={7} />
                  </svg>
                </div>
                <div className="mr-4">
                  <div className="text-sm mb-2">Low</div>
                </div>
                <div className="mr-2">
                  <svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width={24} height={14} rx={7} fill="#F18F1C" />
                  </svg>
                </div>
                <div className="mr-4">
                  <div className="text-sm mb-2">Normal</div>
                </div>
                <div className="mr-2">
                  <svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width={24} height={14} rx={7} fill="#31A4FF" />
                  </svg>
                </div>
                <div className="mr-4">
                  <div className="text-sm mb-2">High</div>
                </div>
              </div>
            </div>
            <div id="chart_div2" style={{ height: 350, width: 'auto' }} className="mb-2" />
          </div>
        </div>
        <div className="bg-white m-4 rounded-2xl h-[26.4rem]">
          <div className="flex justify-between p-4">
            <div>
              <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded hover:text-white hover:bg-cyan-400">My Open task</button>
              <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded hover:text-white hover:bg-cyan-400">My meetings</button>
              <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded hover:text-white hover:bg-cyan-400">Today's leads</button>
              <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded hover:text-white hover:bg-cyan-400">My Deals closing this month</button>
            </div>
            <div>
              <div className="relative inline-block text-left">
                <div>
                  <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                    Igniculuss
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Dropdown menu */}
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" id="dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                    <form method="POST" action="#" role="none">
                      <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: 5, marginBottom: 5 }} />
          <div className="overflow-y-scroll h-[20rem] scrollbar scrollbar-thumb-blue-500 scrollbar-track-transparent">
            {/* table */}
            <table className="w-full">
              <thead>
                <tr className=" text-gray-500">
                  <th className="py-2 px-4 text-left">Subject</th>
                  <th className="py-2 px-4 text-left">Regarding</th>
                  <th className="py-2 px-4 text-left">Activity Type</th>
                  <th className="py-2 px-4 text-left">Activity Status</th>
                  <th className="py-2 px-4 text-left">Owner</th>
                  <th className="py-2 px-4 text-left">Priority</th>
                  <th className="py-2 px-4 text-left">Start Date</th>
                  <th className="py-2 px-4 text-left">End Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className>
                  <td className="py-2 px-4">Build Marketing List For Amp.</td>
                  <td className="py-2 px-4">Software Project</td>
                  <td className="py-2 px-4"><button className="bg-blue-500 text-white px-4 py-2 rounded-full w-20">Task</button></td>
                  <td className="py-2 px-4"><button className="bg-green-500 text-white px-4 py-2 rounded-full w-20">Open</button></td>
                  <td className="py-2 px-4"><div className="flex justify-start gap-1"><img src={hand} alt className="w-6" /><p> Keen Malit</p></div></td>
                  <td className="py-2 px-4"><button className="bg-orange-400 text-white px-4 py-2 rounded-full w-20 ">Normal</button></td>
                  <td className="py-2 px-4">12/02/23</td>
                  <td className="py-2 px-4">12/05/23</td>
                </tr>
                <tr className>
                  <td className="py-2 px-4">Build Marketing List For Amp.</td>
                  <td className="py-2 px-4">Software Project</td>
                  <td className="py-2 px-4"><button className="bg-blue-500 text-white px-4 py-2 rounded-full w-20">Task</button></td>
                  <td className="py-2 px-4"><button className="bg-green-500 text-white px-4 py-2 rounded-full w-20">Open</button></td>
                  <td className="py-2 px-4"><div className="flex justify-start gap-1"><img src={hand} alt className="w-6" /><p> Keen Malit</p></div></td>
                  <td className="py-2 px-4"><button className="bg-orange-400 text-white px-4 py-2 rounded-full w-20 ">Normal</button></td>
                  <td className="py-2 px-4">12/02/23</td>
                  <td className="py-2 px-4">12/05/23</td>
                </tr>
                <tr className>
                  <td className="py-2 px-4">Build Marketing List For Amp.</td>
                  <td className="py-2 px-4">Software Project</td>
                  <td className="py-2 px-4"><button className="bg-blue-500 text-white px-4 py-2 rounded-full w-20">Task</button></td>
                  <td className="py-2 px-4"><button className="bg-green-500 text-white px-4 py-2 rounded-full w-20">Open</button></td>
                  <td className="py-2 px-4"><div className="flex justify-start gap-1"><img src={hand} alt className="w-6" /><p> Keen Malit</p></div></td>
                  <td className="py-2 px-4"><button className="bg-orange-400 text-white px-4 py-2 rounded-full w-20 ">Normal</button></td>
                  <td className="py-2 px-4">12/02/23</td>
                  <td className="py-2 px-4">12/05/23</td>
                </tr>
                <tr className>
                  <td className="py-2 px-4">Build Marketing List For Amp.</td>
                  <td className="py-2 px-4">Software Project</td>
                  <td className="py-2 px-4"><button className="bg-blue-500 text-white px-4 py-2 rounded-full w-20">Task</button></td>
                  <td className="py-2 px-4"><button className="bg-green-500 text-white px-4 py-2 rounded-full w-20">Open</button></td>
                  <td className="py-2 px-4"><div className="flex justify-start gap-1"><img src={hand} alt className="w-6" /><p> Keen Malit</p></div></td>
                  <td className="py-2 px-4"><button className="bg-orange-400 text-white px-4 py-2 rounded-full w-20 ">Normal</button></td>
                  <td className="py-2 px-4">12/02/23</td>
                  <td className="py-2 px-4">12/05/23</td>
                </tr>
                <tr className>
                  <td className="py-2 px-4">Build Marketing List For Amp.</td>
                  <td className="py-2 px-4">Software Project</td>
                  <td className="py-2 px-4"><button className="bg-blue-500 text-white px-4 py-2 rounded-full w-20">Task</button></td>
                  <td className="py-2 px-4"><button className="bg-green-500 text-white px-4 py-2 rounded-full w-20">Open</button></td>
                  <td className="py-2 px-4"><div className="flex justify-start gap-1"><img src={hand} alt className="w-6" /><p> Keen Malit</p></div></td>
                  <td className="py-2 px-4"><button className="bg-orange-400 text-white px-4 py-2 rounded-full w-20 ">Normal</button></td>
                  <td className="py-2 px-4">12/02/23</td>
                  <td className="py-2 px-4">12/05/23</td>
                </tr>
                <tr className>
                  <td className="py-2 px-4">Build Marketing List For Amp.</td>
                  <td className="py-2 px-4">Software Project</td>
                  <td className="py-2 px-4"><button className="bg-blue-500 text-white px-4 py-2 rounded-full w-20">Task</button></td>
                  <td className="py-2 px-4"><button className="bg-green-500 text-white px-4 py-2 rounded-full w-20">Open</button></td>
                  <td className="py-2 px-4"><div className="flex justify-start gap-1"><img src={hand} alt className="w-6" /><p> Keen Malit</p></div></td>
                  <td className="py-2 px-4"><button className="bg-orange-400 text-white px-4 py-2 rounded-full w-20 ">Normal</button></td>
                  <td className="py-2 px-4">12/02/23</td>
                  <td className="py-2 px-4">12/05/23</td>
                </tr>
                <tr className>
                  <td className="py-2 px-4">Build Marketing List For Amp.</td>
                  <td className="py-2 px-4">Software Project</td>
                  <td className="py-2 px-4"><button className="bg-blue-500 text-white px-4 py-2 rounded-full w-20">Task</button></td>
                  <td className="py-2 px-4"><button className="bg-green-500 text-white px-4 py-2 rounded-full w-20">Open</button></td>
                  <td className="py-2 px-4"><div className="flex justify-start gap-1"><img src={hand} alt className="w-6" /><p> Keen Malit</p></div></td>
                  <td className="py-2 px-4"><button className="bg-orange-400 text-white px-4 py-2 rounded-full w-20 ">Normal</button></td>
                  <td className="py-2 px-4">12/02/23</td>
                  <td className="py-2 px-4">12/05/23</td>
                </tr>
                <tr className>
                  <td className="py-2 px-4">Build Marketing List For Amp.</td>
                  <td className="py-2 px-4">Software Project</td>
                  <td className="py-2 px-4"><button className="bg-blue-500 text-white px-4 py-2 rounded-full w-20">Task</button></td>
                  <td className="py-2 px-4"><button className="bg-green-500 text-white px-4 py-2 rounded-full w-20">Open</button></td>
                  <td className="py-2 px-4"><div className="flex justify-start gap-1"><img src={hand} alt className="w-6" /><p> Keen Malit</p></div></td>
                  <td className="py-2 px-4"><button className="bg-orange-400 text-white px-4 py-2 rounded-full w-20 ">Normal</button></td>
                  <td className="py-2 px-4">12/02/23</td>
                  <td className="py-2 px-4">12/05/23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}
