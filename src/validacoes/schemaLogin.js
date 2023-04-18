const joi = require('joi')

const schemaLogin = joi.object({
 
    email: joi.string().email().required().messages({
        'string.email': 'Email inválido',
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O email não pode ser vazio'}),

    senha: joi.string().min(5).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.min': 'A senha precisa ter no mínimo 5 caracteres',
        'string.empty': 'O senha não pode ser vazio'
    })
})

module.exports = schemaLogin