import { BACKEND_BASE_URL, handleResponse, handleError } from "../../../common/globals.js";

export function getBasvurular(pageNumber) {
    return fetch(BACKEND_BASE_URL + "/kullanici/1/basvuru/?sort=basvuruTarihi,desc" + (pageNumber && ("&page=" + (pageNumber - 1))))
        .then(handleResponse)
        .catch(handleError);
}

export function basvuruIptalEt(basvuruId) {
    return fetch(BACKEND_BASE_URL + "/basvuru/" + basvuruId, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            durum: "IPTAL"
        })
    });
}

