/**
 * Clave utilizada para almacenar los datos en el LocalStorage
 * Se usa para la agenda de contactos
 */
export const LOCAL_STORAGE_KEY = 'agenda_telefonica';

/**
 * Guarda la lista de contactos en el LocalStorage
 * @param {Array} contacts - Lista de contactos a guardar
 */
export function saveContactsToStorage(contacts) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}

/**
 * Obtiene la lista de contactos desde el LocalStorage
 * @returns {Array} Lista de contactos o arreglo vacío si no hay datos
 */
export function getContactsFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}