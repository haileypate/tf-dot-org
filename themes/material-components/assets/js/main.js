import {MDCRipple} from '../../node-modules/@material/ripple';
import {MDCTopAppBar} from '../../node-modules/@material/top-app-bar/index';
import {MDCList} from '../../node-modules/@material/list/index';
import {MDCTab} from '../../node-modules/@material/tab/index';
import {MDCDrawer} from '../../node-modules/@material/drawer/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

const tab = new MDCTab(document.querySelector('.mdc-tab'));

const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));