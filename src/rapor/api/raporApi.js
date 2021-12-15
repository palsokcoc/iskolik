import { BACKEND_BASE_URL, handleResponse, handleError } from "../../common/globals.js";

export function getEnCokArananOzellikler(ilkTarih, sonTarih, pageNumber) {
    return fetch(BACKEND_BASE_URL + "/rapor/en-cok-aranan-ozellikler" + (pageNumber && ("?page=" + (pageNumber - 1))) + (ilkTarih && ("&ilkTarih=" + ilkTarih)) + (sonTarih && ("&sonTarih=" + sonTarih)))
        .then(handleResponse)
        .catch(handleError);
}

export function getEnCokBasvuruYapilanIlanlar(ilkTarih, sonTarih, pageNumber) {
    return fetch(BACKEND_BASE_URL + "/rapor/en-cok-basvuru-yapilan-ilanlar" + (pageNumber && ("?page=" + (pageNumber - 1))) + (ilkTarih && ("&ilkTarih=" + ilkTarih)) + (sonTarih && ("&sonTarih=" + sonTarih)))
        .then(handleResponse)
        .catch(handleError);
}
