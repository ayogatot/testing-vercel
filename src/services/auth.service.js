import { logger } from "express-glass";
import { objectToLogStr } from "../utils/ObjectToLog";
import { DuplicateRecordError, NotFoundError, UnauthorizedError } from "../utils/ApiError";
import User from "../models/User";
import JwtService from "../modules/jwt.module";

const userService = {};

userService.register = async (user) => {
  logger().info(`add user, user = ${objectToLogStr(user)}`);
  const existingUser = await User.findOne({ where: { email: user.email } });

  if (!existingUser) {
    user.role = "ADMIN";
    user.created_at = new Date().getTime();
    const newUser = await User.create(user);
    logger().info(`user created, user = ${newUser.id}`);
    return newUser
  }

  throw new DuplicateRecordError("User already exists");
};

userService.login = async (body) => {
  logger().info(`user login, user = ${objectToLogStr(body)}`);
  const user = await User.findOne({ where: { email: body.email } });

  if (user) {
    const isPasswordMatch = await user.checkPassword(body.password);
    if (isPasswordMatch) {
      const token = JwtService.jwtSign(user.id);
      return { user, token };
    }

    throw new UnauthorizedError("Password does not match");
  }

  throw new NotFoundError("User not found");
};

export default userService;
