import { HomePage } from './HomePage';
import { ImprintPage } from './ImprintPage';

const createPage = (path, component, label, routeOptions, navigationOptions)=>({path, component, label, routeOptions, navigationOptions})

const PAGES = [
  createPage('/',HomePage, "menu_home", {exact:true}, {topbar:true, drawer:true}),
  createPage('/imprint', ImprintPage, "menu_imprint", {exact:false}, {topbar:true, drawer:true}),
];

export default PAGES
