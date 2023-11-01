'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className={`bg-gray-100 dark:bg-[#6F8CE2] hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block mr-6`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <BsFillMoonFill />
      ) : (
        <BsFillSunFill className="dark:white" />
      )}
    </button>
  )
}
