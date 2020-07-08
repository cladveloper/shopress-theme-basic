import env from 'dotenv';
env.config();

export default{
    css: ['@/assets/styles/main.sass'],
    plugins: [{
        src: '~/plugins/components.js'
    },{
        src: '~/plugins/shopress.js'
    }],
    head: {
        meta: [
            {name:"viewport", content:"width=device-width, initial-scale=1"}
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap'}
        ],
    },
    env: {
        hola: 'hola mundo jaja'
    },
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        baseURL: process.env.NODE_ENV !== 'production' ? process.env.API_URL_DEV : process.env.API_URL_PRODUCTION
    },
    loading: {
        color: '#16a085',
        height: '5px'
    },
    server: {
        port: process.env.PORT || 3000
    },
}