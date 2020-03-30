module.exports = {
    'Test1: Crear instancia' : function (browser) {
        /*llama al archivo login.js de la carpeta "page-object"*/
        const login = browser.page.login();
        login.navigate().maximizeWindow().loginSuccess('tsoft', 'egacitua', 'Admin1')
    },
    'Test2: Click en menú Infra' : function (browser) {
        const crearInstancia = browser.page.crearInstancia();
        crearInstancia.clickMenuInfra('Standard_D2s_v3 | 2vCPU | 8GB','Ubuntu 18.04 server 64bit','VmwareEG','egacitua','Tsoft1',1)
    },
    'Se valida si la instancia Falla' : function (browser) {
        const validateFailInstance = browser.page.crearInstancia();
        validateFailInstance.validateInstanceFail()
     },
     'Se ingresa valores a modal para instalar apps' : function (browser) {
        const setValueModal = browser.page.crearInstancia();
        setValueModal.setModalValue('egacitua','Tsoft1')
     },
    'esto es una broma' : (this.demoTest = function (browser) {
        browser.windowHandles(function(result) {
          var newWin = result.value[1];
          var mainWin = result.value[0];
            browser.switchWindow(newWin)
            .useXpath()
            .waitForElementPresent('//h2[contains(text(), "Jira setup")]', 60000)
            .closeWindow()
            .switchWindow(mainWin);
        });
     }),
     'Se elimina la maquina' : function (browser) {
         const deleteInstance = browser.page.crearInstancia();
         deleteInstance.eliminarInstancia()
     }
}
