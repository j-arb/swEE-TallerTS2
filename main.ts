import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";
let seriesTBody : HTMLElement = document.getElementById("series")!;
let promTemporadas : HTMLElement = document.getElementById("promTemporadas")!;
let serieInfoCard : HTMLElement = document.getElementById("serieInfo")!;

renderSeriesInTable(dataSeries);

promTemporadas.innerHTML = calcularPromedioTemporadas(dataSeries).toString();


function renderSeriesInTable(series : Serie[]) : void {
    console.log("Desplegando series");
    series.forEach((serie) => {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${serie.id}</td>
                                <td><a href="#" id="serBut${serie.id}">${serie.name}</a></td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        console.log("serBut" + serie.id.toString());
        seriesTBody.appendChild(trElement);
        // let serBut: HTMLElement = document.getElementById("serBut" + serie.id.toString())!;
        // serBut.onclick = () => {
        //     renderSerieInfo(serie.id, series);
        //     return false;
        // }
        trElement.onclick = () => {
            renderSerieInfo(serie.id, series);
            return false;
        }
    });
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

function renderSerieInfo(serieId: number, series: Serie[]) {
    let serie : Serie = null!;
    series.forEach((s) => {
        if (s.id === serieId) {
            serie = s;
        }
    })
    serieInfoCard.innerHTML =  `<img class="card-img-top" src="${serie.imageUrl}" alt="Imágen ${serie.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${serie.name}</h5>
                                    <p class="card-text">${serie.description}</p>
                                    <a href="${serie.url}" target="_blank" rel="noopener">${serie.url}</a>
                                </div>`
}