// const client = require("@mailchimp/mailchimp_marketing");
// require('dotenv').config();

// client.setConfig({
//     apiKey: process.env.MAILCHIMP_API_KEY,
//     server: "us17"
// })

// const LISTID = process.env.MAILCHIMP_API_KEY;

// exports.handler = async (event, context) => {
//     const userEmail = event.queryStringParameters.email;
//     if (!userEmail) {
//         return {
//             statusCode: 404,
//             body: 'Email query parameter not provided.'
//         }
//     }

//     try {
//         const response = await client.lists.addListMember(LISTID, {
//             email_adress: userEmail,
//             status: 'subscribed'
//         })
    
//         return { statusCode: 200, body: JSON.stringify(response)}
//     } catch (error) {
//         return { statusCode: 500, body: error.toString() }
//     }
// }