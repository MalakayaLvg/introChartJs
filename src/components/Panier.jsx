import "../App.css";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

export const Panier = () => {

    const data1 = {
        labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        datasets: [
            {
                label: "Sommes moyenne panier (€)",
                data: [10,20,27,18,29,17,16],
                borderColor: "rgb(117,218,206)"
            }
        ]
    }
    const options1 = {
        plugins: {
            legend: {
                position: "bottom"
            }
        },
        title: {
            display: true,
            text: "Sommes moyen par panier"
        }
    }

    const data2 = {
        labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        datasets: [
            {
                label: "Panier créer",
                data: [10,20,27,18,29,17,16],
                borderColor: "rgb(137,255,255)"
            },
            {
                label: "Panier valider",
                data: [2,4,23,8,19,9,10],
                borderColor: "rgb(101,255,104)"
            },
            {
                label: "Panier Abandonnée",
                data: [5,10,3,20,1,15,12],
                borderColor: "rgb(255,101,101)"
            },
        ]
    }
    const options2 = {
        plugins: {
            title: {
                display: true,
                text: "Actions sur les paniers"
            },
            legend: {
                position: "bottom"
            }
        }
    }

    const data3 = {
        labels: ["Panier abandonées","Panier Validés"],
        datasets: [
            {
                label: "Nombres",
                data: [90,120],
                backgroundColor: [
                    "rgb(86,232,93)",
                    "rgb(255,113,113)",
                ],
                hoverOffset: 0.3
            }
        ]
    }
    const options3 = {
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Pourcentage des actions sur les paniers"
            }
        }
    }

    return(
        <>
            <div className="form-control section-container">
                <h1>Panier</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="form-control">
                            <Line data={data1} options={options1} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-control">
                            <Line data={data2} options={options2} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-control">
                            <Pie data={data3} options={options3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}