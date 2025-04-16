import React from 'react'

const Contact = () => {
  return (
    <>
    <h2>Contact Page</h2>

    <input type="text" placeholder="name" className="border border-solid border-gray-500 rounded-md m-2" />
    <input type="text" placeholder="last_name" className="border border-solid border-gray-500 rounded-md m-2" />
    <button className="border border-solid border-gray-500 rounded-md px-2 font-thin bg-green-400 text-black" >Submit</button>
    </>
  )
}

export default Contact