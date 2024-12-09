// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    aos: {
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1200, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    },

    app: {
        head: {
            title: 'NOHU AI Kulübü | Yapay Zeka ile Geleceği Şekillendir',
            script: [
                {
                    src: 'https://kit.fontawesome.com/a2c0ddffa6.js',
                    async: true,
                    crossorigin: 'anonymous',
                },
                {
                    src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
                }
            ],
            htmlAttrs: {
                lang: 'tr',
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    hid: 'description',
                    name: 'description',
                    content: "Niğde Ömer Halisdemir Üniversitesi Yapay Zeka Kulübü, yapay zeka alanında öğrenmek, projeler geliştirmek ve yenilikçi fikirler üretmek isteyen öğrencileri bir araya getiriyor. Kulübümüzün etkinliklerini, projelerini ve eğitim fırsatlarını keşfedin."
                },
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'theme-color', content: '#1bb566'},
                {name: 'color-scheme', content: 'dark'},
                {name: 'og:title', content: 'NOHU AI Kulübü | Yapay Zeka ile Geleceği Şekillendir'},
                {name: 'og:site_name', content: 'NOHU AI Kulübü'},
                {
                    name: 'og:description',
                    content: "Niğde Ömer Halisdemir Üniversitesi Yapay Zeka Kulübü, yapay zeka alanında öğrenmek, projeler geliştirmek ve yenilikçi fikirler üretmek isteyen öğrencileri bir araya getiriyor. Kulübümüzün etkinliklerini, projelerini ve eğitim fırsatlarını keşfedin."
                },
                {name: 'og:image', content: "/favicon.ico"},
                {name: 'twitter:card', content: "summary_large_image"},
                {name: 'twitter:title', content: "NOHU AI Kulübü | Yapay Zeka ile Geleceği Şekillendir"},
                {
                    name: 'twitter:description',
                    content: "Niğde Ömer Halisdemir Üniversitesi Yapay Zeka Kulübü, yapay zeka alanında öğrenmek, projeler geliştirmek ve yenilikçi fikirler üretmek isteyen öğrencileri bir araya getiriyor. Kulübümüzün etkinliklerini, projelerini ve eğitim fırsatlarını keşfedin."
                },
                {name: 'twitter:image', content: "/favicon.ico"},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ],
        }
    },

    modules: ['@nuxt/image', 'nuxt-aos']
})
