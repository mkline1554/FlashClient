import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    userValue = new Subject<string>();
    userIdValue = new Subject<string>();

    set currentUser(username: string) {
        this.userValue.next(username);
        localStorage.setItem('currentUser', username);
    }

    get currentUser() {
        let current = localStorage.getItem('currentUser');

        if (current != null && current != undefined)
        {
            return current;
        }
        else
        {
            return '';
        }
    }

    set currentUserId(userId: string){
        this.userIdValue.next(userId);
        localStorage.setItem('currentUserId', userId);

    }

    get currentUserId() {
        let currentUserId = localStorage.getItem('currentUserId');

        if (currentUserId != null && currentUserId != undefined)
        {
            return currentUserId;
        }
        else
        {
            return '';
        }
    }
}