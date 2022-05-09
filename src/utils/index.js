export function setItem(name, content) {
  localStorage.setItem(name, JSON.stringify(content));
}

export function getItem(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function removeItem(name) {
  localStorage.removeItem(name);
}
