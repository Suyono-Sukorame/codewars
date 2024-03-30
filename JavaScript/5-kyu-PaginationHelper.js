class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        const totalItems = this.itemCount();
        const totalPages = this.pageCount();
        const currentPage = pageIndex + 1;

        if (currentPage < 1 || currentPage > totalPages) {
            return -1;
        }

        if (currentPage < totalPages) {
            return this.itemsPerPage;
        } else {
            return totalItems % this.itemsPerPage || this.itemsPerPage;
        }
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}
