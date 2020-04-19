import {Component, OnInit, HostListener} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AngularFireFunctions} from '@angular/fire/functions';
import * as $ from 'jquery';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

    submitMessage() {
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
            $('#emailError').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 500);

            setTimeout(() => {
                $('#emailError').css({opacity: 1.0}).animate({opacity: 0.0}, 500);
            }, 2000);

            console.log('Invalid Form.');
        }
    }

    constructor(private fun: AngularFireFunctions) {
    }

    ngOnInit() {
    }

    // Sticky header
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {

        $('.arrow').css('opacity', 1 - $(window).scrollTop() / 550);

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
