import "../css/products.css"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale,BarElement, Title, Tooltip, Legend);

const Products = () => {
    const data1 = {
        labels: [
            "Product 1",
            "Product 2",
            "Product 3",
        ],
        datasets: [
            {
                label: "Nombres de vue",
                axis: "y",
                data: [100, 90, 80],
                backgroundColor: [
                    "rgb(255,122,122)",
                ]
            },
            {
                label: "Nombres de ventes",
                axis: "y",
                data: [30, 40, 10],
                backgroundColor: [
                    "rgb(255,212,132)",
                ]
            }
        ]
    }

    const data2 = {
        labels: [
            "Product 1",
            "Product 2",
            "Product 3",
        ],
        datasets: [
            {
                label: "Note",
                axis: "y",
                data: [100, 90, 80],
                backgroundColor: [
                    "rgb(122,204,255)",
                ]
            },
            {
                label: "Nombre de commentaire",
                axis: "y",
                data: [30, 40, 10],
                backgroundColor: [
                    "rgb(132,255,175)",
                ]
            }
        ]
    }

    const options1 = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Produits les plus vues et vendues",
                position: "top"
            }
        }
    }

    const options2 = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Produits les populaires",
                position: "top"
            }
        }
    }

    return (
        <>
            <div className="pruducts-container">
                <h1>Les produits</h1>
                <div className="d-flex">
                    <div className="form-control w-50">
                            <Bar data={data1} options={options1} />
                    </div>
                    <div className="form-control w-50">
                            <Bar data={data2} options={options2} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products;