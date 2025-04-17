import { sanitizeAndLowercase } from "./sanitize-and-lowercase"

describe('Sanitize and lowercase function', () => {
    it('should receive a string and return it without accents', () => {
        const returnedString = sanitizeAndLowercase('Olá, meu nome é João! Tenho 25 anos.\nMoro em São Paulo - SP\t🚀 #programador @dev 😊');
        expect(returnedString).toBe("ola meu nome e joao tenho 25 anos\nmoro em sao paulo  sp\t programador dev ");
    })
})