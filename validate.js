const Joi = require('joi');
const errorFunction = require('./utils/errorFunction');

const schema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(30)
        .required(),

    year: Joi.number()
        .integer()
        .min(1800),

    director: Joi.string(),
    rating: Joi.string()
})


const userValidation = async (req, res, next) => {
	const payload = {
		title: req.body.title,
		year: req.body.year,
		director: req.body.director,
        rating: req.body.rating,
	};

	const { error } = schema.validate(payload);
	if (error) {
		res.status(406);
		return res.json(
			errorFunction(true, `Error in User Data : ${error.message}`)
		);
	} else {
		next();
	}
};

module.exports = userValidation;
