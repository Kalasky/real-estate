import React, { useState, useEffect } from 'react'
import '../index.scss'

const EmailForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    if (status === 'Email sent successfully') {
      const timer = setTimeout(() => {
        setStatus('')
      }, 5000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [status])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    try {
      setStatus('Sending...')

      setStatus('Email sent successfully')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('There was an error while sending the email:', error)
    } finally {
      setIsSending(false)
    }
  }

  const buttonText = () => {
    if (isSending) {
      return 'Sending...'
    } else if (status === 'Email sent successfully') {
      return status
    } else {
      return 'SUBMIT'
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="field required half">
          <label htmlFor="name" className="text-black">
            Name
          </label>
          <input
            className="feedback-input"
            placeholder="Name"
            id="name"
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field required half">
          <label htmlFor="email" className="text-black">
            E-mail
          </label>
          <input
            className="feedback-input"
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="message" className="text-black">
            Message
          </label>
          <textarea
            className="feedback-input"
            placeholder="Message"
            id="message"
            cols={50}
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <input type="submit" value={buttonText()} />
      </form>
    </div>
  )
}

export default EmailForm
