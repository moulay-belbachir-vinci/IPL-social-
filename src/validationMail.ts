export class ValidationMail {

    verifyString(email:string):boolean {
        if(email.includes("."))return true;

        return email.includes("@");
        
    }
}