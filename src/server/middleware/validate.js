const { body, validationResult } = require('express-validator');

const validateCaptureRequest = [
  body('mode').isIn(['FULL_SCREEN', 'REGION', 'WINDOW']).withMessage('Invalid capture mode'),
  body('settings').isObject().withMessage('Settings must be an object'),
  body('settings.format').isIn(['PNG', 'JPEG', 'BMP']).withMessage('Invalid image format'),
  body('settings.quality').isInt({ min: 0, max: 100 }).withMessage('Quality must be an integer between 0 and 100'),
  body('settings.delay').isInt({ min: 0 }).withMessage('Delay must be a non-negative integer'),
  body('settings.excludeWindows').isArray({ min: 0 }).withMessage('Exclude Windows must be an array of strings').optional(),
  body('settings.excludeWindows.').isString().withMessage('Exclude Windows must be an array of strings'),
  body('settings.saveTo').isIn(['Desktop', 'Documents', 'Pictures']).withMessage('Invalid save location'),
  body('settings.customFileName').isString().withMessage('Custom file name must be a string').optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateCaptureRequest,
};