import {Component, OnInit, HostListener, Inject, ViewChild} from '@angular/core';
// import {trigger, state, transition, style, animate} from '@angular/animations';
// import {DOCUMENT} from '@angular/common';

import {OwlOptions} from 'ngx-owl-carousel-o';

import * as $ from 'jquery';

import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AngularFireFunctions} from '@angular/fire/functions';
// import {AngularFireAuth} from '@angular/fire/auth';
// import * as firebase from 'firebase/app';

// import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClientModule} from '@angular/common/http';

// import {ContactFormService} from '../models/contact-form.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // Contact Form input field criteria
    messageMe = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.pattern('^^(?!\\s*$).+')
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
        ]),
        message: new FormControl('', [
            Validators.required,
            Validators.pattern('^(?!\\s*$).+')
        ])
    });

    // Work experience slide options
    customOptions: OwlOptions = {
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        navSpeed: 500,
        navText: ['<', '>'],
        items: 3,
        center: true,
        startPosition: 2,
        margin: 1000,
        responsive: {
            0: {
                items: 1
            }
        },
        nav: false
    };

    // model = new ContactFormService('', '', '');

    submitted = false;

    submitMessage() {
        this.submitted = true;

        if (this.messageMe.valid) {
            const callable = this.fun.httpsCallable('genericEmail');
            callable({
                name: this.messageMe.get('name').value,
                email: this.messageMe.get('email').value,
                message: this.messageMe.get('message').value
            }).subscribe();

            this.messageMe.reset();

            $('#emailConfirm').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 500);

            setTimeout(() => {
                $('#emailConfirm').css({opacity: 1.0}).animate({opacity: 0.0}, 500);
            }, 2000);

            console.log('Valid Form.');
        } else {
            console.log('Invalid Form.');
        }
        // this.submitted = false;
    }

    constructor(private fun: AngularFireFunctions) {
    }

    ngOnInit() {
        // this.model = new ContactFormService('', '', '');
    }

    // sendMail() {
    //     const callable = this.fun.httpsCallable('genericEmail');
    //     callable({
    //         name: 'name',
    //         email: 'test@test.ca',
    //         message: 'Email from Angular'
    //     }).subscribe();
    // }

    // Sticky header
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {
        if (window.pageYOffset > 550) {
            $('#navbar').slideDown();
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').slideUp(() => {
                $('#navbar').removeClass('sticky');
            });
        }
    }


}
