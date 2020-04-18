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
            $('#mobileHeader #mobileCont .navIcons').css({height: 'unset'});
            $('#navHam').hide();
            $('#navX').addClass('displayImp');
        });


        $('#mobileHeader #mobileCont .navIcons #navX, #mobileHeader #mobileCont .links .link').click(() => {
            // Retract Menu
            $('#mobileHeader #mobileCont').attr('class', '');

            // Hide Links
            $('#mobileHeader #mobileCont .links').css('display', 'none');

            // Change Icon
            $('#mobileHeader #mobileCont .navIcons').css({height: '20vh'});
            $('#navHam').css('display', 'flex');
            $('#navX').removeClass('displayImp');

        });

    }


}
