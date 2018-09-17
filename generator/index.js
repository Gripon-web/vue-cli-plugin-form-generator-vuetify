module.exports = (api, opts, rootOpts) => {
  const formGenerator = require('./tools/formGenerator')

  formGenerator.addDependencies(api)
  formGenerator.renderFiles(api, opts)

  api.onCreateComplete(() => {
    formGenerator.addImports(api)
  })
}