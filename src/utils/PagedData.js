
const pagedData = (items, totalItems, totalPages, currentPage, hasNext) => {
    return {
      items: items,
      total_items: totalItems,
      total_pages: totalPages,
      current_page: currentPage,
      has_next: hasNext
    }
  }
  
  export default pagedData
  