import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

export const Users = () => {

    const data1 = {
        labels: ["Visiteurs","Utilisateur login","Utilisateur register"],
        datasets:[
            {
                label: "Nombres",
                data: [40,70,10],
                backgroundColor:[
                    "rgb(168,168,168)",
                    "rgb(251,192,125)",
                    "rgb(216,255,150)",
                ],
                hoverOffset: 0.3
            }
        ]
    }
    const options1 = {
        plugins: {
            title: {
                display: true,
                text: "Utilisateur connectés"
            },
            legend: {
                position: "bottom"
            }
        }
    }

    const data2 = {
        labels: ["Utilisareur visitant la Landing pages","Utilisateur visitant la page produit","utilisateur ajoutant un produit au panier","utilisateur validant une commande"],
        datasets:[
            {
                label: "Nombres",
                data: [40,70,10,20],
                backgroundColor:[
                    "rgb(140,140,140)",
                    "rgb(251,192,125)",
                    "rgb(216,255,150)",
                    "rgb(168,250,222)",
                ],
                hoverOffset: 0.3
            }
        ]
    }
    const options2 = {
        plugins: {
            title: {
                display: true,
                text: "Utilisateur convertis"
            },
            legend: {
                position: "bottom"
            }
        }
    }

    return(
        <>
            <div className="form-control section-container">
                <h1>Utilisateurs</h1>
                <div className="row">
                    <div className="col-6">
                        <div className="form-control">
                            <Pie data={data1} options={options1} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-control">
                            <Pie data={data2} options={options2} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}