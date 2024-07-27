import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../Component/Home'
import qwe from "../images/qwe.png"
import axios from 'axios';
import Createlead from "../Component/Leadpages/Createlead"
import { sidebarroute } from '../Allpagesproduct';
import Lead from '../Component/Leadpages/Lead';
import Contact from '../Component/contactpages/Contact';
import { main_base_url, urlchange_base, protocal_url } from '../Config';




export default function SidebarHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [isMenuOpen3, setIsMenuOpen3] = useState(false);


    // Get the full URL
    const fullURL = window.location.href;
    // Create a new URL object
    const url = new URL(fullURL);
    // Extract the hostname and split by '.'
    const name = url.hostname.split('.')[0];


    const navigate = useNavigate()
    const dropdownRef = useRef(null);
    const signout = () => {
        localStorage.clear();
        // Optional: Clear session storage
        sessionStorage.clear();
        // const newUrl = `${protocal_url}${urlchange_base}/login`;
        // window.location.replace(newUrl);
        navigate(`/tenantlogin`);
    };

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate(`/login`);
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
    const toggleMenu2 = () => {
        setIsMenuOpen2((prevState) => !prevState);
    };
    const toggleMenu3 = () => {
        setIsMenuOpen3((prevState) => !prevState);
    };

    const [welcomedata, setWelcomeData] = useState([]);
    // const { userId } = useParams();
    const [tenantId, setData] = useState('');
    useEffect(() => {
        const savedData = localStorage.getItem('myData');
        if (savedData) {
            setData(savedData);
        }
    }, ['myData']);

    const id = tenantId

    const handlewelcomedata = async () => {
        try {
            console.log(`Fetching data for userId: ${id}`);
            const response = await axios.get(`${main_base_url}/Tenants/gettenant/${name}`);
            console.log('Response:', response.data);
            setWelcomeData(response.data);
        } catch (error) {
            console.error('Error fetching welcome data:', error);
        }
    };

    useEffect(() => {
        handlewelcomedata();
    }, []);
    function handleclic() {
        alert("hello")
    }
    // if(!profile){
    //     return <div> Profilenot found, or not valid subdomain</div>
    //   }
    return (
        <>
            {/* <h1>{profile.name}</h1>
  <h2>{profile.age}</h2> */}
            <div className="flex  ">
                <div className="bg-cyan-500  text-white w-64 flex flex-col justify-between items-center h-full-screen">
                    <div className="flexx flex-col justify-center items-center">
                        <div className="pt-[3rem] ml-[2.4rem]">
                            <img id="logoImg" src={welcomedata.tenentLogo} alt="G" width="{100}" height="{100}" className="w-24 h-24 rounded-full object-contain" style={{ marginBottom: '0.5rem' }} />
                            <br />
                        </div>
                        <hr style={{ width: 180, textAlign: 'center', marginLeft: 0, marginBottom: '-27px' }} />
                        <div className="p-4 text-center">
                        </div>
                        <nav className="w-[180px] ml-2">
                            <ul>
                                {sidebarroute.map((item) => {
                                    return (
                                        <>
                                            <li onClick={() => navigate(item.path)} className="bg-cyan-500 hover:bg-[#4fc2da] hover:rounded-xl pb-8 pl-2  h-[38px] flex justify-start items-center mt-8 ">

                                                {item.svg}
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className="p-4 text-center">
                            <div className="text-gray-700">© 2024 Dashboard</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-gray-200">
                    <div className="bg-white p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                            <div className="relative inline-block text-left" ref={dropdownRef}>
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        onClick={toggleMenu}
                                        aria-expanded={isMenuOpen}
                                        aria-haspopup="true"
                                    >
                                        Igniculuss
                                        <svg
                                            className="-mr-1 h-5 w-5 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            data-slot="icon"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {/* Dropdown menu */}
                                <div
                                    className={`absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isMenuOpen ? '' : 'hidden'}`}
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex={-1}
                                >
                                    <div className="py-1" role="none">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
                                            Create New Company
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* s/ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}


                            <div>
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button
                                            type="button"
                                            className="px-1 py-1 text-white rounded-md"
                                            id="menu-button2"
                                            aria-expanded={isMenuOpen ? 'true' : 'false'}
                                            aria-haspopup="true"
                                            onClick={toggleMenu2}
                                        >
                                            <svg
                                                width={25}
                                                height={25}
                                                viewBox="0 0 25 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12.5 22.9173C7.58957 22.9173 5.13434 22.9173 3.60886 21.3918C2.08337 19.8664 2.08337 17.4111 2.08337 12.5007C2.08337 7.59018 2.08337 5.13495 3.60886 3.60947C5.13434 2.08398 7.58957 2.08398 12.5 2.08398C17.4105 2.08398 19.8658 2.08398 21.3912 3.60947C22.9167 5.13495 22.9167 7.59018 22.9167 12.5007C22.9167 17.4111 22.9167 19.8664 21.3912 21.3918C19.8658 22.9173 17.4105 22.9173 12.5 22.9173ZM12.5 8.5944C12.9315 8.5944 13.2813 8.94418 13.2813 9.37565V11.7194H15.625C16.0565 11.7194 16.4063 12.0692 16.4063 12.5007C16.4063 12.9321 16.0565 13.2819 15.625 13.2819H13.2813V15.6257C13.2813 16.0571 12.9315 16.4069 12.5 16.4069C12.0686 16.4069 11.7188 16.0571 11.7188 15.6257V13.2819H9.37504C8.94357 13.2819 8.59379 12.9321 8.59379 12.5007C8.59379 12.0692 8.94357 11.7194 9.37504 11.7194H11.7188V9.37565C11.7188 8.94418 12.0686 8.5944 12.5 8.5944Z"
                                                    fill="#C7C7C7"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Dropdown menu */}
                                    {isMenuOpen2 && (
                                        <div
                                            className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            id="dropdown-menu2"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="menu-button2"
                                            tabIndex={-1}
                                        >
                                            <div className="py-1" role="none">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 flex gap-2"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-0"
                                                >
                                                    {' '}
                                                    <div className="bg-blue-500 w-5 flex justify-center items-center rounded-sm">
                                                        <i className="fa-solid fa-plus fa-xs text-white" />
                                                    </div>
                                                    <p>Lead</p>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 flex gap-2"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-1"
                                                >
                                                    <div className="bg-blue-500 w-5 flex justify-center items-center rounded-sm">
                                                        <i className="fa-solid fa-plus fa-xs text-white" />
                                                    </div>
                                                    <p>Contact</p>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 flex gap-2"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-2"
                                                >
                                                    <div className="bg-blue-500 w-5 flex justify-center items-center rounded-sm">
                                                        <i className="fa-solid fa-plus fa-xs text-white" />
                                                    </div>
                                                    <p>Account</p>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 flex gap-2"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-3"
                                                >
                                                    <div className="bg-blue-500 w-5 flex justify-center items-center rounded-sm">
                                                        <i className="fa-solid fa-plus fa-xs text-white" />
                                                    </div>
                                                    <p>Deal</p>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 flex gap-2"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-4"
                                                >
                                                    <div className="bg-blue-500 w-5 flex justify-center items-center rounded-sm">
                                                        <i className="fa-solid fa-plus fa-xs text-white" />
                                                    </div>
                                                    <p>Task</p>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 flex gap-2"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-5"
                                                >
                                                    <div className="bg-blue-500 w-5 flex justify-center items-center rounded-sm">
                                                        <i className="fa-solid fa-plus fa-xs text-white" />
                                                    </div>
                                                    <p>Meeting</p>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 flex gap-2"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-6"
                                                >
                                                    <div className="bg-blue-500 w-5 flex justify-center items-center rounded-sm">
                                                        <i className="fa-solid fa-plus fa-xs text-white" />
                                                    </div>
                                                    <p>Call</p>
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button className="px-1 py-1  text-white rounded-md"><svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.8333 18.7507H4.16663L6.24996 16.6673V10.4173C6.25145 8.9414 6.77522 7.51364 7.72849 6.38687C8.68176 5.26011 10.003 4.50705 11.4583 4.26107V3.12565C11.4583 2.84938 11.568 2.58443 11.7634 2.38908C11.9587 2.19373 12.2237 2.08398 12.5 2.08398C12.7762 2.08398 13.0412 2.19373 13.2365 2.38908C13.4319 2.58443 13.5416 2.84938 13.5416 3.12565V4.26107C14.0076 4.34729 14.462 4.48711 14.8958 4.67773C14.6358 5.31 14.5358 5.99659 14.6045 6.67675C14.6731 7.35691 14.9084 8.00964 15.2895 8.57717C15.6706 9.14471 16.1858 9.60953 16.7894 9.93049C17.3929 10.2515 18.0663 10.4187 18.75 10.4173V16.6673L20.8333 18.7507ZM12.5 22.9173C13.0525 22.9173 13.5824 22.6978 13.9731 22.3071C14.3638 21.9164 14.5833 21.3865 14.5833 20.834H10.4166C10.4166 21.3865 10.6361 21.9164 11.0268 22.3071C11.4175 22.6978 11.9474 22.9173 12.5 22.9173ZM18.75 4.16732C18.3379 4.16732 17.9351 4.2895 17.5925 4.51842C17.2499 4.74734 16.9829 5.07271 16.8252 5.45339C16.6675 5.83407 16.6263 6.25296 16.7067 6.65709C16.787 7.06122 16.9855 7.43243 17.2768 7.72379C17.5682 8.01515 17.9394 8.21357 18.3435 8.29395C18.7476 8.37434 19.1665 8.33308 19.5472 8.1754C19.9279 8.01772 20.2533 7.75069 20.4822 7.40809C20.7111 7.06549 20.8333 6.6627 20.8333 6.25065C20.8333 5.69812 20.6138 5.16821 20.2231 4.77751C19.8324 4.38681 19.3025 4.16732 18.75 4.16732Z" fill="#C7C7C7" />
                                </svg>
                                </button>
                                <button className="px-1 py-1  text-white rounded-md"><svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.08337 19.7923C2.08337 21.5632 3.43754 22.9173 5.20837 22.9173H19.7917C21.5625 22.9173 22.9167 21.5632 22.9167 19.7923V11.459H2.08337V19.7923ZM19.7917 4.16732H17.7084V3.12565C17.7084 2.50065 17.2917 2.08398 16.6667 2.08398C16.0417 2.08398 15.625 2.50065 15.625 3.12565V4.16732H9.37504V3.12565C9.37504 2.50065 8.95837 2.08398 8.33337 2.08398C7.70837 2.08398 7.29171 2.50065 7.29171 3.12565V4.16732H5.20837C3.43754 4.16732 2.08337 5.52148 2.08337 7.29232V9.37565H22.9167V7.29232C22.9167 5.52148 21.5625 4.16732 19.7917 4.16732Z" fill="#C7C7C7" />
                                </svg>
                                </button>
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button"

                                            className="px-1 py-1 text-white rounded-md" id="menu-button3" onClick={toggleMenu3}
                                            aria-expanded={isMenuOpen}
                                            aria-haspopup="true">
                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.9375 9.60628C19.0521 9.60628 18.2813 8.27294 19.2188 6.63753C19.7605 5.68961 19.4375 4.48128 18.4896 3.93961L16.6875 2.90836C15.8646 2.41878 14.8021 2.71044 14.3125 3.53336L14.198 3.73128C13.2605 5.36669 11.7188 5.36669 10.7709 3.73128L10.6563 3.53336C10.1875 2.71044 9.12504 2.41878 8.30212 2.90836L6.50004 3.93961C5.55212 4.48128 5.22921 5.70003 5.77087 6.64794C6.71879 8.27294 5.94796 9.60628 4.06254 9.60628C2.97921 9.60628 2.08337 10.4917 2.08337 11.5854V13.4188C2.08337 14.5021 2.96879 15.3979 4.06254 15.3979C5.94796 15.3979 6.71879 16.7313 5.77087 18.3667C5.22921 19.3146 5.55212 20.5229 6.50004 21.0646L8.30212 22.0959C9.12504 22.5854 10.1875 22.2938 10.6771 21.4709L10.7917 21.2729C11.7292 19.6375 13.2709 19.6375 14.2188 21.2729L14.3334 21.4709C14.823 22.2938 15.8855 22.5854 16.7084 22.0959L18.5105 21.0646C19.4584 20.5229 19.7813 19.3042 19.2396 18.3667C18.2917 16.7313 19.0625 15.3979 20.948 15.3979C22.0313 15.3979 22.9271 14.5125 22.9271 13.4188V11.5854C22.9167 10.5021 22.0313 9.60628 20.9375 9.60628ZM12.5 15.8875C10.6355 15.8875 9.11462 14.3667 9.11462 12.5021C9.11462 10.6375 10.6355 9.11669 12.5 9.11669C14.3646 9.11669 15.8855 10.6375 15.8855 12.5021C15.8855 14.3667 14.3646 15.8875 12.5 15.8875Z" fill="#C7C7C7" />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Dropdown menu */}

                                    <div className={`absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isMenuOpen3 ? '' : 'hidden'}`} id="dropdown-menu3" role="menu" aria-orientation="vertical" aria-labelledby="menu-button3" tabIndex={-1}>
                                        <div className="py-1" role="none">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 flex gap-2" role="menuitem" tabIndex={-1} id="menu-item-0"><div className=" w-5 flex justify-center items-center rounded-sm"><i className="text-blue-500 fa-solid fa-bell fa-xs " /></div><p>Notification</p></a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 flex gap-2" role="menuitem" tabIndex={-1} id="menu-item-0"><div className=" w-5 flex justify-center items-center rounded-sm"><i className="text-blue-500 fa-solid fa-calendar fa-xs " /></div><p>Calender</p></a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 flex gap-2" role="menuitem" tabIndex={-1} id="menu-item-0"><div className=" w-5 flex justify-center items-center rounded-sm"><i className="text-blue-500 fa-solid fa-gear fa-xs " /></div><p>Setting</p></a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 flex gap-2" role="menuitem" tabIndex={-1} id="menu-item-0"><div className=" w-5 flex justify-center items-center rounded-sm"><i className="text-blue-500 fa-solid fa-user fa-xs " /></div><p>My Account</p></a>
                                            <a onClick={signout} className="block px-4 py-2 text-sm text-gray-700 flex gap-2" role="menuitem" tabIndex={-1} id="menu-item-0"><div className=" w-5 flex justify-center items-center rounded-sm"><i className="text-blue-500 fa-solid fa-right-from-bracket  fa-xs" /></div><p>Sign Out</p></a>
                                        </div>
                                    </div>

                                </div>
                                <button className="px-3 py-1  text-white rounded-md">
                                    <img src={qwe} alt="G" width="{0}" height="{0}" sizes="100vw" style={{ width: '"28px"', height: '"auto"' }} />
                                </button>
                            </div>



                        </div>
                    </div>


                    {/* component pages Routing */}

                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/lead" element={<Lead />} />
                        <Route path="/createlead" element={<Createlead />} />
                        <Route path="/contact" element={<Contact />} />

                    </Routes>
                    {/* <Home /> */}
                </div>


            </div>

        </>
    )
}
