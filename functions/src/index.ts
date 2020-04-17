import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();


import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = 'd-7014ddb9903440e990a9d85ab061329b';
sgMail.setApiKey(API_KEY);


export const genericEmail = functions.https.onCall(async (data, context) => {

    const msg = {
        to: 'william@williamdevine.ca',
        from: 'william@williamdevine.ca',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            name: data.name,
            email: data.email,
            message: data.message
        },
    };

    await sgMail.send(msg);


    return {success: true};
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
