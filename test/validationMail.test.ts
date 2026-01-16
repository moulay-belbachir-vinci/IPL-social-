import { ValidationMail } from "../src/validationMail";


describe('Validation Email', ()=>{

    describe('validate an email', ()=> {
        const validationMail = new ValidationMail;

        it("should return true if the email contain @ ", ()=> {


            const actual = validationMail.verifyString("@");

            expect(actual).toBe(true);
        })

        it("should return true if the email contain . ", ()=> {


            const actual = validationMail.verifyString("aaaa.aaaa");

            expect(actual).toBe(true);
        })

        it("should return false if the email end with .", ()=>{

            const actual = validationMail.verifyString("gggg.");

            expect(actual).toBe(false);
        });
        
    })
})