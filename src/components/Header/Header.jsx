import { MoonIcon } from '@heroicons/react/24/solid'

export const Header = () => {
  return (
    <div className={"flex h-20 bg-gray-500 justify-between items-center px-5 sm:rounded-xl sm:m-5"}>
      <span className={"text-gray-100"}>Olá, Usuário</span>
      <h1 className={"text-xl text-gray-100"}>Newsletter</h1>
      <MoonIcon className={"size-8 text-gray-100 hidden sm:block"}/>
    </div>
  )
}

