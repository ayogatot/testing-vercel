import { request, response } from 'express';
import { IsApiError, ApiError } from '../utils/ApiError.js';
import responseUtil from '../utils/Response.js';
const currentEnv = process.env.NODE_ENV || 'development';
/**
 * Global error handler for all routes
 * @param {ApiError} err
 * @param {request} req
 * @param {response} res
 */
export default (err, _req, res, next) => {
  if (res.headersSent) return next(err);
  if (IsApiError(err)) return responseUtil.fail(res, err.statusCode, `${err.type}: ${err.message}`);
  if (currentEnv === 'development') {
  return responseUtil.fail(res, 500, `${err.type}: ${err.message}`);
  }
  return responseUtil.fail(res, 500, 'Something went wrong');
};
