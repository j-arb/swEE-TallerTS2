import { dataSeries } from "./dataSeries.js";
var seriesTBody = document.getElementById("series");
var promTemporadas = document.getElementById("promTemporadas");
renderSeriesInTable(dataSeries);
promTemporadas.innerHTML = calcularPromedioTemporadas(dataSeries).toString();
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td>").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
function calcularPromedioTemporadas(series) {
    console.log("Calculando promedio de temporadas");
    var suma = 0;
    series.forEach(function (serie) {
        suma += serie.seasons;
    });
    var promedio = suma / (series.length);
    return promedio;
}
