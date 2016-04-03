const config =  {
	muntiplyer: 1.5,
	wrapSize: 400,
	blockWidth: 20,
	blockHeight: 200,
	sBlockHeight: 160

};

exports.get =  function(prop) {

	var muntiplyer = muntiplyer ? muntiplyer : 1;

	return config[prop] * config.muntiplyer;

};