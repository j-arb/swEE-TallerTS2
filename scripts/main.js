import { dataSeries } from "./dataSeries.js";
var seriesTBody = document.getElementById("series");
var promTemporadas = document.getElementById("promTemporadas");
var serieInfoCard = document.getElementById("serieInfo");
renderSeriesInTable(dataSeries);
promTemporadas.innerHTML = calcularPromedioTemporadas(dataSeries).toString();
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td><a href=\"#\" id=\"serBut").concat(serie.id, "\">").concat(serie.name, "</a></td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        console.log("serBut" + serie.id.toString());
        seriesTBody.appendChild(trElement);
        // let serBut: HTMLElement = document.getElementById("serBut" + serie.id.toString())!;
        // serBut.onclick = () => {
        //     renderSerieInfo(serie.id, series);
        //     return false;
        // }
        trElement.onclick = function () {
            renderSerieInfo(serie.id, series);
            return false;
        };
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
function renderSerieInfo(serieId, series) {
    var serie = null;
    series.forEach(function (s) {
        if (s.id === serieId) {
            serie = s;
        }
    });
    serieInfoCard.innerHTML = "<img class=\"card-img-top\" src=\"".concat(serie.imageUrl, "\" alt=\"Im\u00E1gen ").concat(serie.name, "\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                                    <p class=\"card-text\">").concat(serie.description, "</p>\n                                    <a href=\"").concat(serie.url, "\" target=\"_blank\" rel=\"noopener\">").concat(serie.url, "</a>\n                                </div>");
}
