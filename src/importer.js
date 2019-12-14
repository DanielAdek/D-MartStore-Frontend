export const Alias = {
  pathToDispatchAbles: file => require(`./store/actions/dispatchables/${file}`),
  pathToUtils: file => require(`./utils/${file}`),
  pathToConstant: file => require(`./store/constant/${file}`),
  pathToReducers: file => require(`./store/reducers/${file}`),
  pathToScreens: file => require(`./pages/${file}`),
  pathToAssets: file => require(`./assets/${file}`),
  pathToSyles: file => require(`./assets/styles/${file}`),
  pathToImages: file => require(`./assets/images/${file}`),
  pathToActions: file => require(`./store/actions/${file}`),
  pathToComponents: file => require(`./components/${file}`),
  pathToCompounds: file => require(`./compounds/${file}`),
}