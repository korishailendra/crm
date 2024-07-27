import React, { useEffect } from 'react'
import group381 from "../../images/Group 381.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Lead() {
    const navigate = useNavigate()
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [getleads, setGetleads] = useState([])

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };
    const toggleMenu1 = () => {
        setIsExpanded1(prevState => !prevState);
    };
    const toggleMenu2 = () => {
        setIsExpanded2(prevState => !prevState);
    };
    const toggleMenu3 = () => {
        setIsExpanded3(prevState => !prevState);
    };
    const toggleMenu4 = () => {
        setIsExpanded4(!isExpanded4);
    };

    async function handleLead() {
        const bearer_token = localStorage.getItem("token");

        try {

            const config = {
                headers: {
                    Authorization: `Bearer ${bearer_token}`
                }
            };
            const response = await axios.get(`https://stratagem.igniculuss.com/api/Lead/leads`, config)
            console.log("leads", response.data.data)
            setGetleads(response.data.data)

        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleLead()
    }, [])
    return (
        <div>

            <div className="p-4 flex justify-between items-center bg-white mt-3 h-14">
                <div className="flex justify-center items-center">
                    <div className="flex justify-between items-center px-4 py-2 ">
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    id="menu-button2"
                                    aria-expanded={isExpanded}
                                    aria-haspopup="true"
                                    onClick={toggleMenu}
                                >
                                    All Leads
                                    <svg
                                        className="-mr-1 h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
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
                                className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isExpanded ? '' : 'hidden'}`}
                                id="dropdown-menu2"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button2"
                                tabIndex="-1"
                            >
                                <div className="py-1" role="none">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        All Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        Junk Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        My Convertible Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        My Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        Not Qualified Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        Open Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        Recently Created Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        Recently Modified Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        Today's Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        Unread Leads
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                                        Unsubscribed Leads
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 ">
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" onClick={toggleMenu3} className="inline-flex w-32 h-9 justify- gap-x-1.5 rounded-3xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button3" aria-expanded="false" aria-haspopup="true">
                                    {/* <input type="text" disabled placeholder=" 🔍 Search" class=" rounded-xl w-28 " id="menu-button3"> */}
                                    🔍 Search
                                </button>
                            </div>
                            {/* Dropdown menu */}
                            <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isExpanded3 ? '' : "hidden"}`} id="dropdown-menu3" role="menu" aria-orientation="vertical" aria-labelledby="menu-button3" tabIndex={-1}>
                                <div className="py-1" role="none">
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>
                                        <input type="checkbox" className="mr-2" /> Touched Records
                                    </label>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>
                                        <input type="checkbox" className="mr-2" /> Untouched Records
                                    </label>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>
                                        <input type="checkbox" className="mr-2" /> Reecord Action
                                    </label>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>
                                        <input type="checkbox" className="mr-2" /> Related Records Action
                                    </label>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>
                                        <input type="checkbox" className="mr-2" />Locked
                                    </label>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>
                                        <input type="checkbox" className="mr-2" /> Latest Email Status
                                    </label>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>
                                        <input type="checkbox" className="mr-2" /> Activities
                                    </label>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>
                                        <input type="checkbox" className="mr-2" /> Notes
                                    </label>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>
                                        <input type="checkbox" className="mr-2" /> Campaigns
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center -space-x-4 ">
                    <div className="flex justify-between items-center px-4 py-2 ">
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" onClick={toggleMenu4} className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button4" aria-expanded="false" aria-haspopup="true">
                                    <i className="fa-solid fa-bars" />
                                    <svg className="-mr-1  h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {/* Dropdown menu */}
                            <div className={`absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isExpanded4 ? '' : 'hidden'}`} id="dropdown-menu4" role="menu" aria-orientation="vertical" aria-labelledby="menu-button4" tabIndex={-1}>
                                <div className="py-1" role="none">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Table View</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Grid View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 ">
                        <div className="relative inline-block text-left">
                            <div className="flex justify-center items-center">
                                <button type="button" onClick={() => navigate("/createlead")} className="inline-flex w-28 justify-center gap-x-1.5  rounded-md bg-[#4880ff] text-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 " id="menu-button" aria-expanded="false" aria-haspopup="true">
                                    Create Lead </button>

                                <button className="inline-flex w-9 justify-center gap-x-1.5 rounded-md bg-[#4880ff] text-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 " id="menu-button5" aria-expanded={isExpanded1}
                                    aria-haspopup="false"
                                    onClick={toggleMenu1} >
                                    <svg className="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {/* Dropdown menu */}
                            <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${isExpanded1 ? '' : 'hidden'}`} id="dropdown-menu5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div className="py-1" role="none">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Import Leads</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 ">
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" onClick={toggleMenu2} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#dadcf6] px-3 py-2 text-sm font-semibold text-[#4880ff] shadow-sm ring-1 ring-inset ring-[#4880ff] hover:bg-gray-50" id="menu-button6" aria-expanded="false" aria-haspopup="true">
                                    Actions
                                    <svg className="-mr-1 h-5 w-5 text-[#4880ff]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {/* Dropdown menu */}
                            <div className={`absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isExpanded2 ? '' : "hidden"}`} id="dropdown-menu6" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div className="py-1" role="none">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Mass Delete</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Mass Update</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">Mass Email</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">Approve Leads</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">Add to Campaign</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">Export Leads</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">Sheet View</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">Print View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* next div */}
            <div className="p-3">
                {/* 1 st div */}
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center mb-1">
                        <h1 className="font-bold text-3xl ml-2">Leads</h1>
                        <button className="bg-blue-500 text-white py-2 rounded-md w-10 ">72</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="button" className="inline-flex w-16 h-9 justify-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex justify-center items-center" id="menu-button" aria-expanded="false" aria-haspopup="true">
                            <i className="fa-solid fa-filter fa-xl" />
                        </button>
                        <button type="button" className="inline-flex w-24 h-9 justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex justify-center items-center" id="menu-button" aria-expanded="false" aria-haspopup="true">
                            Filter By
                        </button>
                        <div className="flex justify-between items-center  py-2 ">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button type="button" className="inline-flex w-40 justify-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                        14 Feb 2019
                                        <svg className="-mr-1 h-5 w-5 text-[#00000]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
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
                </div>
                {/* 2 st div */}
                <div className="bg-white rounded-2xl">
                    <div className="overflow-y-scroll h-[50rem] scrollbar scrollbar-thumb-blue-500 scrollbar-track-transparent text-sm">
                        {/* table */}
                        <table className="w-full">
                            <thead className="h-8">
                                <tr className=" text-gray-500 ">
                                    <th className="py-2 px-4 text-left flex justify-between items-center border-r-2">
                                        <div className="flex justify-start items-center">
                                            <input type="checkbox" name id />
                                            <h1 className="ml-2">Leads Name</h1>
                                            <div className="flex justify-between items-center  ">
                                                <div className="relative inline-block text-left">
                                                    <div className="mb-1 -mt-1">
                                                        <button type="button" className="inline-flex w-20 h-2 justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                                            <p className="text-md text-gray-500 font-semibold">All</p>
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
                                        <div><i className="fa-solid fa-bars" /></div>
                                    </th>
                                    <th className="py-2 px-4 text-left border-r-2">
                                        <div className="flex items-center justify-between">
                                            <p>Company</p>
                                            <div><i className="fa-solid fa-bars" /></div>
                                        </div>
                                    </th>
                                    <th className="py-2 px-4 text-left border-r-2">
                                        <div className="flex items-center justify-between">
                                            <p>Email</p>
                                            <div><i className="fa-solid fa-bars" /></div>
                                        </div></th>
                                    <th className="py-2 px-4 text-left border-r-2">
                                        <div className="flex items-center justify-between">
                                            <p>Phone</p>
                                            <div><i className="fa-solid fa-bars" /></div>
                                        </div></th>
                                    <th className="py-2 px-4 text-left border-r-2">
                                        <div className="flex items-center justify-between">
                                            <p>Lead Source</p>
                                            <div><i className="fa-solid fa-bars" /></div>
                                        </div></th>
                                    <th className="py-2 px-4 text-left border-r-2">Manage By</th>
                                    <th className="py-2 px-4 text-left border-r-2"><i className="fa-solid fa-sliders" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={7}>
                                        <hr className="border-t-2 border-gray-200" />
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>

                                
                                    {getleads.map((item) => {
                                        return(
                                            <>
                                            <tr key={item} className="font-semibold">
                                            <td  className="py-2 px-4 flex justify-start items-center space-x-1">
                                                <input type="checkbox" name id className="mr-1" />
                                                <img src={group381} alt className="w-10" />
                                                <p className="text-md">{item.name} <br /><button className="bg-green-500 text-white px-2 py-2 rounded-full  h-5 text-xs flex justify-center items-center">New Lead</button></p>
                                            </td>
                                            <td className="py-2 px-4">{item.company}</td>
                                            <td className="py-2 px-4 text-blue-500">{item.email}</td>
                                            <td className="py-2 px-4 text-blue-500"><div className="flex justify-start items-center gap-2"><p>{item.mobileNo}</p> <i className="fa-solid fa-phone text-orange-400" /> </div></td>
                                            <td className="py-2 px-4">{item.leadsSource}</td>
                                            <td className="py-2 px-4"><button className="bg-orange-400 text-white px-4 py-2 rounded-full w-20 h-7 flex justify-center items-center">{item.assigned_To}</button></td>
                                            </tr>
                                        </>
                                        )
                                      
                                    })}

                             
                               
                              
                            
                         
                            
                           
                            
                           
                        
                      
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}    
