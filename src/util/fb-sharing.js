const addFbScript = () => {
	const script = document.createElement("script")
	script.src = 'https://connect.facebook.net/es_LA/sdk.js'
	script.async = true
	document.body.appendChild(script)
}

export const shareToFb = () => {
	window.fbAsyncInit = function () {
		/* eslint-disable */
		FB.init({
			appId: '742210866536115',
			autoLogAppEvents: true,
			xfbml: true,
			version: 'v7.0'
		});
	};
	addFbScript();
	setTimeout(() => {
		/* eslint-disable */
		FB.ui({
			method: 'share',
			href: 'https://filamentstg.github.io/maggi/'
		}, function (response) { });
	}, 100)
}
