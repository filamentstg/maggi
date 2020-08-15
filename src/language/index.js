import { MAKE_BALANCEC_BOWL_LANG as bm } from "./bm";
import { MAKE_BALANCEC_BOWL_LANG as en } from "./en";

const locale = localStorage.getItem('lang');
export const activeLocale = locale || 'en';

export const lang = activeLocale === 'bm' ? bm : en;

