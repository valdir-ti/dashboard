import { HiOutlineShoppingBag } from 'react-icons/hi'

import { data } from '../../../../data/data.js'

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-auto dark:bg-[#171C2F]">
      <h1>Vendas Recentes</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer dark:bg-[#6F8CE2]"
          >
            <div className="bg-purple-100 dark:bg-purple-500 rounded-lg p-3">
              <HiOutlineShoppingBag className="text-purple-800 dark:text-white" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">R${order.total}</p>
              <p className="text-gray-400 text-sm dark:text-white">
                {order.name.first} - ({order.method})
              </p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentOrders
