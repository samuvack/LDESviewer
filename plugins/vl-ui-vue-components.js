import Vue from "vue";

import VueI18n from "vue-i18n";



import {

    i18n,

    VlCore,

    VlUtil,

    VlButton

} from "@govflanders/vl-ui-vue-components";



Vue.component("vl-button", VlButton);



Vue.use(VlCore);

Vue.use(VlUtil);

Vue.use(VueI18n);