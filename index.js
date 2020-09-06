const express = require('express')
const app=express()
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'keepitsecret';

app.get('/',(res,req)=>
{
res.render('index')
})
function encryptText(text){
const cipher = crypto.createCipher(algorithm,password);
let encrypted = cipher.update(text,'utf8','hex');
encrypted += cipher.final('hex');
return encrypted;
}

function decryptText(text){
const decipher = crypto.createDecipher(algorithm,"keepitsecret");
let decrypted = decipher.update(text,'hex','utf8');
decrypted += decipher.final('utf8');
return decrypted;
}
let encrypted = encryptText("javascript");
console.log(encrypted)
console.log(decryptText(encrypted));
