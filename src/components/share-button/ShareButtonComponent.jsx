
import React from 'react';
import { window } from "browser-monads";
export default class ShareButtonComponent extends React.PureComponent {
  state = {}

  initFbSdk = (options) => {
    if (typeof window !== "undefined") {
      return new Promise(resolve => {
        window.fbAsyncInit = function () {
          const defaults = {
            cookie: true, xfbml: true, autoLogAppEvents: true
          }
          options = { ...defaults, ...options }
          window.FB.init(options)
          resolve()
        };
        /* eslint-disable */
        (function (d, s, id) {
          const fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) { return; }
          const js = d.createElement(s); js.id = id
          js.src = '//connect.facebook.net/en_US/sdk.js'
          fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))
        /* eslint-enable */
      })
    }
  }
  getFbSdk = (options) => {
    if (typeof window !== "undefined") {
      return new Promise(async resolve => {
        if (window.FB) {
          resolve(window.FB)
        } else {
          await this.initFbSdk(options)
          resolve(window.FB)
        }
      })
    }
  }
 async handleshare() {
    console.log(111);
    if (typeof window !== "undefined") {
      const sdk = await this.getFbSdk({ appId: '1173539899688442', version: 'v7.0' })
      sdk.ui(
        {
          method: `share`,
          caption: "Maggi",
          description: "Make your ballanced bowl",
          href: "https://filamentstg.github.io/maggi/",
        },
        function (response) {
          if (response) {
          } else {
          }
        }
      );
      }
  }
  render() {
    return (
      <span onClick={() => this.handleshare()}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill="black" />
          <path
            d="M9 2.07193V3.65853H8.09141C7.37951 3.65853 7.24654 4.01315 7.24654 4.52394V5.65976H8.94222L8.71665 7.43867H7.24654V12H5.47566V7.43867H4V5.65976H5.47566V4.34971C5.47566 2.82926 6.37277 2 7.68064 2C8.3055 2 8.84369 2.04808 9 2.07193Z"
            fill="white"
          />
        </svg>
      </span>
    );
  }
}