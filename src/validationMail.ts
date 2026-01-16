export class ValidationMail {

    verifyString(email:string):boolean {

        return email.includes("@");
        
    }
}