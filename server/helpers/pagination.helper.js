const constant = require('../constant');

module.exports = {
    getItemsPerPage: (limit) => {
        return parseInt(limit) || constant.DEFAULT_LIMIT;
    },

    getCurrentPageIndex: (page) => {
        return parseInt(page) || constant.DEFAULT_PAGE;
    },

    getPreviousPageIndex: (pageIndex) => {
        const index = parseInt(pageIndex) - 1;
        return index > 0 ? index : null;
    },

    getNextPageIndex: (pageIndex, noOfPages) => {
        const index = parseInt(pageIndex) + 1;
        return index <= noOfPages ? index : null;
    },

    getSkip: (pageIndex, itemsPerPage) => {
        return ((parseInt(pageIndex) - 1) * parseInt(itemsPerPage));
    },

    getNoOfPages: (count, itemsPerPage) => {
        const noOfPages = (parseInt(count) / parseInt(itemsPerPage));
        return Math.ceil(noOfPages);
    }
};