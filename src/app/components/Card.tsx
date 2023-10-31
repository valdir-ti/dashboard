type CardProps = {
    value: string
    text: string
    percent: string
}

const Card = ({ value, text, percent }: CardProps) => {
    return (
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg dark:bg-[#171C2F]">
            <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">R${value}</p>
                <p className="text-gray-600">{text}</p>
            </div>
            <p className="bg-[#6F8CE2] flex justify-center items-center p-2 rounded-lg">
                <span className="text-white text-lg">{percent}%</span>
            </p>
        </div>
    )
}

export default Card