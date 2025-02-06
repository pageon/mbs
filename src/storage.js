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
      if (key === 'qodana-storage.v1.') continue
      data[key] = localStorage.getItem(key)
    }

    console.debug(data, JSON.parse(atob(btoa(JSON.stringify(data)))))
    return btoa(JSON.stringify(data))
  }

  static import(data) {
    data = JSON.parse(atob(data));

    for (let key in data) {
      localStorage.setItem(key, data[key]);
    }
  }
}
