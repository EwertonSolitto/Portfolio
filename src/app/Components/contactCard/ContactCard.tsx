'use client'

import useAppContext from "@/app/hook/useAppContext";
import { ContactCardProps } from "@/app/models/interfaces";
import { FormEvent, useState } from "react";

export default function ContactCard(props: ContactCardProps) { 
  const [form, setForm] = useState({close: false, accepted: 'initial'})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const { menuButtonOpened } = useAppContext()

  async function getMessageFromFormAndSendIt(e: FormEvent) {
    e.preventDefault()

    setForm({close: true, accepted: 'loading'})

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        phone,
        message
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
    <div className={`card form-card ${props.side}`}>
      <h2>{props.title}</h2>

      <form onSubmit={getMessageFromFormAndSendIt}>
        <div aria-label="Nome">
          <label htmlFor="name">Nome</label>
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
        
        <div aria-label="email">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="email@gmail.com" 
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={form.close && true}
            autoComplete="on"
            tabIndex={menuButtonOpened}
          />  
        </div>

        <div aria-label="Telefone">
          <label htmlFor="phone">Telefone</label>
          <input 
            type="tel" 
            name="phone" 
            id="phone" 
            placeholder="11 12345-6789"
            pattern="(-*[0-9]){10,}"
            minLength={0}
            maxLength={16}
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            disabled={form.close && true}
            autoComplete="on"
            tabIndex={menuButtonOpened}
          />
        </div>
        
        <div aria-label="Mensagem">
          <label htmlFor="message">Mensagem</label>
          <textarea 
            name="message" 
            id="message" 
            cols={22} 
            rows={5} 
            placeholder="Olá, meu nome é Ewerton! Adorei seu site." 
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
          <p className='denied'>Não foi possível enviar o email. Tente novamente mais tarde.</p>
            :
          form.accepted === 'accepted' 
            && 
          <p className="accepted">Sua mensagem foi enviada com sucesso!</p>
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
            Enviar
          </button>
          }
        </div>
      </form>
    </div>
  )
}