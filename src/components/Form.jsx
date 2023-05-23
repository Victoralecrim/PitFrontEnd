import { useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types'

const Form = ({onEdit}) => {
  const ref = useRef()

  useEffect(()=> {
    if(onEdit) {
      const user = ref.current;

      user.NOME.value = onEdit.NOME;
      user.CPF.value = onEdit.CPF;
      user.TELEFONE.value = onEdit.TELEFONE;
      user.EMAIL.value = onEdit.EMAIL;
      user.ENDERECO.value = onEdit.ENDERECO;
    }
  })
  return (
    <>
      <div ref={ref} className="flex bg-zinc-500 p-5 items-end gap-2.5 flex-wrap shadow-[0_0_5px_rgba(204, 204, 204,0.3)] rounded-md">
        <div className='flex flex-col'>
          <label htmlFor="">Nome</label>
          <input name='nome' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">CPF</label>
          <input name='cpf' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Telefone</label>
          <input name='telefone' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Email</label>
          <input name='email' type='email' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Endereço</label>
          <input name='endereco' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <button className='p-2.5 rounded-md border-none bg-orange-600 text-white h-10' type='submit'>Enviar</button>
      </div>
    </>
  )
}

export default Form;

Form.propTypes = {
  onEdit: PropTypes.any
}
