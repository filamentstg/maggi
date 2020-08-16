import { MAKE_BALANCEC_BOWL_LANG as bm } from "./bm";
import { MAKE_BALANCEC_BOWL_LANG as en } from "./en";
import { window } from "browser-monads";

const locale = (typeof window !== 'undefined') ? window.localStorage.getItem('lang') : 'en';
export const activeLocale = locale || 'en';

export const lang = activeLocale === 'bm' ? bm : en;
