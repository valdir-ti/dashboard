
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import useTheme from "@/app/context/useTheme"

const Header = () => {
    const { theme, setTheme } = useTheme()

    const handleTheme = () => {
      if(theme === 'light') {
          setTheme('dark')
      } else {
          setTheme('light')
      }
    }

    return (
      <div className="flex justify-between items-center px-4">
          <h2>Dashboard</h2>
          <div className="flex justify-around items-center">
            <button
                onClick={handleTheme}
                className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block mr-6"
                >
                {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
            </button>
            <h2>
              Bem vindo, Valdir
            </h2>
          </div>
      </div>
    )
}

export default Header