import {  useState } from 'react'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'

const ContactForm = () => {
  // states
  const serviceID = import.meta.env.VITE_SERVICE_ID
  const templateID = import.meta.env.VITE_TEMPLATE_ID
  const userID = import.meta.env.VITE_USER_ID

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        serviceID,
        templateID,
        formData,
        userID
      )
      .then(
        (response) => {
          toast.success('Message sent successfully!')
          setFormData({name: '', email: '', subject: '', message: ''})
        },
        (error) => {
          toast.error('Failed to send message. Please try again.')
        }
      )
  }

  return (
    <div>
      <Toaster position='top-center'/>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label>
          <h5>Name</h5>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <h5>Contact Email</h5>
          <input 
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <h5>Subject</h5>
          <input 
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <h5>Message</h5>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          >
          </textarea>
        </label>

        <div className="button-container">
          <button type='submit' className='hero-btn primary-btn' id='sendMessage'>Send Message</button>
        </div>
        
      </form>
    </div>
  )
}

export default ContactForm
