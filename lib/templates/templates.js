'use strict';

module.exports = {
	asciiAFEB() {
		return String.raw`
       ___       _______  _______ .______
      /   \     |   ____||   ____||   _  \
     /  ^  \    |  |__   |  |__   |  |_)  |
    /  /_\  \   |   __|  |   __|  |   _  <
   /  _____  \  |  |     |  |____ |  |_)  |
  /__/     \__\ |__|     |_______||______/

        `;
	},

	banner() {
		return ['/*!',
			' * <%= pkg.name %> - <%= pkg.description %>',
			' * @author <%= pkg.author %>',
			' * @version v<%= pkg.version %>',
			' * @link <%= pkg.homepage %>',
			' * @license <%= pkg.license %>',
			' */',
			''
		];
	},

	bannerES6(pkg) {
		return `${pkg.name} - ${pkg.description}
@author ${pkg.author}
@version v${pkg.version}
@link ${pkg.homepage}
@license ${pkg.license}`;
	},

	mapping() {
		return [{
			oldKey: 'jsConcat.enabled',
			newKey: 'js.concat'
		},
		{
			oldKey: 'jsConcat.finalName',
			newKey: 'js.concatFilename'
		},
		{
			oldKey: 'cssConcat.enabled',
			newKey: 'css.concat'
		},
		{
			oldKey: 'cssConcat.finalName',
			newKey: 'css.concatFilename'
		},
		{
			oldKey: 'sass.includePath',
			newKey: 'css.sassIncludePath'
		},
		{
			oldKey: 'less.includePath',
			newKey: 'css.lessIncludePath'
		},
		{
			oldKey: 'sass.enabled',
			newKey: 'css.language',
			values: [{
				oldValue: true,
				newValue: 'sass'
			}]
		},
		{
			oldKey: 'less.enabled',
			newKey: 'css.language',
			values: [{
				oldValue: true,
				newValue: 'less'
			}]
		},
		{
			oldKey: 'jsConcat'
		},
		{
			oldKey: 'cssConcat'
		},
		{
			oldKey: 'sass'
		},
		{
			oldKey: 'less'
		}
		];
	}
};