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

  static export() {
    let data = {}
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      data[key] = localStorage.getItem(key)
    }

    return btoa(JSON.stringify(data))
  }

  static import(data) {
    data = JSON.parse(atob(data));

    for (let key in data) {
      this.set(key, data[key]);
    }
  }
}
