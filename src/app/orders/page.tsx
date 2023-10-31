'use client'

import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'

import Header from '@/app/components/Header'

import { data } from '../../../data/data.js'

const Orders = () => {
    return (
        <main className="bg-gray-50 min-h-screen dark:bg-[#171c2f]">
            <Header />
            <div className='p-4'>
                <h2 className='mb-4 dark:text-white'>Orders</h2>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto dark:bg-[#171c2f]'>
                    <div className='my-3 p-2 grid md:grid-cols-4 scroll-m-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span className='mb-4'>Order</span>
                        <span className='sm:text-left text-right'>Status</span>
                        <span className='hidden md:grid'>Last Order</span>
                        <span className='hidden md:grid'>Method</span>
                    </div>
                    <ul>
                        {data.map((order, id) => (
                            <li 
                                key={id}
                                className='bg-gray-50 dark:bg-[#6F8CE2] hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                            >
                                <div className='flex items-center'>
                                    <div className='bg-purple-100 dark:bg-purple-500 p-3 rounded-lg'>
                                        <FaShoppingBag className='text-purple-800 dark:text-white'/>
                                    </div>
                                    <div className='pl-4'>
                                        <p className='text-gray-800 dark:text-white font-bold'>R${order.total.toLocaleString()}</p>
                                        <p className='text-gray-800 dark:text-white font-sm'>{order.name.first}</p>
                                    </div>                                    
                                </div>
                                <p className='text-gray-800 sm:text-left text-right'>
                                    <span className={
                                        order.status === 'Processing' ? 'bg-green-200 p-2 rounded-lg' : 
                                        order.status === 'Completed' ? 'bg-blue-200 p-2 rounded-lg' :
                                        'bg-yellow-200 p-2 rounded-lg'
                                    }>{order.status}</span>
                                </p>
                                <p className='hidden md:flex'>{order.date}</p>
                                <div className='hidden sm:flex justify-between items-center'> 
                                    <p className='sm:text-left text-right'>{order.method}</p>
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Orders