import { BACKEND_BASE_URL, handleResponse, handleError } from "../../../common/globals.js";

export function getKategori(kategoriId) {
    return fetch(BACKEND_BASE_URL + "/kategori/" + kategoriId)
        .then(handleResponse)
        .catch(handleError);
}

export function getKategoriler(pageNumber) {
    return fetch(BACKEND_BASE_URL + "/kategori?sort=ad" + (pageNumber && ("&page=" + (pageNumber - 1))))
        .then(handleResponse)
        .catch(handleError);
}

export function saveKategori(kategori) {
    return fetch(BACKEND_BASE_URL + "/kategori/" + (kategori.kategoriId || ""), {
        method: kategori.kategoriId ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            ...kategori,
            // Parse authorId to a number (in case it was sent as a string).
            kategoriId: parseInt(kategori.kategoriId, 10),
        })
    });
}

export function deleteKategori(kategoriId) {
    return fetch(BACKEND_BASE_URL + "/kategori/" + kategoriId, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
    });
}
