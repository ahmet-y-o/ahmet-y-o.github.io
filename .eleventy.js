import { permalinkFilter, tocFilter, getUniqueProjectNames } from "./src/_data/helpers.js";
import * as sass from "sass";
import * as path from "path";
import { IdAttributePlugin } from "@11ty/eleventy";
import sitemap from "@quasibit/eleventy-plugin-sitemap";

/** @param {import("@11ty/eleventy").UserConfig} config */
export default (config) => {

	// plugins
	config.addPlugin(IdAttributePlugin);

	// collections
	config.addCollection('project', (collection) => {
		return collection
			.getFilteredByGlob('./src/projects/**/*.md')
			.sort((data1, data2) => data1.data.order - data2.data.order);
	});

	// custom filters
	config.addFilter('tocFilter', tocFilter);
	config.addFilter('permalinkFilter', (content) => {
		return permalinkFilter(config.getFilter("slugify"), content);
	});
	config.addFilter('uniqueProjectNames', getUniqueProjectNames);

	// custom shortcodes
	config.addShortcode("blockquote", (content, author) => {
		return `
			<blockquote class="athelas ml0 pl4 pv2 mv4 black-90 bl bw2 b--blue">
			<p class="f5 f4-m f3-l lh-copy measure mt0">
				${content}
			</p>
			<p class="f6 ttu tracked fs-normal">${author}</p>
			</blockquote>
		`;
	})


	// static assets
	config.addPassthroughCopy("./src/**/*.png");


	config.addTemplateFormats("scss");

	// extensions
	config.addExtension("scss", {
		outputFileExtension: "css", // optional, default: "html"

		// `compile` is called once per .scss file in the input directory
		compile: function (inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			let result = sass.compileString(inputContent, {
				loadPaths: [
					parsed.dir || ".",
					this.config.dir.includes
				]
			});
			return (data) => {
				return result.css;
			};
		}
	});


	// plugins
	config.addPlugin((config) => {
		return sitemap(config, {
			sitemap: {
				hostname: "https://ahmet-y-o.github.io",
			},
		})
	})


	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};