import { ContactCardProps } from "@/app/models/interfaces";

export default function ContactCard(props: ContactCardProps ) {
  return (
    <div className={`card form-card ${props.side}`}>
      <h2>{props.title}</h2>

      <form action="">
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="phone">Telefone</label>
          <input type="tel" name="phone" id="phone"  />
        </div>
        
        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea name="message" id="message" cols={22} rows={5} />
        </div>

        <div className="button-div">
          <button>Enviar</button>
        </div>
      </form>
    </div>
  )
}