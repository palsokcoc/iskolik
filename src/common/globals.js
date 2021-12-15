import { toast } from 'react-toastify';
import moment from 'moment';

export const BACKEND_BASE_URL = "http://127.0.0.1:8085/iskolik";
export const DATE_FORMAT = "DD MMMM YYYY";
export const ISO_DATE_FORMAT = "YYYY-MM-DD";

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else /*if (response.status >= 400 && response.status < 500)*/ {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }

  //debugger;
  //throw new Error("İşlem Başarısız: " + response.json);
}

export function handleError(response) {
  debugger;
  const responseObject = JSON.parse(response.message);
  if (responseObject.message) {
    toast(responseObject.message);
  } else if (responseObject.messages) {
    responseObject.messages.map(_message => toast.error(_message.message));
  } else if (responseObject.errors) {
    responseObject.errors.map(_error => toast.error(_error.msg));
  } else {
    console.error(response);
    toast.error("Bilinmeyen bir hata oluştu");
  }
}

export function fixTimeZoneOffset(date) {
  if (!date)
    return "";

  const _date = date.toDate();
  return new Date(_date.getTime() - (_date.getTimezoneOffset() * 60000));
}

export function isTodayOrFutureDate(date) {
  if (!date)
    return false;
  const yesterday = moment().subtract(1, 'day');
  return date.isAfter(yesterday);
}

export function isTodayOrPastDate(date) {
  if (!date)
    return false;
  const tomorrow = moment().add(1, 'day');
  return date.isBefore(tomorrow);
}
