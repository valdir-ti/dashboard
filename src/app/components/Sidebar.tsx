'use client'

import Link from 'next/link'
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'

import useTheme from "@/app/context/useTheme"

type SidebarProps = {
    children: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {

    const handleTheme = () => {
        if(theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const { theme, setTheme } = useTheme()

    return (
        <div className="flex">
            <div 
                className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between"
            >
                <div className="flex flex-col items-center">
                    <Link href="/">
                        <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                            <RxSketchLogo />
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href="/">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <RxDashboard />
                        </div>
                    </Link>
                    <Link href="/customers">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <RxPerson />
                        </div>
                    </Link>
                    <Link href="/orders">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <HiOutlineShoppingBag />
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <FiSettings />
                        </div>
                    </Link>
                    <button 
                        onClick={handleTheme}
                        className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block"
                    >
                        {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </button>
                    <Link href="/logout">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <BiLogOut />
                        </div>
                    </Link>
                </div>
            </div>
            <main className="ml-20 w-full">{children}</main>
        </div>
    )
}

export default Sidebar