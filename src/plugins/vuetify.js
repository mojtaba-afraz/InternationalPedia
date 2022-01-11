import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
Vue.use(Vuetify);

function checkTheme() {
    return localStorage.getItem('theme') === 'dark';
}

export default new Vuetify({
    rtl: false,
    theme: {
        dark:checkTheme() ,
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#fff',
                text:'#000000',
                gray:'#4f4f4f',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
            dark: {
                primary: '#2b3743',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
        },
    },
});
