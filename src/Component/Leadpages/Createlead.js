import React, { useEffect, useState } from 'react'
import Group381 from "../../images/Group 381.png"
import axios from 'axios'
export default function Createlead() {
    const [name, setName] = useState("");
    const [language, setLanguage] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [tital, setTital] = useState("");
    const [leadsSource, setLeadsSource] = useState("");
    const [leadesStatus, setLeadesStatus] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [assigned_To, setAssignedTo] = useState("");
    const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [description, setDescription] = useState("");
    const [risk_Capacity, setRiskCapacity] = useState("");
    const [tradingTime, setTradingTime] = useState("");
    const [tradingType, setTradingType] = useState("");
    const [investment, setInvestment] = useState("");
    const [advisaryExp, setAdvisaryExp] = useState("");
    const [segments, setSegments] = useState([""]);
    const [trialStartDate, setTrialStartDate] = useState("");
    const [trialEndDate, setTrialEndDate] = useState("");
    const [contactId, setContactId] = useState("");
    const [trading_yrs, setTradingYrs] = useState("");
    const [call_bck_DateTime, setCallbckDateTime] = useState("");
    const [lastModifiedBy, setLastModifiedBy] = useState("")



    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormvalue({ ...formValues, [name]: value });
    // };
    // const accesToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNlcmdvdm9sby5uaXJhbmphbkBnbWFpbC5jb20iLCJuYW1laWQiOiIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvdXJpIjoiKzE5MTMxNTMxMjcyIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNzIwNjA0NDUwLCJleHAiOjE3NTIxNDA0NTAsImlhdCI6MTcyMDYwNDQ1MH0.CSqtxbI7hJ-FF9jj55ecSDiD2zl5ZOMpINyXoIa7gEI";

    // const authAxios = axios.create({
    //     baseURL: "https://stratagem.igniculuss.com/api/Lead/lead/add",
    //     headers: {
    //         Authorization: `bearer ${accesToken}`,
    //     },
    // });

    // const [tokenberear, setToken] = useState("")
    //     useEffect(() => {
    //         const bearer_token = localStorage.getItem('token');
    //         console.log(bearer_token)
    //         if (bearer_token ) {
    //             setToken(bearer_token );
    //         }
    //     }, ['token']);
    // console.log(tokenberear)


    async function handlesubmit(event) {
        event.preventDefault();
        const bearer_token = localStorage.getItem("token");
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${bearer_token}`
                }
            };

            const formData = {
                name: name,
                language: language,
                company: company,
                email: email,
                tital: tital,
                leadsSource: leadsSource,
                leadesStatus: leadesStatus,
                mobileNo: mobileNo,
                phoneNo: phoneNo,
                assigned_To: assigned_To,
                street: street,
                postalCode: postalCode,
                country: country,
                city: city,
                state: state,
                description: description,
                risk_Capacity: risk_Capacity,
                tradingTime: tradingTime,
                tradingType: tradingType,
                investment: investment,
                advisaryExp: advisaryExp,
                segments: [segments],
                trialStartDate: trialStartDate,
                trialEndDate: trialEndDate,
                contactId: contactId,
                trading_yrs: trading_yrs,
                call_bck_DateTime: call_bck_DateTime,
                lastModifiedBy: lastModifiedBy
            };

            const response = await axios.post(
                'https://stratagem.igniculusscrm.com/api/Lead/lead/add',
                formData, config
            );
            alert("form submited hasbeen  successfull")
            console.log("Success:", response.data);
            // Handle success response as needed (e.g., show success message, redirect, etc.)

        } catch (error) {
            console.error("Error:", error);
            // Handle error response (e.g., show error message, log error, etc.)

            if (error.response && error.response.data && error.response.data.errors) {
                console.log("Validation Errors:", error.response.data.errors);
                // Handle specific validation errors if needed
            }
        }
    }


    return (
        <>
            <div>
                <div className="p-4 flex justify-between items-center bg-white mt-3 h-14">
                    <div className="flex justify-center items-center mb-1">
                        <h1 className="font-bold text-3xl ml-2">Leads</h1>
                        <button className="bg-blue-500 text-white py-2 rounded-md w-full p-2 text-xs font-bold ">Edit Page Layout</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="button" className="inline-flex w-16 h-9 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold  text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50 flex justify-center items-center" id="menu-button" aria-expanded="false" aria-haspopup="true">
                            Cancel
                        </button>
                    </div>
                </div>
                <div className="p-2 rounded-2xl">
                    <div className="bg-cyan-500 p-2 pl-4 rounded-t-2xl"><h1 className="font-semibold text-xl text-white">Lead Image</h1></div>
                    <div className="bg-white rounded-b-2xl pt-3 pb-3 pl-4"><img src={Group381} alt className="w-12" /></div>
                </div>
                <div className="p-2 rounded-2xl">
                    <div className="bg-cyan-500 p-2 pl-4 rounded-t-2xl"><h1 className="font-semibold text-xl text-white">Lead Information</h1></div>
                    <div className="bg-white rounded-b-2xl p-8">
                        <form onSubmit={handlesubmit} className="w-4/5 ">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Name
                                    </label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Language
                                    </label>
                                    <input value={language} onChange={(e) => setLanguage(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Company
                                    </label>
                                    <input value={company} onChange={(e) => setCompany(e.target.value)} className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Title
                                    </label>
                                    <input value={tital} onChange={(e) => setTital(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Leads Source
                                    </label>
                                    <input value={leadsSource} onChange={(e) => setLeadsSource(e.target.value)} className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Leades Status
                                    </label>
                                    <input value={leadesStatus} onChange={(e) => setLeadesStatus(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Mobile No
                                    </label>
                                    <input value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="number" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        phoneNo
                                    </label>
                                    <input value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="number" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Email
                                    </label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Assigned To
                                    </label>
                                    <input value={assigned_To} onChange={(e) => setAssignedTo(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Street
                                    </label>
                                    <input value={street} onChange={(e) => setStreet(e.target.value)} className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Postal Code
                                    </label>
                                    <input value={postalCode} type="number" onChange={(e) => setPostalCode(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Country
                                    </label>
                                    <input value={country} onChange={(e) => setCountry(e.target.value)} className="appearance-none block w-full  text-md border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        City
                                    </label>
                                    <input value={city} onChange={(e) => setCity(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        State
                                    </label>
                                    <input value={state} onChange={(e) => setState(e.target.value)} className="appearance-none block w-full  text-md border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Description
                                    </label>
                                    <input value={description} onChange={(e) => setDescription(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Risk Capacity
                                    </label>
                                    <input value={risk_Capacity} onChange={(e) => setRiskCapacity(e.target.value)} className="appearance-none block w-full  text-md border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Trading Time
                                    </label>
                                    <input value={tradingTime} onChange={(e) => setTradingTime(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Trading Type
                                    </label>
                                    <input value={tradingType} onChange={(e) => setTradingType(e.target.value)} className="appearance-none block w-full  text-md border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Investment
                                    </label>
                                    <input value={investment} onChange={(e) => setInvestment(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Advisary Exp
                                    </label>
                                    <input value={advisaryExp} onChange={(e) => setAdvisaryExp(e.target.value)} className="appearance-none block w-full  text-md border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Segments
                                    </label>
                                    <input value={segments} onChange={(e) => setSegments(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Trial StartDate
                                    </label>
                                    <input value={trialStartDate} onChange={(e) => setTrialStartDate(e.target.value)} className="appearance-none block w-full  text-md border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="date" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Trial EndDate
                                    </label>
                                    <input value={trialEndDate} onChange={(e) => setTrialEndDate(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="date" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Trading yrs
                                    </label>
                                    <input value={trading_yrs} onChange={(e) => setTradingYrs(e.target.value)} className="appearance-none block w-full  text-md border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="number" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Call Back DateTime
                                    </label>
                                    <input value={call_bck_DateTime} onChange={(e) => setCallbckDateTime(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="date" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-first-name">
                                        Contact Id
                                    </label>
                                    <input value={contactId} onChange={(e) => setContactId(e.target.value)} className="appearance-none block w-full  text-md border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  tracking-wide text-gray-700 text-md mb-2" htmlFor="grid-last-name">
                                        Last Modified By
                                    </label>
                                    <input value={lastModifiedBy} onChange={(e) => setLastModifiedBy(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <button type='submit' className="h-11 font-medium bg-cyan-400 hover:bg-cyan-500 text-base text-gray-100 px-12 my-8 rounded-md w-72">
                                        submit
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
