import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private user: Object = {};
    constructor() {}

    setUser (userLoged: Object) {
        this.user = userLoged;
    }

    getUser (userLoged: Object) {
        return this.user;
    }
} 