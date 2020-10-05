module.exports = {
	siteMetadata: {
		title: `Maggi - Serve your family Balanced Bowls`,
		description: `MAGGI® 2-Minute Noodles are carbohydrate-rich foods like rice, cereal and potato that can be used to prepare balanced dishes for your family! Apart from the delicious taste and aroma that you know and love, you can also enjoy the following benefits of cooking with MAGGI® 2-Minute Noodles`,
		author: `@filament`,
	},
	pathPrefix: '/',
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		// {
		// 	resolve: "gatsby-source-filesystem",
		// 	options: {
		// 		name: "fonts",
		// 		path: `${__dirname}/src/fonts/`
		// 	}
		// },
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				data: `@import "src/style/app";`,
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/MYBB Favicon-01.png`, // This path is relative to the root of the site.
			},
		},

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
