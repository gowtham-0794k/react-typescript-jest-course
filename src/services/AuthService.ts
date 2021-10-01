import { User } from "../model/Models";

export class AuthService {
    public async login(userName:string,password:string):Promise <User | undefined>{
        if(userName === 'user' && password === '123456') return {
            userName:userName,email:'some@email.com'
        }
        return undefined
    }
}