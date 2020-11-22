export default {
    head: {
        title: 'Nuxt-Amplify Login',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'my website description'
            },
        ],
    },
    server: {
        host: '0.0.0.0'
    },
    plugins: [{ src:'~/plugins/amplify.js', mode: 'client'} ],
    modules: ['nuxt-i18n'],
    buildModules: ['@nuxtjs/tailwindcss'],
    i18n: {
        locales: [
            { 
                code: 'en', 
                iso: 'en', 
                file: 'en.js',
                name: 'English'
            },
            { 
                code: 'nl', 
                iso: 'nl-NL', 
                file: 'nl-NL.js',
                name: 'Nederlands'
            }
        ],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
        },
        lazy: true,
        seo: true,
        langDir: 'i18n/'
    }
}
