import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement} from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieGraph = () => {
    const options = {}
    const data = {
        labels: ["Facebook","Instagram","TikTok","Twitter"],
        datasets: [
            {
                label: "Time spent",
                data: [120, 40, 30, 90],
                backgroundColor: [
                    "rgba(255,124,38,0.5)",
                    "rgba(168,255,38,0.5)",
                    "rgba(38,255,222,0.5)",
                    "rgba(157,38,255,0.5)",
                ],
                hoverOffset: 0.4
            }
        ]
    }

    return(
        <>
            <Pie data={data} options={options} />
        </>
    )
}