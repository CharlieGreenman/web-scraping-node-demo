var Xray = require("x-ray");

var xray = new Xray();
//a[rel="next"]
xray('https://libraries.io/search?q=redux', '.project',
    [{
        projectName: 'h5 a',
        title: 'div:nth-child(2)',
        // link: 'td:nth-child(3) a@href'
    }]
)
    .paginate('a[rel="next"]@href')
    // .limit(6)
    .write('./results.json');
