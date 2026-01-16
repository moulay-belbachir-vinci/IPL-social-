export class ValidationMail {

    verifyString(email:string):boolean {

        return this.verifyDot(email) && this.verifySpace(email) && this.verifyTextBeforeAndAfter(email);
        
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

    verifyTextBeforeAndAfter(email:string):boolean {
        const texts = email.split("@");
        return texts.length ==2 && texts[0].length > 0 && texts[1].length > 0;
    }
}