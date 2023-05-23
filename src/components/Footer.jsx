export const Footer = () => {
  return (
      <footer aria-label="Site Footer" className="bg-blue-950">
    <div
      className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="text-green-500">
            <span className="font-bold text-4xl tracking-tight">Fit<span className='text-orange-500'>Food</span></span>
          </div>

          <p className="max-w-xs mt-4 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
            cupiditate quae nam molestias.
          </p>

          <ul className="flex gap-6 mt-8">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                {/* img */}
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>

                {/* img */}
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>

                {/* img */}
              </a>
            </li>
          </ul>
        </div>

        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
        >
          <div>
            <p className="font-medium text-gray-400">Services</p>

            <nav aria-label="Footer Navigation - Services" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Assinaturas
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Cardápios
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Entregas
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-400">Empresa</p>

            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Sobre Nós
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Conheça a equipe
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-400">Links de Ajuda</p>

            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Contato
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    FAQs
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Cancelamento de planos
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-400">Políticas</p>

            <nav aria-label="Footer Navigation - Legal" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Accessibilidade
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Política de devolução
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Política de reembolso
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Política de privacidade
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500">
        &copy; 2023. Fit food. Todos os direitos reservados.
      </p>
    </div>
  </footer>
  )
}