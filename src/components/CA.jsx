import "../App.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CA = () => {
    const data1 = {
        labels: [
            "jan",
            "fev",
            "mars",
            "avr",
        ],
        datasets: [
            {
                label: "ventes",
                data: [
                    10,
                    20,
                    28,
                    13
                ],
                borderColor: "rgb(8,255,0)"
            },
            {
                label: "dépenses",
                data: [
                    5,
                    9,
                    28,
                    17,
                ],
                borderColor: "rgb(255,64,64)"
            },
            {
                label: "Chiffre d'affaire net",
                data: [
                    3,
                    7,
                    9,
                    7,
                ],
                borderColor: "rgb(101,172,250)"
            },

        ]

    }

    const data2 = {
        labels: [
            "jan",
            "fev",
            "mars",
            "avr",
        ],
        datasets: [
            {
                label: "ventes",
                data: [
                    10,
                    20,
                    28,
                    13
                ],
                borderColor: "rgb(8,255,0)"
            },
            {
                label: "dépenses",
                data: [
                    5,
                    9,
                    28,
                    17,
                ],
                borderColor: "rgb(255,64,64)"
            },
            {
                label: "Chiffre d'affaire net",
                data: [
                    3,
                    7,
                    9,
                    7,
                ],
                borderColor: "rgb(101,172,250)"
            },

        ]

    }

    const options1 = {
        plugins: {
            title: {
                display: true,
                text: "Cette année"
            },
            legend : {
                position: "bottom"
            }
        }
    }

    return(
        <>
            <h1>Chiffre d'affaire</h1>
            <div className="CA-container">
                <div className="d-flex">
                    <div className="form-control w-50">
                        <Line data={data1} options={options1} />
                    </div>
                    <div className="form-control w-50">
                        <Line data={data2} options={options1} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default CA;