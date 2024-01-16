export default ({ Vue, options, router, siteData }) => {
    const customizeTitles = (pages) => {
      return pages.map((page) => {
        debugger
        if(page.regularPath.includes('content')){
            page.title = `${page.title} -> ${page.regularPath.split('/')[1]}`;
        }else{
            page.title = `${page.title}`;
        }
      
        return page;
      });
    };
    siteData.pages = customizeTitles(siteData.pages.reverse());
  };