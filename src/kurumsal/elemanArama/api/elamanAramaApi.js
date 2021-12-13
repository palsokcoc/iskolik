import { BACKEND_BASE_URL, handleResponse, handleError } from "../../../common/globals.js";

export function getElemanlar(filter, pageNumber) {
    return fetch(BACKEND_BASE_URL + "/kullanici/arama-sonucu?" + (pageNumber && ("page=" + (pageNumber - 1))) + (filter && ("&filter=" + filter)))
        .then(handleResponse)
        .catch(handleError);
}
