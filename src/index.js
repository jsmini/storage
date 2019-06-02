class Storage {
  constructor () {
      this.ls = window.localStorage;
      this.ss = window.sessionStorage;
  }

  /*-----------------localStorage---------------------*/
  /*设置localStorage*/
  setLocal(key, val) {
      var setting = arguments[0];
      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
          for(var i in setting){
              this.ls.setItem(i, JSON.stringify(setting[i]))
          }
      }else{
          this.ls.setItem(key, JSON.stringify(val))
      }
      
  }

  /*获取localStorage*/
  getLocal(key) {
      if (key) return JSON.parse(this.ls.getItem(key))
      return null;
      
  }

  /*移除localStorage*/
  removeLocal(key) {
      this.ls.removeItem(key)
  }

  /*移除所有localStorage*/
  clearLocal() {
      this.ls.clear()
  }


  /*-----------------sessionStorage---------------------*/
  /*设置sessionStorage*/
  setSession(key, val) {
      var setting = arguments[0];
      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
          for(var i in setting){
              this.ss.setItem(i, JSON.stringify(setting[i]))
          }
      }else{
          this.ss.setItem(key, JSON.stringify(val))
      }
      
  }

  /*获取sessionStorage*/
  getSession(key) {
      if (key) return JSON.parse(this.ss.getItem(key))
      return null;
      
  }

  /*移除sessionStorage*/
  removeSession(key) {
      this.ss.removeItem(key)
  }

  /*移除所有sessionStorage*/
  clearSession() {
      this.ss.clear()
  }
  
}

export default Storage;