'use client'

import { ContactCardProps } from "@/app/models/interfaces";
import { FormEvent, useState } from "react";

export default function ContactCard(props: ContactCardProps) { 
  const [form, setForm] = useState({close: false, accepted: ''})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  async function getMessageFromFormAndSendIt(e: FormEvent) {
    e.preventDefault()

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
        <div>
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
          />
        </div>
        
        <div>
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
          />  
        </div>

        <div>
          <label htmlFor="phone">Telefone</label>
          <input 
            type="tel" 
            name="phone" 
            id="phone" 
            placeholder="11 12345-6789" 
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            disabled={form.close && true}
          />
        </div>
        
        <div>
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
          />
        </div>

        <div className="button-div">
          <button type="submit" disabled={form.close && true}>Enviar</button>
        </div>
      </form>
    </div>
  )
}