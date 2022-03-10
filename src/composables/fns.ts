export function checkIfEmpty(obj: any, key: string) {
  if (key in obj) {
    if (obj[key]) {
      return true;
    }
  }
}
