// import { Op } from 'sequelize';

export default function getPagesQuery(query) {
    const conditions = {};
  
    if (query.page) {
      conditions.page = query.page;
    }

    if (query.parent_page_id) {
      conditions.parent_page_id = query.parent_page_id;
    }

    conditions.parent_page_id = null;
  
    return conditions;
  }
  