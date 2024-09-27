// import { Op } from 'sequelize';

export default function getAbsenceQuery(query) {
    const conditions = {};

    if(query.is_active) {
      conditions.is_active = query.is_active === "true" ;
    }

    return conditions;
  }
  