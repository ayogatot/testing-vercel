import multer from "multer";
import { logger } from "express-glass";
import { ValidationError } from "../utils/ApiError";
import responseUtil from "../utils/Response";
import { objectToLogStr } from "../utils/ObjectToLog";
import applicantValidator from "../validators/applicant.validator";
import applicantService from "../services/applicant.service";
import { uploadLocal } from "../utils/FileUpload";

const applicantController = {};

applicantController.add = async (req, res, next) => {
  uploadLocal.single("cv")(req, res, async (err) => {
    logger().info(`applicant add request, data = ${objectToLogStr(req.body)}`);

    const validationResult = applicantValidator.add.validate(req.body);
    if (validationResult.error) {
      throw new ValidationError(validationResult.error.message);
    }

    try {
      if (err instanceof multer.MulterError) {
        throw new InternalServerError(err);
      } else if (err) {
        throw new InternalServerError(err);
      }

      validationResult.value.cv = req.file;
      const applicant = await applicantService.add(validationResult.value);
      responseUtil.success(res, applicant);
    } catch (error) {
      logger().error(`applicant registration failed, error = ${error}`);
      next(error);
    }
  });
};

applicantController.getAll = async (req, res, next) => {
  try {
    logger().info(
      `get all applicant request, data = ${objectToLogStr(req.query)}`
    );
    const result = await applicantService.getAll(req.query);
    responseUtil.success(res, result);
  } catch (e) {
    logger().error(`applicant login failed, error = ${e}`);
    next(e);
  }
};

export default applicantController;
