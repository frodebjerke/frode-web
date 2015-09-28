const ga = require('react-google-analytics');
const analyticsID = process.env.ANALYTICS_ID;

if (analyticsID) {
    ga('create', 'UA-67109802-1', 'auto');

    module.exports.pageView = function (title) {
        ga('send', 'pageview', {
            page: title
        });
    }
}

else {
    module.exports.pageView = function () {};
}
