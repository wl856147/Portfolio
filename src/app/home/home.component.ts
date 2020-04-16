import {Component, OnInit, HostListener, Inject, ViewChild} from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';
import {DOCUMENT} from '@angular/common';

import {OwlOptions} from 'ngx-owl-carousel-o';

import * as $ from 'jquery';

import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AngularFireFunctions} from '@angular/fire/functions';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
        dots: false,
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
        nav: true
    };

    constructor(public afAuth: AngularFireAuth, private fun: AngularFireFunctions) {
    }

    ngOnInit() {

    }

    sendEmail() {
        const callable = this.fun.httpsCallable('sendEmail');

        callable({
            name: 'Bobby Bugger',
            email: 'bob@email.ca',
            message: 'Test Message!'
        })
            .subscribe();
    }

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
