export default function joiValidationMiddleware(
  joiCreateSchema,
  joiUpdateSchema
) {
  return {
    validateCreateUser: (req, res, next) => {
      // TODO
      next();
    },
    validateUpdateUser: (req, res, next) => {
      // TODO
      next();
    },
  };
}
