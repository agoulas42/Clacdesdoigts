var https = require('https');
var request = require('request');

/*
** data needed for get the token
*/
var requestToken = {
'username' : 'apitest001@clacdesdoigts.com',
'password' : 'Asdfasdf00',
'parameters': {
    'SMS_IN': "false",
    'CALL_IN': "true"
}
};
/*
// data needed for creation of new user
var requestData = {
'email' : 'apitest001@clacdesdoigts.com',
'password' : 'Asdfasdf00',
'firstName': 'Api',
'lastName' : 'Test 041',
'phoneNumber' : '+33799985881',
'parameters': {
    'SMS_IN': "false",
    'CALL_IN': "true"
}
};
 */
var options = {
hostname: 'https://dev.api.clacdesdoigts.com/',
path: 'v2/auth/token/validate',
method: 'POST',
headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <jwt_token>',
    'Accept-Language' : 'en'
}
};
 
var req = https.request(options, function(res) {
	var body =  new Buffer(0);
	res.on('data',function (chunk)
	{
		body =  Buffer.concat([body,chunk],body.length+chunk.length);
	});
	res.once('end', function ()
	{
		 console.log(body.toString('utf8'));
	});
});

req.end(new Buffer(JSON.stringify(requestToken)));
req.on('error', function(e) {
console.error(e);
});
