import { toast } from 'react-toastify';

export const BACKEND_BASE_URL = "http://localhost.tcmb.gov.tr:8085/iskolik";

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }

  throw new Error("İşlem Başarısız: " + response.json);
}

export function handleError(response) {
  const responseObject = JSON.parse(response.message);
  if (responseObject.message) {
    toast(responseObject.message);
  } else if (responseObject.messages) {
    responseObject.messages.map(_message => toast.error(_message.message));
  } else {
    console.error(response);
    toast.error("Bilinmeyen bir hata oluştu");
  }
}