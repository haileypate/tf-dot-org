import {MDCRipple} from '../../node-modules/@material/ripple';
import {MDCTopAppBar} from '../../node-modules/@material/top-app-bar/index';
import {MDCList} from '../../node-modules/@material/list/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;