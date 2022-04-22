const sidebar = require('./sidebar.js');

module.exports = {
    base:'/',
    title: '(ÖHVPS) API İLKE VE KURALLARI',
    footer: 'Made by  with ❤',
    description: ' ',
    plugins: [
        ['@vuepress/search', {searchMaxSuggestions: 10}]
    ],
    themeConfig: {

        searchMaxSuggestions: 10,
        footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
        sidebar,
        logo: "/assets/TCMB_logo.svg.png"
    }
}
