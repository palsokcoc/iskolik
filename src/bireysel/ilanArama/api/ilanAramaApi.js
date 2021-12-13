import { BACKEND_BASE_URL, handleResponse, handleError } from "../../../common/globals.js";

export function getIlanlar(filter, durum, pageNumber) {
    return fetch(BACKEND_BASE_URL + "/ilan/arama-sonucu?sort=sonBasvuruTarihi,desc" + (pageNumber && ("&page=" + (pageNumber - 1))) + (filter && ("&filter=" + filter)) + (durum && ("&durum=" + durum)))
        .then(handleResponse)
        .catch(handleError);
}

export function ilanaBasvur(ilanId) {
    return fetch(BACKEND_BASE_URL + "/basvuru", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            kullaniciId: 1,
            ilanId: ilanId
        })
    });
}
