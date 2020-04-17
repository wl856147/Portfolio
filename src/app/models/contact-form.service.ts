import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContactFormService {
    constructor(
        public name: string,
        public email: string,
        public message: string

    ) {  }
}
