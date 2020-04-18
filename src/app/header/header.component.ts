import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        $('#mobileHeader #navHam').click(() => {
            // Expand Menu
            $('#mobileHeader #mobileCont').addClass('mobileHeaderDivHover');

            // Show Links
            $('#mobileHeader #mobileCont .links').css('display', 'flex');

            // Change Icon
            $('#mobileHeader #mobileCont .navIcons').css({width: 'unset', height: 'unset'});
            $('#mobileHeader #mobileCont #nav1').hide();
            $('#mobileHeader #mobileCont #navX').css('display', 'flex');
            $('#mobileHeader #mobileCont #nav2').addClass('nav2Add');

        });


        $('#mobileHeader #mobileCont .navIcons #navX, #mobileHeader #mobileCont .links .link').click(() => {
            console.log('here');
            // Retract Menu
            $('#mobileHeader #mobileCont').attr('class', '');

            // Hide Links
            $('#mobileHeader #mobileCont .links').css('display', 'none');

            // Change Icon
            $('#mobileHeader #mobileCont .navIcons').css({width: '100vw', 'margin-bottom': '20vh'});
            $('#mobileHeader #mobileCont #nav1').css('display', 'flex');
            $('#mobileHeader #mobileCont #navX').hide();
            $('#mobileHeader #mobileCont #nav2').removeClass('nav2Add');

        });

    }


}
