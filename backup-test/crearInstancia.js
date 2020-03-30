/*Funciones*/ 
const clickInfra = { 
    clickMenuInfra: function(flavor,image,name,usser,pass,cant) {
        return this.click('@menuInfra')
        .pause(1000)
        .click('@menuVitualizacion')
        .pause(1000)
        .click('@optionVmware')
        .pause(1000)
        .click('@btnCrearInstancias')
        .pause(1000)
        .setValue('@selectSabor', flavor)
        .setValue('@selectImage', image)
        .setValue('@inputNameInstance', name)
        .setValue('@inputUsserInstance', usser)
        .setValue('@inputPassInstance', pass)
        .setValue('@inputPassConfirmInstance', pass)
        .clearValue('@quantityInstance')
        .setValue('@quantityInstance', cant)
        .pause(2000)
        .click('@btnCrearInstancia')
        .waitForElementPresent('@instanceName',600000)
        .waitForElementPresent('@textEstate',600000)
        
        /*'@inputPassModalApp', pass)
        .click('@btnInstallApp')
        .pause(1000)
        .waitForElementPresent('@textProgressAprovisionado', 600000)
        .pause(1000)
        .click('@btnModalApp')
        .pause(1000)
        .waitForElementPresent('@btnOpenAppJira', 60000)
        .click('@btnOpenAppJira')*/
    }
}

const commandValidateFailsInstance = {
    validateInstanceFail: function(browser) {
        return this
        .isVisible('@textProgressFallido', results => {
            if(results === true){
                console.log("Es visible");
                this.click('@inputCheckBox')
                .click('@btnDeleteInstance')
                .pause(1000)
                .click('@btnConfirmDelete')
                .waitForElementNotPresent('@instanceName', 600000)
            }else{
                console.log("No es visible");
                this.waitForElementPresent('@textProgress',60000)
            }
        })
    }
}

const commandSetValueModal = {
    setModalValue: function(usser, pass) {
        return this
        .click('@btnModalApp')
        .setValue('@inputUsserModalApp', usser)
        .setValue('@inputPassModalApp', pass)
        .pause(1000)
        .click('@AppJira')
        .click('@btnInstallApp')
        .pause(1000)
        .waitForElementPresent('@textProgressAprovisionado', 600000)
        .pause(1000)
        .click('@btnModalApp')
        .pause(1000)
        .waitForElementPresent('@btnOpenAppJira', 60000)
        .click('@btnOpenAppJira')
    }
}

const DeleteInstane = { 
    eliminarInstancia: function() {
        return this
        .click('@bntCancelApp')
        .click('@inputCheckBox') 
        .click('@btnDeleteInstance')
        .pause(1000)
        .click('@btnConfirmDelete')
        .waitForElementNotPresent('@instanceName', 600000)
    }
}
/*Objetos o elementos de la pagina */
module.exports = {
    url: 'http://172.16.6.75/login',
    elements: {
        menuInfra: {
            selector: '//span[contains(text(), "infra")]',
            locateStrategy: 'xpath'
        },
        menuVitualizacion: {
            selector: '//*[contains(text(), "nubes")]',
            locateStrategy: 'xpath'
        },
        optionVmware: {
            selector: '//*[contains(text(), "microsoft azure")]',
            locateStrategy: 'xpath'
        },
        btnCrearInstancias: {
            selector: '//*[@id="create"]',
            locateStrategy: 'xpath'
        },
        selectSabor: {
            selector: '//*[@id="flavor"]',
            locateStrategy: 'xpath'
        },
        selectImage: {
            selector: '//*[@id="image"]',
            locateStrategy: 'xpath'
        },
        inputNameInstance: {
            selector: '//*[@id="name"]',
            locateStrategy: 'xpath'
        },
        inputUsserInstance: {
            selector: '//*[@id="instanceUser"]',
            locateStrategy: 'xpath'
        },
        inputPassInstance: {
            selector: '//*[@id="instancePassword"]',
            locateStrategy: 'xpath'
        },
        inputPassConfirmInstance: {
            selector: '//*[@id="instancePasswordConfirmation"]',
            locateStrategy: 'xpath'
        },
        quantityInstance: {
            selector: '//*[@id="quantity"]',
            locateStrategy: 'xpath'
        },
        btnCrearInstancia: {
            selector: '//*[@id="submitCreate"]',
            locateStrategy: 'xpath'
        },
        instanceName: {
            selector: '//td[contains(text(), "VmwareEG-1")]',
            locateStrategy: 'xpath'
        },
        textProgress: {
            selector: '//td[contains(text(), "VmwareEG-1")]/..//span[contains(text(), "creado")]',
            locateStrategy: 'xpath'
        },
        textProgressFallido: {
            selector: '//td[contains(text(), "VmwareEG-1")]/..//span[contains(text(), "fallido")]',
            locateStrategy: 'xpath'
        },
        textEstate: {
            selector: '//td[contains(text(), "VmwareEG-1")]/..//span[contains(text(), "encendido")]',
            locateStrategy: 'xpath'
        },
        btnModalApp: {
            selector: '//td[contains(text(), "VmwareEG-1")]/../td[7]',
            locateStrategy: 'xpath'
        },
        AppJira: {
            selector: '//label[contains(text(), "jira software")]',
            locateStrategy: 'xpath'
        },
        inputUsserModalApp: {
            selector: '//*[@id="appsInstanceUser"]',
            locateStrategy: 'xpath'
        },    
        inputPassModalApp: {
            selector: '//*[@id="appsInstancePassword"]',
            locateStrategy: 'xpath'
        },
        btnInstallApp: {
            selector: '//*[@id="submitApps"]',
            locateStrategy: 'xpath'
        },
        textProgressAprovisionado: {
            selector: '//td[contains(text(), "VmwareEG-1")]/..//span[contains(text(), "aprovisionado")]',
            locateStrategy: 'xpath'
        },
        btnOpenAppJira: {
            selector: '//*[@name="appButton"]',
            locateStrategy: 'xpath'
        },
        tabWindowsJira: {
            selector: '//h2[contains(text(), "Jira setup")]',
            locateStrategy: 'xpath'
        },
        bntCancelApp: {
            selector: '//*[@id="cancelApps"]',
            locateStrategy: 'xpath'
        },
        inputCheckBox: {
            selector: '//td[contains(text(),"VmwareEG-1")]/..//input',
            locateStrategy: 'xpath'
        },
        btnDeleteInstance: {
            selector: '//*[@id="delete"]',
            locateStrategy: 'xpath'
        },
        btnConfirmDelete: {
            selector: '//*[@id="submitDelete"]',
            locateStrategy: 'xpath'
        }
    },
     //comands llama a la funcion ej: loginCommand y la ejecuta.
     commands:[clickInfra,commandValidateFailsInstance,commandSetValueModal,DeleteInstane]//DeleteInstane
}