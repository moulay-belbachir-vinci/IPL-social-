export class ValidationMail {

    verifyString(email:string):boolean {
        if(this.verifyDot(email) && this.verifySpace(email))return true;

        return email.includes("@");
        
    }

    verifyDot(email:string):boolean {

        if(!email.includes(".")){
            return false;
        }

        if(email.endsWith(".")){
            return false;
        }

        return true;
    }

    verifySpace(email:string):boolean {
        if(email.includes(" ")){
            return false;
        }
        return true;
    }
}