module.exports = {
  'Test1: Login - Credenciales Correctas' : function (browser) {
    //llama al archivo login.js de la carpeta "page-object"
      const login = browser.page.login();
      login.navigate().maximizeWindow().loginSuccess('tsoft', 'egacitua', 'Admin1')
  },
  'Test2: Login - Credenciales Incorrectas' : function (browser) {
    const login = browser.page.login();
    login.navigate().loginFail('tsoft3', 'egacitua', 'Admin1')
  }
}