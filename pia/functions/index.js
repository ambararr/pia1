/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
/*const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.updUser= functions.firestore
.document()
.onUpdate((chg,ctx)=>{
    const userId= ctx.params.userId;

    const newUsername= chg.after.data().userName;
    const newUseremail= chg.after.data().userEmail;

    admin.auth().updateUser(userId,{
        email: newUseremail,
        displayName: newUsername
    })
    .then((userRec)=>{
        console.log('user update',userRec);
    })
    .catch(error=>{
        console.log(error.message);
    })
})*/

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
