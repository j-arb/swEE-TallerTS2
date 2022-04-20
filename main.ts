import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";
let seriesTBody : HTMLElement = document.getElementById("series")!;
let promTemporadas : HTMLElement = document.getElementById("promTemporadas")!;

renderSeriesInTable(dataSeries);

promTemporadas.innerHTML = calcularPromedioTemporadas(dataSeries).toString();

function renderSeriesInTable(series : Serie[]) : void {
    console.log("Desplegando series");
    series.forEach((serie) => {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${serie.id}</td>
                                <td>${serie.name}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTBody.appendChild(trElement);
    })
}

function calcularPromedioTemporadas(series: Serie[]) : number {
    console.log("Calculando promedio de temporadas")
    let suma: number = 0;
    series.forEach((serie) => {
        suma += serie.seasons;
    });
    let promedio : number = suma / (series.length);
    return promedio;
}