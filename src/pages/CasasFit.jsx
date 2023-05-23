import { useEffect } from 'react'

export const Casasfit = () => {
  useEffect(() => {
    fetch('http://localhost:3000/casasfit')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  })
  return (
      <div className="flex items-center justify-center text-gray-400 bg-[#1A2238] h-screen">
        <h1 className="text-3xl">
          <strong>Casas fit page</strong>
        </h1>
      </div>    
  )
}
