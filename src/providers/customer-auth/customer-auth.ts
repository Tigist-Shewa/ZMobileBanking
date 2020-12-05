import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { USERS } from '../users-login/users-login';
@Injectable()
export class CustomerAuthService {

    getUsers(): User[] {
        return USERS;
    }
    getUsers2(): Promise<User[]> {
        return Promise.resolve(USERS);
    }
   getAuthenticatedUser(cif: number, input_password: string): Promise<User> {
        return this.getUsers2()
            .then(users => users.find(user => user.cifNo === cif && user.password === input_password ));
    }


}
