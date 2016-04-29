
/**
 * @depends {3rdparty/jquery-2.1.0.js}
 * @depends {3rdparty/bootstrap.js}
 * @depends {3rdparty/big.js}
 * @depends {3rdparty/jsbn.js}
 * @depends {3rdparty/jsbn2.js}
 * @depends {3rdparty/pako.js}
 * @depends {3rdparty/webdb.js}
 * @depends {3rdparty/growl.js}
 * @depends {crypto/curve25519.js}
 * @depends {crypto/curve25519_.js}
 * @depends {crypto/base58.js}
 * @depends {crypto/blake32.js}
 * @depends {crypto/keccak32.js}
 * @depends {crypto/passphrasegenerator.js}
 * @depends {crypto/sha256worker.js}
 * @depends {crypto/3rdparty/cryptojs/aes.js}
 * @depends {crypto/3rdparty/cryptojs/sha256.js}
 * @depends {crypto/3rdparty/jssha256.js}
 * @depends {crypto/3rdparty/seedrandom.js}
 * @depends {util/converters.js}
 * @depends {util/extensions.js}
 * @depends {util/nxtaddress.js}
 */
var Waves = (function(Waves, $, undefined) {
	

	"use strict";

    var Waves = [];

    Waves.server = 'http://82.165.138.42:6869';
    Waves.epoch = 1460678400;
    Waves.seed = '';
    Waves.hasLocalStorage = _checkDOMenabled();
    var stateInterval;
	var stateIntervalSeconds = 30;

    

    Waves.createAccount = function (publicKey) {




    }

    Waves.getAddressesBalance = function (address, callback) {

        $.getJSON(Waves.server+'/addresses/balance/'+address, function(response) {

            return callback(response);

        });

    }



	$(document).ready(function() {

        Waves.seed = 'PrivateKeyString';

        Waves.address = 'o1y1pkQyXCDWrtNQZ9K4u6KW1RiFZTnJ1';

        var addressBalance = Waves.getAddressesBalance(Waves.address, function (balance) {
            console.log(balance);

            $("#balance").html('Address: '+Waves.address+' with a Balance of: '+Waves.format(balance.balance)+' Waves');
        });
        

        //Get seedArrayBytes
        //var seedArrayBytes = converters.stringToByteArray(Waves.seed);
        
        $("#secret").html(Waves.seed);

        var publicKey = Waves.getPublicKey(Waves.seed);
        //console.log(publicBytes);
        //var base58publicKey = Waves.to_b58(publicBytes,'123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');

        $("#publicKey").html(publicKey);

        var privateKey = Waves.getPrivateKey(Waves.seed);
        //console.log(privateBytes);

        $("#privateKey").html(privateKey);

        //address generation
		


        $.getJSON(Waves.server+'/blocks/last', function(response) {
            
            var thisTime = (response.timestamp / 10000000) + Waves.epoch;

            $('#mydiv').html('Last Waves Block: '+ Waves.formatTimestamp( response.timestamp ));

            

        });
        
	});


	return Waves;
}(Waves || {}, jQuery));

/*
$(document).ready(function() {
	//Waves.init();
});
*/

function _checkDOMenabled() {
    var storage;
    var fail;
    var uid;
    try {
        uid = String(new Date());
        (storage = window.localStorage).setItem(uid, uid);
        fail = storage.getItem(uid) != uid;
        storage.removeItem(uid);
        fail && (storage = false);
    } catch (exception) {
    }
    return storage;
}