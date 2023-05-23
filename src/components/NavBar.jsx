import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav
    className="flex items-center justify-between flex-wrap bg-[#1A2238] py-4 lg:px-12 shadow border-solid border-b-2 border-zinc-500">
    <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-green-500 mr-16">
            <Link to="/">
                <span className="font-semibold text-2xl tracking-tight">Fit<span className='text-orange-500'>Food</span></span>
            </Link>
        </div>
        <div className="block lg:hidden">
            <button
                id="nav"
                className="flex items-center px-3 py-2 border-2 rounded text-green-500 border-none hover:text-green-500">
                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
    </div>

    <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold text-green-500 lg:flex-grow">
            <Link to="/"
               className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-orange-700 mr-2">
                Home
            </Link>
            <Link to="/casasfit"
               className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-orange-700 mr-2">
                Casas Fit
            </Link>
            <Link to="/users"
               className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-orange-700 mr-2">
                Usuários
            </Link>
        </div>
        <div className="flex ">
            <a href="#"
               className="block text-md px-4 py-2 rounded text-orange-500 ml-2 font-bold border-solid border-2 border-orange-500 hover:text-white mt-4 hover:bg-orange-700 lg:mt-0">Cadastrar</a>

            <a href="#"
               className=" block text-md px-4  ml-2 py-2 rounded text-orange-500 font-bold border-solid border-2 border-orange-500 hover:text-white mt-4 hover:bg-orange-700 lg:mt-0">Fazer LogIn</a>
        </div>
    </div>

</nav>
  )
}