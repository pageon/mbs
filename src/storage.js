export default class Storage {
  static get(key, defaultValue = null) {
    return JSON.parse(localStorage.getItem(key)) || defaultValue
  }

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static remove(key) {
    localStorage.removeItem(key)
  }
}
