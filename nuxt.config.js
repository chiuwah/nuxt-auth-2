export default {
    server: {
        host: '0.0.0.0'
    },
    plugins: [{ src:'~/plugins/amplify.js', mode: 'client'} ],
    buildModules: ['@nuxtjs/tailwindcss']
}
