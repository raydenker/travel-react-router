import React from 'react'
import './FormStyle.css'

const Form = () => {
  return (
    <div className='Form'>
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" />
            <label htmlFor="">Your Phone</label>
            <input type="text" />
            <label htmlFor="">Your Email</label>
            <input type="text" />
            <label htmlFor="">Subject</label>
            <textarea name="" id="" cols="30" rows="6" placeholder='Type a short message here'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form