import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale,BarElement, Title, Tooltip, Legend);

export const BarChart = () => {
    const options = {}
    const data = {
        labels: ["Rent","Groceries","Utilities","Entertainment","Transportation"],
        datasets: [
            {
                label: "Expenses",
                data: [1200, 300, 150, 180, 100],
                backgroundColor: [
                    "rgba(246,126,126,0.4)",
                    "rgb(246,240,126,0.4)",
                    "rgb(126,246,228,0.4)",
                    "rgb(206,126,246,0.4)",
                    "rgb(109,191,61,0.4)",
                ],
                borderColor: [
                    "rgba(246,126,126,1)",
                    "rgb(246,240,126)",
                    "rgb(126,246,228)",
                    "rgb(206,126,246)",
                    "rgb(109,191,61)",
                ],
                borderWidth: 1,
            }
        ]
    }

    return(
        <>
            <Bar data={data} options={options} />
        </>
    )
}