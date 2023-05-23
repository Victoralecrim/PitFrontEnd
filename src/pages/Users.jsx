import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Form from '../components/Form'
import Table from '../components/Table'
import axios from 'axios'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try{
      const res = await axios.get('http://localhost:3000/users');
      setUsers(res.data);
    } catch(error){
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers]); 
   
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-[#1A2238] h-screen">
      <h1 className='text-orange-500'><strong>USUÁRIOS</strong></h1>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
      <Table users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
    </div>
  )
}
