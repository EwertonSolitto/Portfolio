'use client'

import useAppContext from "@hook/useAppContext";
import { useState } from "react";
import { useForm } from "react-hook-form";

import portugueseData from '@json/portuguese/contact.json';
import englishData from '@json/english/contact.json';
import FormResponseData from "@/models/types/FormResponseData";


export default function Contact() { 
  const [ form, setForm ] = useState({close: false, accepted: 'initial'})
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  })
  const { menuButtonOpened, isPortuguese } = useAppContext()

  const {inputs, responses, sendButton, title} = isPortuguese ? portugueseData : englishData

  async function getMessageFromFormAndSendIt(data: FormResponseData) {

    setForm({close: true, accepted: 'loading'})

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        data,
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

        <form onSubmit={handleSubmit((data) => {getMessageFromFormAndSendIt(data)})}>
          <div aria-label={inputs.name.name}>
            <label htmlFor="name">{inputs.name.name}</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Ewerton Solitto"
              required 
              {...register('name', {required: true})}
              disabled={form.close && true}
              autoComplete="on"
              tabIndex={menuButtonOpened}
            />
          </div>
          
          <div aria-label="Email">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="email@email.com" 
              required
              {...register('email', {required: true})}
              disabled={form.close && true}
              autoComplete="on"
              tabIndex={menuButtonOpened}
            />  
          </div>

          <div aria-label={inputs.phone.name}>
            <label htmlFor="phone">{inputs.phone.name}</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="11 12345-6789"
              minLength={0}
              maxLength={16}
              required
              pattern="[0-9\s]{10,16}"
              {...register('phone', {required: true})}
              disabled={form.close && true}
              autoComplete="on"
              tabIndex={menuButtonOpened}
            />
          </div>
          
          <div aria-label={inputs.message.name}>
            <label htmlFor="message">{inputs.message.name}</label>
            <textarea
              id="message" 
              cols={22} 
              rows={5} 
              placeholder={inputs.message.placeholder}
              required
              {...register('message', {required: true})}
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