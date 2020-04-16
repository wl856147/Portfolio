// const functions = require('firebase-functions');

// Firebase Config
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();


// Sendgrid Config
import * as sgMail from '@sendgrid/mail';
const API_KEY = functions.config().sendgrid.key;
// const TEMPLATE_ID = functions.config().sendgrid.template;


// Functions
export const sendEmail = functions.https.onCall(async (data, context) => {

    const msg = {
        to: 'william@williamdevine.ca',
        from: data.email,
        templateID: 'd-f53b27a07048416bb61c2c059f166657',
        dynamic_template_data: {
            Sender_Name: data.name,
            Sender_Email: data.email,
            Sender_Message: data.message
        },
    };

    await sgMail.send(msg);


    return { success: true };


});
