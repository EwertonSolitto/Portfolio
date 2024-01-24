'use client'

import useAppContext from "@hook/useAppContext";
import { FormEvent, useState } from "react";

import portugueseData from '@json/portuguese/contact.json';
import englishData from '@json/english/contact.json';

export default function Contact() { 
  const [form, setForm] = useState({close: false, accepted: 'initial'})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const { menuButtonOpened, isPortuguese } = useAppContext()

  const {inputs, responses, sendButton, title} = isPortuguese ? portugueseData : englishData

  async function getMessageFromFormAndSendIt(e: FormEvent) {
    e.preventDefault()

    setForm({close: true, accepted: 'loading'})

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        phone,
        message,
        isPortuguese
      }),
      headers: {
        'content-type': 'application/json',
      }
    })

    if (res.status === 200) {
      setForm({close: true, accepted: 'accepted'})
    } else {
      setForm({close: false, accepted: 'denied'})
    }
  }
  
  return (
    <section className="contact">
      <div className="card form-card left">
        <h2>{title}</h2>

        <form onSubmit={getMessageFromFormAndSendIt}>
          <div aria-label={inputs.name.name}>
            <label htmlFor="name">{inputs.name.name}</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Ewerton Solitto"
              required 
              value={name} 
              onChange={e => setName(e.target.value)}
              disabled={form.close && true}
              autoComplete="on"
              tabIndex={menuButtonOpened}
            />
          </div>
          
          <div aria-label="Email">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="email@email.com" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={form.close && true}
              autoComplete="on"
              tabIndex={menuButtonOpened}
            />  
          </div>

          <div aria-label={inputs.phone.name}>
            <label htmlFor="phone">{inputs.phone.name}</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              placeholder="11 12345-6789"
              minLength={0}
              maxLength={16}
              required
              pattern="[0-9\s]{10,16}"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              disabled={form.close && true}
              autoComplete="on"
              tabIndex={menuButtonOpened}
            />
          </div>
          
          <div aria-label={inputs.message.name}>
            <label htmlFor="message">{inputs.message.name}</label>
            <textarea 
              name="message" 
              id="message" 
              cols={22} 
              rows={5} 
              placeholder={inputs.message.placeholder}
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
              disabled={form.close && true}
              tabIndex={menuButtonOpened}
            />
          </div>

          <div className="button-div">
            {
            form.accepted === 'denied' 
              ?
            <p className='denied'>{responses.denied}</p>
              :
            form.accepted === 'accepted' 
              && 
            <p className="accepted">{responses.accepted}</p>
            }
            {
            form.accepted === 'loading' 
              ? 
            <button type="submit" disabled={form.close && true}>
              <div className="loadingio-spinner-rolling-srj2vfqky4">
                <div className="ldio-6mfebsyn19v">
                  <div></div>
                </div>
              </div>
            </button> 
            : 
            <button 
              type="submit" 
              disabled={form.close && true} 
              className={form.accepted === 'accepted' ? 'hidden' : ''} 
              tabIndex={menuButtonOpened}
            >
              {sendButton}
            </button>
            }
          </div>
        </form>
      </div>
    </section>
  )
}