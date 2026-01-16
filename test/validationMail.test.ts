import { ValidationMail } from "../src/validationMail";


describe('Validation Email', ()=>{

    describe('validate an email', ()=> {
        const validationMail = new ValidationMail;


        it("should return true if the email contain . ", ()=> {


            const actual = validationMail.verifyDot("aaaa.aaaa");

            expect(actual).toBe(true);
        })

        it("should return false if the email end with .", ()=>{

            const actual = validationMail.verifyDot("gggg.");

            expect(actual).toBe(false);
        });

        it("should return false if there is space in the string", ()=> {

            const actual = validationMail.verifySpace("ggg gggg.ggg");

            expect(actual).toBe(false);

        });
        
        it("should return false if there is no text before the @", ()=> {

            const actual = validationMail.verifyTextBeforeAndAfter("@.ggggg");

            expect(actual).toBe(false);

        });

        it("should return true if the email is good", ()=> {
            const actual = validationMail.verifyString("moulay.belbachir@student.vinci.be");

            expect(actual).toBe(true);
        })

        
    })
})