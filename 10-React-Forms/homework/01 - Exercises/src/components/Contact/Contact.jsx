import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export function validate(inputs) {
  let errors = {}
  if (!inputs.name) {errors.name = "Se requiere un nombre"};
  if (!regexEmail.test(inputs.email)) {errors.email = "Debe ser un correo electrónico"};
  if (inputs.phone <= 0) {errors.phone="Sólo números positivos"};
  if (inputs.subject.length === 0 ) {errors.subject = "Se requiere un asunto"};
  if (inputs.message.length === 0) {errors.message = "Se requiere un mensaje"};

  return errors;
}

export default function Contact () {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject: "",
    message: ""
 })
 const [errors, setErrors] = React.useState({
  name: '',
    email: '',
    phone: "",
    subject: "",
    message: ""
 })
 function handleChange(e) {
  setErrors(validate({...inputs,
    [e.target.name]: e.target.value}))

  setInputs({...inputs,
    [e.target.name]: e.target.value})
  
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      window.alert("Datos completos");
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: "",
        message: ""
     })
     setErrors(validate({
      name: '',
        email: '',
        phone: "",
        subject: "",
        message: ""
     }))
    }
    else window.alert("Debe llenar todos los campos")
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input 
        className={errors.name && "warning"} 
        name="name" 
        placeholder="Escribe tu nombre..." 
        type="text" 
        value={inputs.name} 
        onChange={handleChange}
      ></input>
      {errors.name && <p className='danger'>{errors.name}</p>}

      <br></br>

      <label>Correo Electrónico:</label>
      <input 
        className={errors.email && "warning"} 
        name="email"
        placeholder="Escribe tu email..." 
        type="text" 
        value={inputs.email}
        onChange={handleChange}>
      </input>
      {errors.email && <p className='danger'>{errors.email}</p>}

      <br></br>

      <label>Teléfono:</label>
      <input 
        className={errors.phone && "warning"}
        name="phone" 
        placeholder="Escribe un teléfono..." 
        type="number" 
        value={inputs.phone}
        onChange={handleChange}>
      </input>
      {errors.phone && <p className='danger'>{errors.phone}</p>}

      <br></br>

      <label>Asunto:</label>
      <input 
        className={errors.subject && "warning"}
        name="subject" 
        placeholder='Escribe el asunto...' 
        type="text" 
        value={inputs.subject}
        onChange={handleChange}>
      </input>
      {errors.subject && <p className='danger' >{errors.subject}</p>}
      <br></br>

      <label>Mensaje:</label>
      <textarea 
        className={errors.message && "warning"}
        name="message" placeholder='Escribe tu mensaje...' 
        type="text" 
        value={inputs.message}
        onChange={handleChange}>
      </textarea>
      {errors.message && <p className='danger'>{errors.message}</p>}

      <br></br>

      <button type="submit">Enviar</button>
      
    </form>
  </div>
  )
}
