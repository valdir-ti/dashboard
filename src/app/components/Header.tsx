import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <h2 className="dark:text-white">Dashboard</h2>
      <div className="flex justify-around items-center">
        <ThemeSwitcher />
        <h2 className="dark:text-white">Bem vindo, Valdir</h2>
      </div>
    </div>
  )
}

export default Header
