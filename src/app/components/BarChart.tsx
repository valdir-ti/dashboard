import { useState, useEffect, useMemo } from 'react'
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { useTheme } from 'next-themes'
import { getLiteralObjectValue } from '@/utils/getLiteralObjectValue'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

type chartDatasetProps = [{
    label: string
    data: number[]
    borderColor: string
    backgroundColor: string
    borderWidth: number
}]

const labels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

const BarChart: React.FC<{}> = () => {

    const { theme } = useTheme()
    
    const backgroundColor = useMemo(() => {
        return {
            light: '#6F8CE2',
            dark: '#6F8CE2'
        }
    }, [])

    const [chartData, setChartData] = useState<any>({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})

    const chartDatasets = useMemo(() => [{
        label: "Vendas", 
        data: [18127, 22201, 19490, 24182, 17842, 22475, 22121], 
        borderColor: "rgb(53, 162, 235)", 
        backgroundColor: getLiteralObjectValue(backgroundColor, theme),
        borderWidth: 0.5
    }] as chartDatasetProps, [backgroundColor,theme])

    useEffect(() => {
        setChartData({
            labels: labels,
            datasets: chartDatasets,
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
    }, [chartDatasets])

    return (
        <>
            <div 
                className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] p-4 border rounded-lg bg-white m-auto dark:bg-[#171C2F]"
            >
                <Bar redraw data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart