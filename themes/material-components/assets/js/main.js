import '../../node-modules/@material/typography';
import '../../node-modules/@material/list';

import {MDCTopAppBar} from '../../node-modules/@material/top-app-bar/index';
import {MDCList} from '../../node-modules/@material/list/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);