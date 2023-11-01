'use client'

import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import Header from '@/app/components/Header'

import { data } from '../../../data/data.js'

const Customers = () => {
  return (
    <div className="bg-gray-50 min-h-screen dark:bg-[#171C2F]">
      <Header />
      <div className="p-4">
        <h2 className="mb-4 dark:text-white">Customers</h2>
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto dark:bg-[#171C2F]">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Last</span>
            <span className="hidden md:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 dark:bg-[#6F8CE2] rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 dark:bg-purple-500 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800 dark:text-white" />
                  </div>
                  <p className="pl-4">
                    {order.name.first} {order.name.last}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-white sm:text-left text-right">
                  {order.name.first}@gmail.com
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="hidden sm:flex justify-between items-center">
                  <p className="sm:text-left text-right">{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Customers
