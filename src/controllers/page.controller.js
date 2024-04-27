import multer from "multer";
import { logger } from "express-glass";
import { InternalServerError, ValidationError } from "../utils/ApiError";
import responseUtil from "../utils/Response";
import { objectToLogStr } from "../utils/ObjectToLog";
import pageService from "../services/page.service";
import { upload } from "../utils/FileUpload";
import pageValidator from "../validators/page.validator";

const pageController = {};

pageController.add = async (req, res, next) => {
  logger().info(`page add request, data = ${objectToLogStr(req.body)}`);
  upload.array("images", 10)(req, res, async (err) => {
    try {
      if (err instanceof multer.MulterError) {
        throw new InternalServerError(err);
      } else if (err) {
        throw new InternalServerError(err);
      }

      const validationResult = pageValidator.add.validate(req.body);
      if (validationResult.error) {
        throw new ValidationError(validationResult.error.message);
      }
      const page = validationResult.value;
      page.images = req.files;

      const result = await pageService.add(page);
      responseUtil.success(res, result);
    } catch (error) {
      logger().error(`page add failed, error = ${error}`);
      next(error)
    }
  });
};

pageController.getAll = async (req, res, next) => {
  try {
    logger().info(`page get all request`);

    const result = await pageService.getAll(req.query);
    responseUtil.success(res, result);
  } catch (error) {
    logger().info(`page get all failed, error = ${error}`);
    next(error)
  }
}

export default pageController;
