const loginComman = { 
  loginFail: function(screenshotLoginFail) {
      return this.assert.visible('@inputSearch', "El elemento 'input Search' se visualiza correctramente!")
      .setValue('@inputSearch', "tottus nataniel")
      .waitForElementVisible('@buttonSearch')
      .saveScreenshot('./screenshot/busqueda.png')
      .click('@buttonSearch')
      .waitForElementVisible('@buttonSitioWeb', "El boton Sitio Web se visualiza correctamente!")
      .saveScreenshot('./screenshot/btnSitioWeb.png')
      .click('@buttonSitioWeb')
      .waitForElementVisible('@titelRecetas', 15000)
      .saveScreenshot('./screenshot/tottus.png')
      .waitForElementVisible('@optionRectea')
      .saveScreenshot('./screenshot/COPITAS_DE_ZAPALLO_ITALIANO.png')
      .click('@optionRectea')
      .pause(5000)
      }
  }


module.exports = {
    url: function() { 
      return this.api.launchUrl; 
    },
    elements: {
      inputSearch: { 
        selector: 'input[name=q]',
      },
      buttonSearch: {
          selector: 'input[name=btnK]'
      },
      buttonSitioWeb: {
          selector: 'a[class=ab_button]'
      },
      titelRecetas: {
        selector: '//*[@id="bloquerecetas"]/div/div[1]/div/h2',
        locateStrategy: 'xpath'
      },
      optionRectea: {
        selector: '//*[@id="bloquerecetas"]/div/div[2]/div[1]/a[2]/h3',
        locateStrategy: 'xpath'
      }
    },
    commands: [loginComman]
  };