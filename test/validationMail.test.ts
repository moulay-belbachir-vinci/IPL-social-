import { ValidationMail } from "../src/validationMail";


describe('Validation Email', ()=>{

    describe('validate an email', ()=> {

        it("should return true if the email contain @ ", ()=> {

            const validationMail = new ValidationMail;

            const actual = validationMail.verifyString("@");

            expect(actual).toBe(true);
        })
        
    })
})