(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/BIV":function(e,n,t){e.exports=t.p+"static/pepper-3-a1d7ad691c38f5dc135de5bc84c67f80.png"},"0hyv":function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("Wbzz"),o=t("+ZDr"),c=t("i8R+"),u=t("exr9"),l=t.n(u),s=t("89az"),d=t.n(s),T=t("7daN"),E=t.n(T),g=(t("dvDs"),t("/BIV")),A=t.n(g),f=t("pH7X");var S=[{title:f.b.MAKE_YOUR_BALANCED_BOWL,action:0,link:"/make-balanced-bowl"},{title:f.b.WHY_MAGGI,action:1,link:"/#why-maggi"},{title:f.b.DELICIOUS_RECIPES,action:2,link:"/#delicious-recipes"}],p=function(e){var n,t;function a(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).state={isMobile:!1,lang:"en",isShowMenu:!1},n.setLocale=function(e){void 0!==c.window&&(n.setState({lang:e}),c.window.localStorage.setItem("lang",e),c.window.location.reload())},n.changeRoute=function(e){if(0!==e){var t=n.props,a=t.scroll;t.hideMybb?1===e?Object(o.navigateTo)("/#why-maggi"):Object(o.navigateTo)("/#delicious-recipes"):a(e)}else Object(o.navigateTo)("/make-balanced-bowl")},n}t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var u=a.prototype;return u.componentDidMount=function(){var e=this;this.setState({lang:f.a}),c.window.innerWidth<=1159&&this.setState({isMobile:!0}),c.window.addEventListener("resize",(function(){c.window.innerWidth<=1159?e.setState({isMobile:!0}):e.setState({isMobile:!1})}))},u.render=function(){var e=this,n=this.state,t=n.isMobile,a=n.lang,o=n.isShowMenu,c=S;return r.a.createElement("header",null,r.a.createElement("div",{className:"main-header"},r.a.createElement(i.Link,{to:"/"},r.a.createElement("div",{className:"main-header_logo"})),r.a.createElement("div",{className:"main-header_menu",id:"main-header"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:E.a,alt:"tomatto-1",className:"tomato-1"}),r.a.createElement("img",{src:A.a,alt:"pepper-1",className:"pepper-1"})),t?r.a.createElement("div",{style:{height:"60px",zIndex:"10"}},!o&&r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{className:"main-header_menu-item language",style:{marginRight:".5em"}},r.a.createElement("div",{className:"language-common en "+("en"===a?"active":""),onClick:function(){return e.setLocale("en")}},r.a.createElement("span",null,"EN")),r.a.createElement("div",{className:"language-common bm "+("bm"===a?"active":""),onClick:function(){return e.setLocale("bm")}},r.a.createElement("span",null,"BM"))),r.a.createElement("img",{style:{cursor:"pointer"},src:l.a,alt:"",width:"50",height:"50",onClick:function(){return e.setState({isShowMenu:!0})}})),r.a.createElement("div",{className:"mobile-menu",style:o?{height:"100%"}:{height:"0"}},o&&r.a.createElement("img",{className:"mobile-menu-close-btn",src:d.a,alt:"",width:"50",height:"50",onClick:function(){return e.setState({isShowMenu:!1})}}),r.a.createElement("div",{className:"mobile-menu-container",style:o?{display:"block"}:{display:"none"}},c.map((function(n,t){return r.a.createElement("div",{className:"mobile-menu-item",key:t,onClick:function(){return e.setState({isShowMenu:!1})}},r.a.createElement("span",{onClick:function(){return e.changeRoute(n.action)}},n.title))}))))):r.a.createElement(r.a.Fragment,null,c.map((function(n,t){return r.a.createElement("div",{className:"main-header_menu-item",key:t},r.a.createElement("span",{onClick:function(){return e.changeRoute(n.action)}},n.title))})),r.a.createElement("div",{className:"main-header_menu-item language"},r.a.createElement("div",{className:"language-common en "+("en"===a?"active":""),onClick:function(){return e.setLocale("en")}},r.a.createElement("span",null,"EN")),r.a.createElement("div",{className:"language-common bm "+("bm"===a?"active":""),onClick:function(){return e.setLocale("bm")}},r.a.createElement("span",null,"BM")))))))},a}(r.a.PureComponent);n.a=p},"0vJV":function(e,n,t){"use strict";t.r(n),t.d(n,"Nothing",(function(){return r})),t.d(n,"toBool",(function(){return i})),t.d(n,"isNothing",(function(){return o})),t.d(n,"isSomething",(function(){return c})),t.d(n,"serialize",(function(){return u})),t.d(n,"deserialize",(function(){return l}));t("DrhF"),t("m210"),t("4DPX"),t("q8oJ"),t("C9fy"),t("8npG");var a,r=((a=function(){return r}).toString=a.toLocaleString=a[Symbol.toPrimitive]=function(){return""},a.valueOf=function(){return!1},new Proxy(Object.freeze(a),{get:function(e,n){return e.hasOwnProperty(n)?e[n]:r}})),i=function(e){return!(!e||!e.valueOf())},o=function(e){return e===r},c=function(e){return!(e===r||null==e)},u=function(e){return JSON.stringify(e,(function(e,n){return n===r?null:n}))},l=function(e){return JSON.parse(e,(function(e,n){return null===n?r:n}))}},"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Maggi - Serve your family Balanced Bowls","description":"MAGGI® 2-Minute Noodles are carbohydrate-rich foods like rice, cereal and potato that can be used to prepare balanced dishes for your family! Apart from the delicious taste and aroma that you know and love, you can also enjoy the following benefits of cooking with MAGGI® 2-Minute Noodles","author":"@filament"}}}}')},"7daN":function(e,n,t){e.exports=t.p+"static/chilli-1-71ba22e53e86c1adc4aabd3a9fdd7b6b.png"},"8+s/":function(e,n,t){"use strict";t("sc67"),t("AqHK"),t("pJf4"),t("pS08"),t("R48M");var a,r=t("q1tI"),i=(a=r)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,n,t){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof n)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),d.canUseDOM?n(u):t&&(u=t(u))}var d=function(e){var n,t;function r(){return e.apply(this,arguments)||this}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,r.peek=function(){return u},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},o.render=function(){return i.createElement(a,this.props)},r}(r.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(d,"canUseDOM",c),d}}},"89az":function(e,n){e.exports="data:image/png;base64,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"},C9fy:function(e,n,t){var a=Date.prototype,r=a.toString,i=a.getTime;new Date(NaN)+""!="Invalid Date"&&t("IYdN")(a,"toString",(function(){var e=i.call(this);return e==e?r.call(this):"Invalid Date"}))},DrhF:function(e,n,t){var a=t("BjK0"),r=t("N+BI").onFreeze;t("939a")("freeze",(function(e){return function(n){return e&&a(n)?e(r(n)):n}}))},R48M:function(e,n,t){var a=t("P8UN");a(a.S+a.F*!t("QPJK"),"Object",{defineProperty:t("rjfK").f})},bmMU:function(e,n,t){t("Ll4R"),t("Ggvi"),t("q8oJ"),t("C9fy"),t("Kz6e"),t("klQ5"),t("MIFh"),t("ToIb"),t("rzGZ"),t("Dq+y"),t("8npG"),t("YbXK"),t("xJgp");var a="undefined"!=typeof Element,r="function"==typeof Map,i="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,n){try{return function e(n,t){if(n===t)return!0;if(n&&t&&"object"==typeof n&&"object"==typeof t){if(n.constructor!==t.constructor)return!1;var c,u,l,s;if(Array.isArray(n)){if((c=n.length)!=t.length)return!1;for(u=c;0!=u--;)if(!e(n[u],t[u]))return!1;return!0}if(r&&n instanceof Map&&t instanceof Map){if(n.size!==t.size)return!1;for(s=n.entries();!(u=s.next()).done;)if(!t.has(u.value[0]))return!1;for(s=n.entries();!(u=s.next()).done;)if(!e(u.value[1],t.get(u.value[0])))return!1;return!0}if(i&&n instanceof Set&&t instanceof Set){if(n.size!==t.size)return!1;for(s=n.entries();!(u=s.next()).done;)if(!t.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(t)){if((c=n.length)!=t.length)return!1;for(u=c;0!=u--;)if(n[u]!==t[u])return!1;return!0}if(n.constructor===RegExp)return n.source===t.source&&n.flags===t.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===t.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===t.toString();if((c=(l=Object.keys(n)).length)!==Object.keys(t).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(t,l[u]))return!1;if(a&&n instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!n.$$typeof)&&!e(n[l[u]],t[l[u]]))return!1;return!0}return n!=n&&t!=t}(e,n)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}}},dvDs:function(e,n,t){e.exports=t.p+"static/herb-1-010e76ea6ad804b2ec3f9c834306d512.png"},exr9:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAEHCAYAAABrx2lxAAAACXBIWXMAABcRAAAXEQHKJvM/AAAFJ0lEQVR4nO3awW1VRxiA0XHEHq9nlQ5CB7iD0EHcQegg0AHpwHRgOjAVhHTg1azjCl70JLNDthR9QpfJORX8b0b63r135uJ0Og2A0k9WE6gJC5ATFiAnLEBOWICcsAA5YQFywgLkhAXICQuQExYgJyxATliAnLAAOWEBcsIC5IQFyAkLkBMWICcsQE5YgJywADlhAXLCAuSEBcgJC5ATFiAnLEBOWICcsAA5YQFywgLkhAXICQuQExYgJyxATliAnLAAOWEBcsIC5IQFyAkLkBMWICcsQE5YgJywADlhAXLCAuSEBcgJC5ATFiAnLEBOWICcsAA5YQFywgLkhAXICQuQExYg92L3JZ1zXo8x3owxLg8wDtyPMW7WWnc7r8TF6XQ6wBi9Oec5JOfN+2W338YWPq61rnfdyp1fhW5FhQP7bc75btcN2jIsc86rMcbrA4wCT3m76+rs+sRydYAZ4DkvH/8Et+NUCMgJC5DbNSy3B5gBnvOw67HzlmFZa30ZY3w6wCjwFB9vf0DX4sKBvV9r3ey6QdtekPvq8av7+ebtq2NMxP/c3ePN2/udl2H7sADfn1MhICcsQE5YgJywADlhAXLCAuSEBcgJC5ATFiAnLEBOWICcsAA5YQFywgLkhAXICQuQExYgJyxATliAnLAAOWEBcsIC5IQFyAkLkBMWICcsQE5YgJywADlhAXLCAuSEBcgJC5ATFiAnLEBOWICcsAA5YQFywgLkhAXICQuQExYgJyxATliAnLAAOWEBcsIC5IQFyAkLkBMWICcsQE5YgJywADlhAXLCAuRe7L6kc87rMcbVGOPnA4wDX8YYt2utu51X4uJ0Oh1gjN6c8/K8gWOM17v9Nrbw51rr7a5bufOr0I2ocGC/zzm3DcuWTyxzzldjjL8OMAo85WGtdbnjCu36xPLmADPAc17OOa92XCWnQkBOWIDcrmG5PcAM8JyHXY+dtwzLWut8V+DTAUaBp7zbdXV2fhU6X4z7fIA54FvO91g+7Loy216Q+8rNWw7GzVuA/8KpEJATFiAnLEBOWICcsAA5YQFywgLkhAXICQuQExYgJyxATliAnLAAOWEBcsIC5IQFyAkLkBMWICcsQE5YgJywADlhAXLCAuSEBcgJC5ATFiAnLEBOWICcsAA5YQFywgLkhAXICQuQExYgJyxATliAnLAAOWEBcsIC5IQFyAkLkBMWICcsQE5YgJywADlhAXLCAuSEBcgJC5ATFiAnLEBOWICcsAA5YQFyL3Zf0jnn1RjjzRjj1QHGgbsxxs1a637nlbg4nU4HGKM357w8b+AY49fdfhtbeL/WerfrVu78KiQqHNkfc863u+7Qlk8sc87za89fBxgFnvKw1rrccYV2fWJ5c4AZ4DkvH78BbsepEJATFiC3a1huDzADPOdhjPFlx1XaMixrrfNmfT7AKPCUD2utf3ZcoZ1fhc4fcP8+wBzwLR93vsey7QW5r+ac14+R2fJYjx/O/ePN27udt277sADfn1MhICcsQE5YgJywADlhAXLCAuSEBcgJC5ATFiAnLEBOWICcsAA5YQFywgLkhAXICQuQExYgJyxATliAnLAAOWEBcsIC5IQFyAkLkBMWICcsQE5YgJywADlhAXLCAuSEBcgJC5ATFiAnLEBOWICcsAA5YQFywgLkhAXICQuQExYgJyxATliAnLAAOWEBcsIC5IQFyAkLkBMWICcsQE5YgJywADlhAXLCAuSEBcgJC5ATFiAnLEBOWIDWGONfTBWaSw/865gAAAAASUVORK5CYII="},"i8R+":function(e,n,t){"use strict";var a=t("0vJV"),r=a.Nothing,i=a.isNothing,o="undefined"!=typeof window?window:r,c="undefined"!=typeof document?document:r;e.exports.window=o,e.exports.document=c,e.exports.exists=function(e){return!i(e)}},je2q:function(e,n,t){},klQ5:function(e,n,t){var a=t("emib"),r=t("TUPI"),i=t("rjfK").f,o=t("chL8").f,c=t("mhTz"),u=t("lb9j"),l=a.RegExp,s=l,d=l.prototype,T=/a/g,E=/a/g,g=new l(T)!==T;if(t("QPJK")&&(!g||t("96qb")((function(){return E[t("sOol")("match")]=!1,l(T)!=T||l(E)==E||"/a/i"!=l(T,"i")})))){l=function(e,n){var t=this instanceof l,a=c(e),i=void 0===n;return!t&&a&&e.constructor===l&&i?e:r(g?new s(a&&!i?e.source:e,n):s((a=e instanceof l)?e.source:e,a&&i?u.call(e):n),t?this:d,l)};for(var A=function(e){e in l||i(l,e,{configurable:!0,get:function(){return s[e]},set:function(n){s[e]=n}})},f=o(s),S=0;f.length>S;)A(f[S++]);d.constructor=l,l.prototype=d,t("IYdN")(a,"RegExp",l)}t("to/b")("RegExp")},ksaK:function(e,n,t){},pH7X:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c}));var r=((a={MAKE_A_BALANCED_BOWL:"Sediakan Sajian Seimbang Anda",INSTRUCTION:"Pendahuluan",MAKE_YOUR_BALANCED_BOWL:"Sediakan Sajian Seimbang Anda",STEP_1:"Langkah 1",STEP_2:"Langkah 2",STEP_3:"Langkah 3",FINISH:"Tamat",HOVER_HINT:"Tuding ke setiap ramuan untuk ketahui lebih lanjut tentang sajian yang disyorkan",INTRO_TITLE:"Anda hanya perlu 3 langkah mudah untuk mereka",INTRO_BIG_TITLE:"Sajian Seimbang MAGGI® anda",INTRO_DES:"Dengan aktiviti ini, anda dapat menyediakan Sajian Seimbang anda dengan menggunakan Mi MAGGI® bersama sehingga 2 jenis protein dan sayur-sayuran masing-masing. * Anda boleh menggunakannya sebagai panduan untuk membantu anda menyediakan versi Sajian Seimbang MAGGI® anda.",START_NOW:"Mula Sekarang",NEXT:"Seterusnya",BACK:"Kembali",INTRO_HINT:"*Ketika menyediakan Sajian Seimbang anda, anda boleh menggunakan lebih daripada 2 jenis protein dan sayur-sayuran untuk memenuhi cadangan pengiraan Suku-Suku-Separuh yang disyorkan",STEP1_TITLE:"Gerakkan kursor ke setiap ramuan untuk mengetahui lebih lanjut mengenai nilai nutrisinya",STEP1_OP1_TITLE:"MAGGI® Kari",STEP1_OP2_TITLE:"MAGGI® Ayam",STEP1_OP3_TITLE:"MAGGI® Tom Yam",STEP1_OP1_TOOLTIP:"1 Pek = 352 kcal",STEP1_OP2_TOOLTIP:"1 Pek = 345 kcal",STEP1_OP3_TOOLTIP:"1 Pek = 358 kcal",STEP2_TITLE:"Pilih sehingga 2 jenis protein untuk mi anda",STEP2_OP1_TITLE:"Daging Lembu",STEP2_OP2_TITLE:"Daging Ayam",STEP2_OP3_TITLE:"Telur",STEP2_OP4_TITLE:"Udang",STEP2_OP5_TITLE:"Sotong",STEP2_OP6_TITLE:"Tauhu",STEP2_OP1_TOOLTIP:"1 Sajian (60g) = 66 kcal <br>1⁄2 Sajian (30g) = 33 kcal",STEP2_OP2_TOOLTIP:"1 Sajian (100g) = 150 kcal <br>1⁄2 Sajian (50g) = 75 kcal",STEP2_OP3_TOOLTIP:"1 Sajian (2 Sederhana) = 156 kcal <br>1⁄2 Sajian (1 Sederhana) = 78 kcal",STEP2_OP4_TOOLTIP:"1 Sajian (10 Sederhana) = 61 kcal <br>1⁄2 Sajian (5 Sederhana) = 31 kcal",STEP2_OP5_TOOLTIP:"1 Sajian (100g) = 75 kcal <br>1⁄2 Sajian (50g) = 38 kcal",STEP2_OP6_TOOLTIP:"1 Sajian (200) = 134 kcal <br>1⁄2 Sajian (100g) = 67 kcal",STEP3_TITLE:"Pilih sehingga 2 jenis sayuran untuk mi anda",STEP3_OP1_TITLE:"Sayur Sawi",STEP3_OP2_TITLE:"Lobak Merah",STEP3_OP3_TITLE:"Kubis Bunga",STEP3_OP4_TITLE:"Sayur Kailan",STEP3_OP5_TITLE:"Sayur Brokoli",STEP3_OP6_TITLE:"Selada",STEP3_OP7_TITLE:"Kacang Panjang",STEP3_OP8_TITLE:"Sayur Pak Choy",STEP3_OP9_TITLE:"Tomato",STEP3_OP10_TITLE:"Cendawan",STEP3_OP1_TOOLTIP:"1 Sajian (60g) = 18 kcal <br>1⁄2 Sajian (30g) = 9 kcal",STEP3_OP2_TOOLTIP:"1 Sajian (100g) = 35 kcal <br>1⁄2 Sajian (50g) = 18 kcal",STEP3_OP3_TOOLTIP:"1 Sajian (100g) = 32 kcal <br>1⁄2 Sajian (50g) = 16 kcal",STEP3_OP4_TOOLTIP:"1 Sajian (60g) = 26 kcal <br>1⁄2 Sajian (30g) = 13 kcal",STEP3_OP5_TOOLTIP:"1 Sajian (100g) = 29 kcal <br>1⁄2 Sajian (50g) = 15 kcal",STEP3_OP6_TOOLTIP:"1 Sajian (60g) = 11 kcal <br>1⁄2 Sajian (30g) = 6 kcal",STEP3_OP7_TOOLTIP:"1 Sajian (100g) = 33 kcal <br>1⁄2 Sajian (50g) = 17 kcal",STEP3_OP8_TOOLTIP:"1 Sajian (60g) = 10 kcal <br>1⁄2 Sajian (50g) = 5 kcal",STEP3_OP9_TOOLTIP:"1 Sajian (100g) = 22 kcal <br>1⁄2 Sajian (50g) = 11 kcal",STEP3_OP10_TOOLTIP:"1 Sajian (100g) = 23 kcal <br>1⁄2 Sajian (50g) = 12 kcal",CARBOHYDRATES:"Karbohidrat",PROTEIN:"Protein",VEGETABLES:"Sayur-sayuran",PALMFUL:"Saiz Tapak Tangan",AFISTFUL:"Saiz Genggaman",HANDFUL:"Saiz Cekup Tangan",TOTAL_ENERGY:"Jumlah Tenaga",ENERGY_EXPLAIN:"% yang dipenuhi untuk Purata Keperluan Tenaga Seharian",KCAL:"KCAL",CHILDREN:"Kanak-kanak",SENIORS:"Adults",FEMALE:"Perempuan",MALE:"Lelaki",MAKE_NEW_BALANCED_BOWl:"Sediakan Sajian Seimbang yang Baru",SHARE_RECIPE:"Kongsikan Resipi Anda",MIN_WARNING:"Anda perlu pilih sekurang-kurangnya 1 bahan.",MAX_WARNING:"Anda boleh pilih sebanyak 2 bahan.",SERVE_YOUR_FAMILY_WITH_BALANCED_BOWLS:"Sajikan Hidangan Seimbang untuk Keluarga Anda!",CAROUSEL_INSTRUCTION:"Panduan ini bertujuan untuk membantu anda menyediakan hidangan yang seimbang dengan menggunakan mi segera dan pelbagai bahan segar untuk seisi keluarga di keselesaan rumah anda",SWIPE_RIGHT:"Leret ke kanan untuk ketahui lebih lanjut",STEP_1_DES:"Pilih Mi MAGGI® kegemaran anda sebagai sumber karbohidrat pilihan anda",FISTFUL_1:"Genggaman",PACKET:"Pek",STEP_2_DES:"Pilih protein untuk mi anda",PALM_SIZE:"Tapak tangan"}).PROTEIN="Protein",a.STEP_3_DES="Pilih jenis sayuran untuk mi anda",a.HANDFUL_1="Secekup tangan",a.VEGETEBLES="Sayuran",a.SERVE_SIZE_SUGGESTED="Saiz hidangan hanya sebagai cadangan untuk pengiraan makanan yang boleh anda masukkan untuk sajian anda.",a.FIND_OUT_MORE="Ketahui lebih lanjut.",a.AND_A_GLASS_OF_WATER="dan segelas air",a.WHY_MAGGI="Kenapa MAGGI®?",a.WHY_MAGGI_DES_1="Sama seperti nasi, bijirin dan ubi kentang, Mi MAGGI® merupakan salah satu sumber karbohidrat. Ia boleh digunakan dalam penyediaan hidangan yang seimbang untuk ahli keluarga anda.",a.WHY_MAGGI_DES_2="Selain daripada rasa dan aroma lazat yang anda Kelazatan dan aroma Mi Maggi memang lain dari yang lain. Ini adalah kerana hanya bahan-bahan yang terpilih sahaja digunakan. Tambahan pula dengan cara penyediaan yang berperihatin, anda juga dapat menikmati kebaikan berikut dengan Mi MAGGI®:",a.SELECTED_INGREDIENT="Bahan-bahan terpilih",a.SELECTED_INGREDIENT_DES_1="Mi MAGGI® diperbuat daripada 100 peratus gandum dari Australia, yang juga merupakan sumber protein yang baik.",a.SELECTED_INGREDIENT_DES_2="Rasa asli perencah MAGGI® diperbuat daripada bahan pilihan yang terbaik sahaja demi Gabungan rempah-ratus yang terpilih untuk menghasilkan rasa asli dalam setiap hidangan Mi MAGGI rasa mi anda",a.CONVENIENCE="Mudah",a.CONVENIENCE_DES="Mi MAGGI® boleh disediakan dalam masa 2 minit",a.DELICIOUS_RECIPES="Resipi yang Lazat",a.CURRY="Kari",a.CURRY_DES="MAGGI® Kari",a.CHICKEN="Ayam",a.CHICKEN_DES="MAGGI® Ayam",a.TOM_YAM="Tom Yam",a.TOM_YAM_DES="MAGGI® Tom Yam",a.A_PALM_SIZE="Saiz Tapak Tangan",a.CHICKEN_BREAST_1="Dada Ayam (Direbus dan dicarik)",a.CHICKEN_BREAST_2="Dada Ayam",a.HARD_BOIL_EGG="Telur Rebus",a.SAWI="Sawi",a.CARROT="Lobak Merah",a.CARROT_SUB="(Dihiris halus)",a.CARROT_2="Lobak Merah",a.CARROT_2_SUB="(Dihiris)",a.BOK_CHOY="Sayur Pak Choy",a.PRAWN="Udang",a.SQUID="Sotong",a.CAULIFLOWER="Kubis Bunga",a.STRAW_MUSHROOM="Cendawan Jerami",a.CUSTOMMIZE_YOUR_BALANCED_BOWL="Reka Sajian Seimbang Anda",a.STEP_HINT_1="*Jika pilih satu jenis bahan -> sajian yang disyorkan: 1 Sajian",a.STEP_HINT_2="*Jika pilih dua jenis bahan -> sajian yang disyorkan: 1 Sajian",a.ADULT_REC="Berdasarkan keperluan tenaga harian purata {1}kcal untuk golongan dewasa",a),i=t("i8R+"),o=(void 0!==i.window?i.window.localStorage.getItem("lang"):"en")||"en",c="bm"===o?r:{MAKE_A_BALANCED_BOWL:"Make Your Balanced Bowl",INSTRUCTION:"Introduction",MAKE_YOUR_BALANCED_BOWL:" Make Your Balanced Bowl!",STEP_1:"Step 1",STEP_2:"Step 2",STEP_3:"Step 3",FINISH:"Finish",HOVER_HINT:"Hover over each ingredient to learn more about the recommended portion",INTRO_TITLE:"All it takes is 3 simple steps to create your​",INTRO_BIG_TITLE:"MAGGI® Balanced Bowl!",INTRO_DES:"With this activity, you’ll be able to make your very own virtual Balanced Bowl using MAGGI® Noodles with up to 2 protein and vegetables each.* You may use this as a guide to help you prepare your own version of a MAGGI® Balanced Bowl.",START_NOW:"Start now",NEXT:"Next",BACK:"Back",INTRO_HINT:"*When creating your own Balanced Bowl, you may use more than 2 protein and vegetables to occupy the suggested approximate proportions of Suku-Suku-Separuh",STEP1_TITLE:"Click on each ingredient to learn more about its nutritional value",STEP1_OP1_TITLE:"MAGGI® 2-Minute <br> Curry Noodles",STEP1_OP2_TITLE:"MAGGI® 2-Minute <br> Chicken Noodles",STEP1_OP3_TITLE:"MAGGI® 2-Minute <br> Tom Yam Noodles",STEP1_OP1_TOOLTIP:"1 Packet = 352 kcal",STEP1_OP2_TOOLTIP:"1 Packet = 345 kcal",STEP1_OP3_TOOLTIP:"1 Packet = 358 kcal",STEP2_TITLE:"Pick up two types of protein to add to your noodles",STEP2_OP1_TITLE:"Beef",STEP2_OP2_TITLE:"Chicken",STEP2_OP3_TITLE:"Egg",STEP2_OP4_TITLE:"Prawn",STEP2_OP5_TITLE:"Squid",STEP2_OP6_TITLE:"Tofu",STEP2_OP1_TOOLTIP:"1 Serving (60g) = 66 kcal <br>1⁄2 Serving (30g) = 33 kcal",STEP2_OP2_TOOLTIP:"1 Serving (100g) = 150 kcal <br>1⁄2 Serving (50g) = 75 kcal",STEP2_OP3_TOOLTIP:"1 Serving (2 Medium) = 156 kcal <br>1⁄2 Serving (1 Medium) = 78 kcal",STEP2_OP4_TOOLTIP:"1 Serving (10 Medium) = 61 kcal <br>1⁄2 Serving (5 Medium) = 31 kcal",STEP2_OP5_TOOLTIP:"1 Serving (100g) = 75 kcal <br>1⁄2 Serving (50g) = 38 kcal",STEP2_OP6_TOOLTIP:"1 Serving (200g) = 134 kcal <br>1⁄2 Serving (100g) = 67 kcal",STEP3_TITLE:"Pick up two types of vegetables to add to your noodles",STEP3_OP1_TITLE:"Sawi",STEP3_OP2_TITLE:"Carrots",STEP3_OP3_TITLE:"Cauliflower",STEP3_OP4_TITLE:"Kailan",STEP3_OP5_TITLE:"Broccoli",STEP3_OP6_TITLE:"Lettuce",STEP3_OP7_TITLE:"Long Beans",STEP3_OP8_TITLE:"Bok Choy",STEP3_OP9_TITLE:"Tomatoes",STEP3_OP10_TITLE:"Mushroom",STEP3_OP1_TOOLTIP:"1 Serving (60g) = 18 kcal <br>1⁄2 Serving (30g) = 9 kcal",STEP3_OP2_TOOLTIP:"1 Serving (100g) = 35 kcal <br>1⁄2 Serving (50g) = 18 kcal",STEP3_OP3_TOOLTIP:"1 Serving (100g) = 32 kcal <br>1⁄2 Serving (50g) = 16 kcal",STEP3_OP4_TOOLTIP:"1 Serving (60g) = 26 kcal <br>1⁄2 Serving (30g) = 13 kcal",STEP3_OP5_TOOLTIP:"1 Serving (100g) = 29 kcal <br>1⁄2 Serving (50g) = 15 kcal",STEP3_OP6_TOOLTIP:"1 Serving (60g) = 11 kcal <br>1⁄2 Serving (30g) = 6 kcal",STEP3_OP7_TOOLTIP:"1 Serving (100g) = 33 kcal <br>1⁄2 Serving (50g) = 17 kcal",STEP3_OP8_TOOLTIP:"1 Serving (60g) = 10 kcal <br>1⁄2 Serving (30g) = 5 kcal",STEP3_OP9_TOOLTIP:"1 Serving (100g) = 22 kcal <br>1⁄2 Serving (50g) = 11 kcal",STEP3_OP10_TOOLTIP:"1 Serving (100g) = 23 kcal <br>1⁄2 Serving (50g) = 12 kcal",CARBOHYDRATES:"Carbohydrates",PROTEIN:"Protein",VEGETABLES:"Vegetables",PALMFUL:"A PALM SIZE",AFISTFUL:"A FISTFUL",HANDFUL:"A HANDFUL",TOTAL_ENERGY:"TOTAL ENERGY",ENERGY_EXPLAIN:"% MET FOR AVERAGE DAILY ENERGY NEED",KCAL:"KCAL",CHILDREN:"CHILDREN",SENIORS:"Adults",FEMALE:"FEMALE",MALE:"MALE",MAKE_NEW_BALANCED_BOWl:"Make a new Balanced Bowl",SHARE_RECIPE:"Share your recipe!",MIN_WARNING:"You must select at least 1 ingredient.",MAX_WARNING:"You can select up to 2 ingredients.",SERVE_YOUR_FAMILY_WITH_BALANCED_BOWLS:"Serve your family balanced bowls!",CAROUSEL_INSTRUCTION:"This visual guide aims to help you create balanced and wholesome meals using instant noodles and a variety of fresh ingredients for your family from the comfort of your own home!",SWIPE_RIGHT:"Swipe right to find out how!",STEP_1_DES:"Pick your favourite MAGGI® Noodle as your carbohydrate-of-choice",FISTFUL_1:"Fistful",PACKET:"Packet",STEP_2_DES:"Pick protein to add to your noodles",PALM_SIZE:"Palm Size",STEP_3_DES:"Pick vegetables to add to your noodles",HANDFUL_1:"1 Handful",SERVE_SIZE_SUGGESTED:"Serving sizes are just suggested approximate proportions of food you can include on your plate.",FIND_OUT_MORE:"Find out more.",AND_A_GLASS_OF_WATER:"and a glass of water",WHY_MAGGI:"Why MAGGI®?",WHY_MAGGI_DES_1:"MAGGI® 2-Minute Noodles is a good source of carbohydrate and can be used to prepare balanced dishes for your family - just like rice, cereal and potato!",WHY_MAGGI_DES_2:"In addition to the delicious taste and aroma that you love, you can also enjoy these benefits with MAGGI® 2-Minute Noodles:",SELECTED_INGREDIENT:"Selected Ingredients",SELECTED_INGREDIENT_DES_1:"MAGGI® Noodles are made from 100% Australia Wheat, which are also a good source of protein",SELECTED_INGREDIENT_DES_2:"MAGGI® along with Culinary Mastership has carefully selected herbs and spices to deliver the signature taste of MAGGI® 2-Minute Noodles.",CONVENIENCE:"Convenience",CONVENIENCE_DES:"MAGGI® Noodles can be prepared within 2-minutes",DELICIOUS_RECIPES:"Delicious Recipes",CURRY:"Curry",CURRY_DES:"MAGGI® 2-Minute Noodles Curry",CHICKEN:"Chicken",CHICKEN_DES:"MAGGI® 2-Minute Noodles Chicken",TOM_YAM:"Tom Yam",TOM_YAM_DES:"MAGGI® 2-Minute Tom Yam Noodles",A_PALM_SIZE:"A Palm Size",CHICKEN_BREAST_1:"Chicken Breast (boiled and pulled thinly)",CHICKEN_BREAST_2:"Chicken Breast (sliced thinly)",HARD_BOIL_EGG:"Hard-boil Egg",SAWI:"Mustard Leaf Sawi",CARROT:"Carrot",CARROT_SUB:"(sliced thinly)",CARROT_2:"Carrot",CARROT_2_SUB:"(sliced)",BOK_CHOY:"Bok Choy",PRAWN:"Prawn",SQUID:"Squid",CAULIFLOWER:"Cauliflower",STRAW_MUSHROOM:"Straw Mushrooms",CUSTOMMIZE_YOUR_BALANCED_BOWL:"Customise your own Balanced Bowl",STEP_HINT_1:"*If selecting one ingredient -> recommended portion: 1 Serving",STEP_HINT_2:"*If selecting two ingredients -> recommended portion: 1/2 Serving",ADULT_REC:"Based on the average daily energy requirement of {1}kcal for adults"}},phMG:function(e,n,t){"use strict";var a=t("51K9"),r=t("q1tI"),i=t.n(r),o=t("qhky");function c(e){var n=e.description,t=e.lang,r=e.meta,c=e.title,u=a.data.site,l=n||u.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{property:"og:image",content:"/static/maggi-noodle.png"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},n.a=c},qhky:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Ae}));t("wZFJ"),t("HQhv"),t("n7j8"),t("1dPr"),t("JHok"),t("OeI1"),t("MIFh"),t("sC2a"),t("sc67"),t("LagC"),t("pS08"),t("E5k/"),t("R48M"),t("m210"),t("4DPX"),t("U6Bt"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("AqHK");var a,r,i,o,c=t("17x9"),u=t.n(c),l=t("8+s/"),s=t.n(l),d=t("bmMU"),T=t.n(d),E=t("q1tI"),g=t.n(E),A=t("MgzW"),f=t.n(A),S="bodyAttributes",p="htmlAttributes",h="titleAttributes",m={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},I=(Object.keys(m).map((function(e){return m[e]})),"charset"),y="cssText",O="href",_="http-equiv",b="innerHTML",P="itemprop",k="name",C="property",L="rel",v="src",w="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",R="defer",B="encodeSpecialCharacters",G="onChangeClientState",j="titleTemplate",D=Object.keys(M).reduce((function(e,n){return e[M[n]]=n,e}),{}),Y=[m.NOSCRIPT,m.SCRIPT,m.STYLE],x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),H=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Q=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},U=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},J=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===n?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var n=Z(e,m.TITLE),t=Z(e,j);if(t&&n)return t.replace(/%s/g,(function(){return Array.isArray(n)?n.join(""):n}));var a=Z(e,N);return n||a||void 0},X=function(e){return Z(e,G)||function(){}},z=function(e,n){return n.filter((function(n){return void 0!==n[e]})).map((function(n){return n[e]})).reduce((function(e,n){return H({},e,n)}),{})},q=function(e,n){return n.filter((function(e){return void 0!==e[m.BASE]})).map((function(e){return e[m.BASE]})).reverse().reduce((function(n,t){if(!n.length)for(var a=Object.keys(t),r=0;r<a.length;r++){var i=a[r].toLowerCase();if(-1!==e.indexOf(i)&&t[i])return n.concat(t)}return n}),[])},V=function(e,n,t){var a={};return t.filter((function(n){return!!Array.isArray(n[e])||(void 0!==n[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+x(n[e])+'"'),!1)})).map((function(n){return n[e]})).reverse().reduce((function(e,t){var r={};t.filter((function(e){for(var t=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===n.indexOf(u)||t===L&&"canonical"===e[t].toLowerCase()||u===L&&"stylesheet"===e[u].toLowerCase()||(t=u),-1===n.indexOf(c)||c!==b&&c!==y&&c!==P||(t=c)}if(!t||!e[t])return!1;var l=e[t].toLowerCase();return a[t]||(a[t]={}),r[t]||(r[t]={}),!a[t][l]&&(r[t][l]=!0,!0)})).reverse().forEach((function(n){return e.push(n)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var c=i[o],u=f()({},a[c],r[c]);a[c]=u}return e}),[]).reverse()},Z=function(e,n){for(var t=e.length-1;t>=0;t--){var a=e[t];if(a.hasOwnProperty(n))return a[n]}return null},$=(a=Date.now(),function(e){var n=Date.now();n-a>16?(a=n,e(n)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,n){var t=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,d=e.title,T=e.titleAttributes;ue(m.BODY,a),ue(m.HTML,r),ce(d,T);var E={baseTag:le(m.BASE,t),linkTags:le(m.LINK,i),metaTags:le(m.META,o),noscriptTags:le(m.NOSCRIPT,c),scriptTags:le(m.SCRIPT,l),styleTags:le(m.STYLE,s)},g={},A={};Object.keys(E).forEach((function(e){var n=E[e],t=n.newTags,a=n.oldTags;t.length&&(g[e]=t),a.length&&(A[e]=E[e].oldTags)})),n&&n(),u(e,g,A)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,n){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(m.TITLE,n)},ue=function(e,n){var t=document.getElementsByTagName(e)[0];if(t){for(var a=t.getAttribute("data-react-helmet"),r=a?a.split(","):[],i=[].concat(r),o=Object.keys(n),c=0;c<o.length;c++){var u=o[c],l=n[u]||"";t.getAttribute(u)!==l&&t.setAttribute(u,l),-1===r.indexOf(u)&&r.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var d=i.length-1;d>=0;d--)t.removeAttribute(i[d]);r.length===i.length?t.removeAttribute("data-react-helmet"):t.getAttribute("data-react-helmet")!==o.join(",")&&t.setAttribute("data-react-helmet",o.join(","))}},le=function(e,n){var t=document.head||document.querySelector(m.HEAD),a=t.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(a),i=[],o=void 0;return n&&n.length&&n.forEach((function(n){var t=document.createElement(e);for(var a in n)if(n.hasOwnProperty(a))if(a===b)t.innerHTML=n.innerHTML;else if(a===y)t.styleSheet?t.styleSheet.cssText=n.cssText:t.appendChild(document.createTextNode(n.cssText));else{var c=void 0===n[a]?"":n[a];t.setAttribute(a,c)}t.setAttribute("data-react-helmet","true"),r.some((function(e,n){return o=n,t.isEqualNode(e)}))?r.splice(o,1):i.push(t)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return t.appendChild(e)})),{oldTags:r,newTags:i}},se=function(e){return Object.keys(e).reduce((function(n,t){var a=void 0!==e[t]?t+'="'+e[t]+'"':""+t;return n?n+" "+a:a}),"")},de=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(n,t){return n[M[t]||t]=e[t],n}),n)},Te=function(e,n,t){switch(e){case m.TITLE:return{toComponent:function(){return e=n.title,t=n.titleAttributes,(a={key:e})["data-react-helmet"]=!0,r=de(t,a),[g.a.createElement(m.TITLE,r,e)];var e,t,a,r},toString:function(){return function(e,n,t,a){var r=se(t),i=oe(n);return r?"<"+e+' data-react-helmet="true" '+r+">"+J(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(i,a)+"</"+e+">"}(e,n.title,n.titleAttributes,t)}};case S:case p:return{toComponent:function(){return de(n)},toString:function(){return se(n)}};default:return{toComponent:function(){return function(e,n){return n.map((function(n,t){var a,r=((a={key:t})["data-react-helmet"]=!0,a);return Object.keys(n).forEach((function(e){var t=M[e]||e;if(t===b||t===y){var a=n.innerHTML||n.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[t]=n[e]})),g.a.createElement(e,r)}))}(e,n)},toString:function(){return function(e,n,t){return n.reduce((function(n,a){var r=Object.keys(a).filter((function(e){return!(e===b||e===y)})).reduce((function(e,n){var r=void 0===a[n]?n:n+'="'+J(a[n],t)+'"';return e?e+" "+r:r}),""),i=a.innerHTML||a.cssText||"",o=-1===Y.indexOf(e);return n+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,n,t)}}}},Ee=function(e){var n=e.baseTag,t=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,d=void 0===s?"":s,T=e.titleAttributes;return{base:Te(m.BASE,n,a),bodyAttributes:Te(S,t,a),htmlAttributes:Te(p,r,a),link:Te(m.LINK,i,a),meta:Te(m.META,o,a),noscript:Te(m.NOSCRIPT,c,a),script:Te(m.SCRIPT,u,a),style:Te(m.STYLE,l,a),title:Te(m.TITLE,{title:d,titleAttributes:T},a)}},ge=s()((function(e){return{baseTag:q([O,w],e),bodyAttributes:z(S,e),defer:Z(e,R),encode:Z(e,B),htmlAttributes:z(p,e),linkTags:V(m.LINK,[L,O],e),metaTags:V(m.META,[k,I,_,C,P],e),noscriptTags:V(m.NOSCRIPT,[b],e),onChangeClientState:X(e),scriptTags:V(m.SCRIPT,[v,b],e),styleTags:V(m.STYLE,[y],e),title:K(e),titleAttributes:z(h,e)}}),(function(e){re&&te(re),e.defer?re=ne((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),Ee)((function(){return null})),Ae=(r=ge,o=i=function(e){function n(){return W(this,n),U(this,e.apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),n.prototype.shouldComponentUpdate=function(e){return!T()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,n){if(!n)return null;switch(e.type){case m.SCRIPT:case m.NOSCRIPT:return{innerHTML:n};case m.STYLE:return{cssText:n}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var n,t=e.child,a=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return H({},a,((n={})[t.type]=[].concat(a[t.type]||[],[H({},r,this.mapNestedChildrenToProps(t,i))]),n))},n.prototype.mapObjectTypeChildren=function(e){var n,t,a=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case m.TITLE:return H({},r,((n={})[a.type]=o,n.titleAttributes=H({},i),n));case m.BODY:return H({},r,{bodyAttributes:H({},i)});case m.HTML:return H({},r,{htmlAttributes:H({},i)})}return H({},r,((t={})[a.type]=H({},i),t))},n.prototype.mapArrayTypeChildrenToProps=function(e,n){var t=H({},n);return Object.keys(e).forEach((function(n){var a;t=H({},t,((a={})[n]=e[n],a))})),t},n.prototype.warnOnInvalidChildren=function(e,n){return!0},n.prototype.mapChildrenToProps=function(e,n){var t=this,a={};return g.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(n,t){return n[D[t]||t]=e[t],n}),n)}(Q(r,["children"]));switch(t.warnOnInvalidChildren(e,i),e.type){case m.LINK:case m.META:case m.NOSCRIPT:case m.SCRIPT:case m.STYLE:a=t.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:n=t.mapObjectTypeChildren({child:e,newProps:n,newChildProps:o,nestedChildren:i})}}})),n=this.mapArrayTypeChildrenToProps(a,n)},n.prototype.render=function(){var e=this.props,n=e.children,t=Q(e,["children"]),a=H({},t);return n&&(a=this.mapChildrenToProps(n,a)),g.a.createElement(r,a)},F(n,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),n}(g.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=Ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);Ae.renderStatic=Ae.rewind}).call(this,t("yLpj"))},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"==typeof window&&(t=window)}e.exports=t}}]);