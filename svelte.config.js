// see https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/in-general.md#deduplicating-your-configs

// eslint-disable-next-line
const sveltePreprocess = require("svelte-preprocess")

// using sourceMap as an example, but could be anything you need dynamically
function createPreprocessors(sourceMap) {
    return sveltePreprocess({
        sourceMap,
        postcss: {
            plugins: [require("tailwindcss")]
        }
    })
}

module.exports = {
    preprocess: createPreprocessors(true),
    createPreprocessors
}
