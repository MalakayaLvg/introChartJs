import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const LineGraph = () => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "New title",
                position: "top"
            }
        }
    }
    const data = {
        labels: [
            "Mondays",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        datasets: [
            {
                label: "Steps 1",
                data: [3000, 5000, 2000, 1000, 2000, 3000, 6000],
                borderColor: "rgb(255,64,64)"
            },
            {
                label: "Steps 2",
                data: [5000, 6000, 1000, 3000, 6000, 7000, 8000],
                borderColor: "rgb(8,255,0)"
            }
        ]
    }

    return(
        <>
            <div className="CA-container">
                <div className="form-control w-50">
                    <div className="w-50">
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>

        </>
    )
}