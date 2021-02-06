import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import css from "rollup-plugin-css-only"
// import replace from "@rollup/plugin-replace"
import fs from "fs"
import format from "./format.js"
import { terser } from "rollup-plugin-terser"
import dev from 'rollup-plugin-dev'
import livereload from 'rollup-plugin-livereload'
 
const production = !process.env.ROLLUP_WATCH

export default {
    input: "src/main.js",
    output: [
        {
            sourcemap: true,
            format: "iife",
            name: "app",
            file: "assets/bundle.js"
        }
    ],
    plugins: [
        format({ 
            load: true // I think this fixes certain issues
        }), 
        svelte({
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production
            },
            preprocess: require("./svelte.config").createPreprocessors(!production)
        }),
        // we'll extract any component CSS out into
        // a separate file - better for performance
        css({
            output(styles) {
                console.log("Writing styles...")
                fs.writeFileSync("assets/bundle.css", styles)
            }
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ["svelte"]
        }),
        commonjs(),
        production && terser(),
        !production && dev({ dirs: ["."], spa: "index.html" }),
        !production && livereload("public")
    ],
    watch: {
        clearScreen: false
    }
}


