import { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const BarChart = () => {

    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})

    const chartDatasets: 
        { 
            label: string
            data: number[]
            borderColor: string
            backgroundColor: string
            borderWidth: number
        } = { 
            label: "Vendas", 
            data: [18127, 22201, 19490, 24182, 17842, 22475, 22121], 
            borderColor: "rgb(53, 162, 235)", 
            backgroundColor: "rgb(53, 162, 235, 0.4)",
            borderWidth: 0.5
        }

    useEffect(() => {
        setChartData({
            labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            datasets: [
                chartDatasets || null
            ],
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Vendas diárias'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <>
            <div 
                className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] p-4 border rounded-lg bg-white m-auto"
            >
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart