//Funciones
const loginOk = { 
    loginSuccess: function(domain, usser, pass) {
        return this.setValue('@inputDomain', domain)
        .setValue('@inputUsser', usser)
        .setValue('@inputPass', pass)
        .click('@btnLogin')
        .pause(1000)
        .assert.visible('@spanBienvenido')
        .pause(1000)
    }
}

const loginNoOk = { 
loginFail: function(domain, usser, pass) {
    return this.setValue('@inputDomain', domain)
    .setValue('@inputUsser', usser)
    .setValue('@inputPass', pass)
    .click('@btnLogin')
    //.waitForElementVisible('@msgError',2000)
    .assert.visible('@msgError')
    .pause(1000)
    .end();
    }
}

module.exports = {
    url: 'http://172.16.6.75/login',
    elements: {
        inputDomain: {
            selector: '//input[@id="domain"]',
            locateStrategy: 'xpath'
        },
        inputUsser: {
            selector: '//input[@id="username"]',
            locateStrategy: 'xpath'
        },
        inputPass: {
            selector: '//input[@id="password"]',
            locateStrategy: 'xpath'
        },
        btnLogin: {
            selector: '//*[@id="login"]',
            locateStrategy: 'xpath'
        },
        msgError: {
            selector: '//*[@id="app"]/div[1]/div/div/div[1]/i',
            locateStrategy: 'xpath'
        },
        spanBienvenido: {
            selector: '//span[contains(text(), "erik")]',
            locateStrategy: 'xpath'
        }
    },
    //comands llama a la funcion ej: loginCommand y la ejecuta.
    commands:[loginOk, loginNoOk]
}





