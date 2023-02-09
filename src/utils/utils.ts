import Joi from "joi";
import jwt from "jsonwebtoken";
export const createCourseSchema = Joi.object().keys({
  title: Joi.string().lowercase().required(),
  description: Joi.string().lowercase().required(),
  image: Joi.string().required(),
  price: Joi.number().required(),
});

export const updateCourseSchema = Joi.object().keys({
  title: Joi.string().lowercase(),
  description: Joi.string().lowercase(),
  image: Joi.string().required(),
  price: Joi.number().required(),
});

export const registerSchema = Joi.object()
  .keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string()
      .trim()
      .lowercase()
      .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .required(),
    phonenumber: Joi.string()
      .length(11)
      .pattern(/^[0-9]+$/)
      .required(),
    address: Joi.string().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    confirm_password: Joi.ref("password"),
  })
  .with("password", "confirm_password");

export const loginSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});






export const createuserSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string()
  .trim()
  .lowercase()
  .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  .required(),
  password: Joi.string().required(),
  confirm_password: Joi.ref("password"),
}) .with("password", "confirm_password");

export const createStateSchema = Joi.object().keys({
  name: Joi.string().lowercase().required(),
 });

 export const createLgaSchema = Joi.object().keys({
  name: Joi.string().required(),
  stateId: Joi.string().required(),
 });

 export const createWardSchema = Joi.object().keys({
  name: Joi.string().required(),
  lgaId: Joi.string().required(),
 });

 export const createCitizenSchema= Joi.object()
 .keys({
   fullname: Joi.string().required(),
   gender: Joi.string().required(),
   address: Joi.string().required(),
   phonenumber: Joi.string()
     .length(11)
     .pattern(/^[0-9]+$/)
     .required(),
     wardId: Joi.string().required(),
 })


//Generate Token
export const generateToken = (user: { [key: string]: unknown }): unknown => {
  const pass = process.env.JWT_SECRET as string;
  return jwt.sign(user, pass, { expiresIn: "7d" });
};

export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
