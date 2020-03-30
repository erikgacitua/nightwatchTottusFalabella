module.exports = {
    'Test1: Login - Credenciales Incorrectas' : function (browser) {
        let screenshotLoginFail = browser.globals.screenshotLoginNoOk
        const login = browser.page.LoginPage();
        login.navigate().loginFail(screenshotLoginFail)
    },
    
    'Validación nuevo tab' : (this.demoTest = function (browser) {
        browser.windowHandles(function(result) {
          var newWin = result.value[1];
          var mainWin = result.value[0];
            browser.switchWindow(newWin)
            .useXpath()
            .waitForElementVisible('//p[contains(text(), "Pimienta")]', "Ingrediente PIMIENTA visible")
            .waitForElementVisible('//*[@id="hero"]/div/div/div[3]/div[2]/div[2]/p[6]', "Ingrediente OREGANO visible")
            .closeWindow()
            .switchWindow(mainWin);
        });
     })
    
    /*,
    'Test2: Login - Autenticación Correcta' : function (browser) {
        browser.url(browser.launchUrl)
        let domain = browser.globals.domainT
        let usser = browser.globals.usser
        let pass = browser.globals.password
        let screenLogin = browser.globals.screenshotLogin
        let screenTitle = browser.globals.screenshotTitleHome

        const global = browser.page.LoginPage()
        global.navigate().login(domain, usser, pass, screenLogin, screenTitle)
    }*/
}