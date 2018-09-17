const helpers = require('./helpers')

function addDependencies(api) {
  api.extendPackage({
    dependencies: {
      "form-generator-vuetify": "^0.1.2"
    }
  })
}

function renderFiles(api, opts) {
  const pluginFilename = api.hasPlugin('typescript') ? 'formGeneratorVuetify.ts' : 'formGeneratorVuetify.js'
  const pluginSourceFilename = 'formGeneratorVuetify.js'
  api.render({
    [`./src/plugins/${pluginFilename}`]: `../templates/default/src/plugins/${pluginSourceFilename}`
  }, {
      ...opts,
      typescript: api.hasPlugin('typescript')
    })
}

function addImports(api) {
  helpers.updateFile(api, api.entryFile, lines => {
    const vueImportIndex = lines.findIndex(line => line.match(/^import Vue/))

    lines.splice(vueImportIndex + 1, 0, `import './plugins/formGeneratorVuetify'`)

    return lines
  })
}

module.exports = {
  addDependencies,
  addImports,
  renderFiles
}