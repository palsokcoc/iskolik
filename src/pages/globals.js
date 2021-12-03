export const BACKEND_BASE_URL = "http://localhost.tcmb.gov.tr:8085/iskolik";

export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    debugger;
    const error = await response.text();
    throw new Error(error);
  }
  debugger;
  throw new Error("Network response was not ok: " + response.json);
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}