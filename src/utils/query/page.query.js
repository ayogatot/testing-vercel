export default function getPagesQuery(query) {
    const conditions = {};
  
    if (query.page) {
      conditions.page = query.page;
    }

    conditions.parent_page_id = null
  
    return conditions;
  }
  