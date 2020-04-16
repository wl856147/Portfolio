import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireFunctionsModule} from '@angular/fire/functions';


const firebaseConfig = {
    apiKey: 'AIzaSyD6iKIEqLiHcLH-F4PeOky7noTawJuhiWc',
    authDomain: 'williamdevine-4fea1.firebaseapp.com',
    databaseURL: 'https://williamdevine-4fea1.firebaseio.com',
    projectId: 'williamdevine-4fea1',
    storageBucket: 'williamdevine-4fea1.appspot.com',
    messagingSenderId: '53267135434',
    appId: '1:53267135434:web:356d38ccaefd68aa23ad33',
    measurementId: 'G-QNDHF3Q54W'
};


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CarouselModule,
        BrowserAnimationsModule,

        ReactiveFormsModule,

        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireFunctionsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
