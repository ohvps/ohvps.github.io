const sidebar = require('./sidebar.js');

module.exports = {
    base:'/',
    title: '(ÖHVPS) API İLKE VE KURALLARI',
    footer: 'Made by  with ❤',
    description: ' ',
    plugins: [
     
        'flexsearch', {
            /*
              Plugin custom options
            */
            maxSuggestions: 20,    // how many search suggestions to show on the menu, the default is 10.
            //searchPaths: ['path1', 'path2'],    // an array of paths to search in, keep it null to search all docs.
            searchHotkeys: ['s'],    // Hot keys to activate the search input, the default is "s" but you can add more.
            searchResultLength: 60,    // the length of the suggestion result text by characters, the default is 60 characters.
            splitHighlightedWords: ' ',  // regex or string to split highlighted words by, keep it null to use flexsearch.split
            noExtraSpaceAfterHtmlTag: false,   // don't add extra spaces in highlighted results
            /*
              Default FlexSearch options
              To override the default options you can see available options at https://github.com/nextapps-de/flexsearch
            */
            search_options: {
              encode: "icase",
              tokenize: "full",
              resolution: 20,
              doc: {
                id: "key",
                field: ["title", "content", "headers"],
              }
            }
          },
    ],
    themeConfig: {
      
        searchMaxSuggestions: 20,
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
