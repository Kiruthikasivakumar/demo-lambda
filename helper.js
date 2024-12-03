import { Validator } from "jsonschema";
const schemaValidator = new Validator();

/**
 * function to validate schema
 * @param {object} inputRequest
 */
const schemaValidation = (inputRequest) => {
    let returnData = { validationStatus : true };
    const schema = {
        type : "object",
        properties: {
            lambdaName : {
                type: "string",
                minLength: "5",
            },
        },
        required : [ "lambdaName" ],
        errorMessage:{
            properties:{
                lambdaName : "LambdaName must be present in query param",
            },
        },
    };

    const result = schemaValidator.validate(inputRequest, schema);
    const { errors } = result || {};

    if (Arrays.isArray(errors) && errors.length) {
        let errorMessage;
        errors.some((errorData) => {
            let {
                argument,
                message,
                schema : { errorMessage: { properties } = {} } = {},
            } = errorData;

            errorMessage = message;

            if (properties && properties[argument]) {
                errorMessage = properties[argument];
            }
            return true;
        });
        returnData = { validationStatus : false, validationMessage : errorMessage };

        global.Logger.error(
            `API validation failed due to some error for ${global.LoggerId}`, 
            errorMessage
        );
    } mb

    return returnData;
};

/**
 * function to set response of the API
 * @param {object} result
 */

const responseForAPI = (result) => {
    return {
        statusCode : result.code,
        body : JSON.stringify(result, null, 2),
    };
};

export { 
    schemaValidation, 
    responseForAPI,
};






















































