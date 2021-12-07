import { BACKEND_BASE_URL, handleResponse, handleError } from "../../../common/globals.js";

export function getIlan(ilanId) {
    return fetch(BACKEND_BASE_URL + "/ilan/" + ilanId)
        .then(handleResponse)
        .catch(handleError);
}

export function getIlanlar(pageNumber) {
    return fetch(BACKEND_BASE_URL + "/ilan?sort=ilanId,desc&durum=Aktif" + (pageNumber && ("&page=" + (pageNumber - 1))))
        .then(handleResponse)
        .catch(handleError);
}

export function saveIlan(ilan) {
    return fetch(BACKEND_BASE_URL + "/ilan/" + (ilan.ilanId || ""), {
        method: ilan.ilanId ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            ...ilan,
            kullanici: { type: "Kurumsal", kullaniciId: 11 },
            // Parse authorId to a number (in case it was sent as a string).
            ilanId: parseInt(ilan.ilanId, 10),
        })
    });
}

export function ilanIptalEt(ilanId) {
    return fetch(BACKEND_BASE_URL + "/ilan/" + ilanId, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            durum: "IPTAL"
        })
    });
}

export function ilanYayinla(ilanId) {
    return fetch(BACKEND_BASE_URL + "/ilan/" + ilanId, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            durum: "AKTIF"
        })
    });
}
