module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
    purge: {
        // mode: 'all',
        // content: ["./src/**/*.svelte"]
    },
    options: {
        // https://github.com/tailwindlabs/tailwindcss/discussions/1731#discussioncomment-294774
        defaultExtractor: content => [
          ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
          ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
        ]
    }
    
}
