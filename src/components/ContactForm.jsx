import "./ContactFormStyles.css"

import React from 'react'

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea name="" id="" placeholder="Meassage" rows="4">
      </textarea>
      <button>Send Message</button>
    </form>
    </div >
  )
}

export default ContactForm