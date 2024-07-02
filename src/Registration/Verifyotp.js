import React from 'react'

export default function Verifyotp() {
  return (
   <div className="bg-gradient-to-r from-cyan-400 to-sky-400 min-h-screen flex items-center justify-center">
  <div className="hidden md:flex w-2/3 items-center justify-center">
    <div className="bg-white rounded-lg w-2/3 p-6">
      <div className="flex justify-center mb-4">
        <img src="/images/image2.svg" alt="My SVG" width={100} height={100} />
      </div>
      <div className="flex justify-center mb-4">
        <img src="/images/verify.png" alt="Image" width={500} height={250} />
      </div>
      <div className="flex items-center justify-center mb-2">
        <svg width={36} height={46} viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 23C9.94113 23 18 12F.7025 18 0C18 12.7025 26.0589 23 36 23C26.0589 23 18 33.2975 18 46C18 33.2975 9.94113 23 0 23Z" fill="#02A7CC" />
        </svg>
        <div className="font-extrabold text-slate-900 text-4xl ml-2">Hello, Igniculuss</div>
        <img src="/images/hand.png" alt="Hand" width={50} height={50} className="ml-2" />
      </div>
      <div className="text-center text-base leading-6 text-slate-500 mb-10">
        Skip repetitive and manual sales-marketing tasks. Get highly productive through automation and save tons of time!
      </div>
    </div>
  </div>
  <div className="w-1/3  min-h-screen flex items-center bg-white justify-center py-6 ">
    <div className=" w-2/3 max-w-container ">
      <a href className="mt-12 flex items-center gap-1">
        <svg width={32} height={40} viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C8.83656 20 16 11.0457 16 0C16 11.0457 23.1634 20 32 20C23.1634 20 16 28.9543 16 40C16 28.9543 8.83656 20 0 20Z" fill="#282828" />
        </svg>
        <span className="text-slate-950 font-bold text-2xl py-6">
          Verify Your Sign-up
        </span>
      </a>
      <div className="text-slate-800 text-sm">
        Enter the one-time password sent to your Email ID: <span id="userEmail" />
      </div>
      <div className="mx-auto">
        <form className="grid space-y-6" id="myForm">
          <div className="flex justify-end py-2">
            <div className="text-right text-cyan-600 no-underline">
              <a href="/change">Change</a>
            </div>
          </div>
          <input type="otp" required className="h-10 rounded-md px-3  border text-xs focus:outline-none" style={{margin: 0, border: '"1px solid #D5D5D5"'}} placeholder="XXX XXX" maxLength="{6}" id="otp" />
          <div className="flex justify-between m-0 pb-12">
            <div className="text-left text-slate-950 cursor-pointer " id="resendButton">
              Resend
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
            <div id="otpSentMessage" style={{display: 'none', color: 'green', marginTop: 10}}>
              OTP has been sent!
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}
