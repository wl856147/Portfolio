import {Component, OnInit, HostListener, Inject, ViewChild} from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';
import {DOCUMENT} from '@angular/common';

import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
    // ,
    // animations: [
    //     trigger('fade',
    //         [
    //             state('void', style({opacity: 0})),
    //             transition(':enter', [animate(200)]),
    //             transition(':leave', [animate(200)]),
    //         ]
    //     )]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

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
