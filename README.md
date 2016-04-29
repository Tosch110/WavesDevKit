# NxtDevKit for Javascript
Javascript development framework for Nxt. Create transactions with Javascript, get the most used Nxt functions. 

# Why?

The NxtDevKit is a light version of the full NRS which was developed by Nxt developers to work with the Nxt API and JavaScript in the Nxt Wallet.
Setup the server in nrs.js (default localhost) to use your Nxt node, any transaction that will go through the wrapper will be signed with Javascript and then submitted to the Nxt API.

No passphrase will leave your JavaSscript, check NRS.sendRequest

# Installation

### Public Node

Find a public node with open API and cors enabled on 

http://nxtpeers.com

Insert this into server variable of js/nrs.js

Hallmarked nodes provide an extra layer of security.

### Localhost

Extraced from NRS Version 1.7.5 https://nxtforum.org/nrs-releases/nrs-v1-7-5/
Please install Nxt locally and open cors in the configuration as explained here:

	# Enable Cross Origin Filter for the API server.
	nxt.apiServerCORS=true
	​
	# Enable Cross Origin Filter for NRS user interface server.
	nxt.uiServerCORS=true

restart Nxt

https://medium.com/@Damelon/coding-for-nxt-crypto-platform-1-c3580b4cfd38#.vwf0q0b2a


## Nxt Api

When Nxt is running go to: 

http://localhost:7876/test

NxtWiki API documentation:

http://nxtwiki.org/wiki/The_Nxt_API

# Use NRS functions

use NRS functions, to submit Nxt requests, calculate from Assets, NQT, Currencies, Votes and more.
Use the Nxt Data Cloud, Marketplace, Alias System, see more on https://nxt.org

## Examples

	 NRS.sendRequest("getBlockchainStatus", {
					
	}, function(response, input) {
		if (!response.errorCode) {
			console.log(response);
			console.log(input);

			$("#blockchainStatus").html('Current Block: '+response.numberOfBlocks+' - Current Nxt Time '+response.time);

		} else {
			console.log('Could not connect to Nxt. Please enable cors like explained on https://github.com/Tosch110/NxtDevKit');
		}
	});

# Benefits

Using the NRS.sendRequest will be a secure wrapper for your Nxt transactions. When you POST a transaction with passphrase, it will

1) create the transaction with JavaScript

2) Sign the transaction with passphrase

3) broadcast transaction to local /public Nxt API

# Documentation

## Variables

https://github.com/Tosch110/NxtDevKit/blob/master/js/nrs.js

//Modify to set your Nxt Node

NRS.server = "http://localhost:7876";

NRS.database = null;

NRS.databaseSupport = false; 


## Functions 

Use NRS functions, so you have not to write your own for:

https://github.com/Tosch110/NxtDevKit/blob/master/js/nrs.sever.js

NRS.setServerPassword = function (password)

NRS.sendOutsideRequest = function (url, data, callback, async)

NRS.sendRequest = function (requestType, data, callback, isAsync)

NRS.processAjaxRequest = function (requestType, data, callback, isAsync)

NRS.verifyAndSignTransactionBytes = function (transactionBytes, signature, requestType, data, callback, response, extra)

NRS.verifyTransactionBytes = function (byteArray, requestType, data, attachment)

NRS.verifyTransactionTypes = function (byteArray, transaction, requestType, data, pos, attachment)

NRS.broadcastTransactionBytes = function (transactionData, callback, originalResponse, originalData)

https://github.com/Tosch110/NxtDevKit/blob/master/js/nrs.util.js

NRS.formatVolume = function (volume)

NRS.formatWeight = function (weight)

NRS.formatOrderPricePerWholeQNT = function (price, decimals)

NRS.calculateOrderPricePerWholeQNT = function (price, decimals, returnAsObject)

NRS.calculatePricePerWholeQNT = function (price, decimals)

function calculateOrderTotalImpl (quantityQNT, priceNQT)

NRS.calculateOrderTotalNQT = function (quantityQNT, priceNQT)

NRS.calculateOrderTotal = function (quantityQNT, priceNQT)

NRS.calculatePercentage = function (a, b, rounding_mode)

NRS.convertToNXT = function (amount, returnAsObject)

NRS.amountToPrecision = function (amount, decimals)

NRS.convertToNQT = function (currency)

NRS.convertToQNTf = function (quantity, decimals, returnAsObject) 

NRS.convertToQNT = function (quantity, decimals)

NRS.format = function (params, no_escaping)

NRS.formatQuantity = function (quantity, decimals, no_escaping)

NRS.formatAmount = function (amount, round, no_escaping)

NRS.fromEpochTime = function (epochTime)

NRS.toEpochTime = function (currentTime)

NRS.formatTimestamp = function (timestamp, date_only, isAbsoluteTime) 

NRS.isPrivateIP = function (ip)

NRS.convertToHex16 = function (str)

NRS.convertFromHex16 = function (hex)

NRS.convertFromHex8 = function (hex)

NRS.convertToHex8 = function (str)

NRS.getFormData = function ($form, unmodified)

NRS.mergeMaps = function (mergedMap, toMap, skipAttributes) 

NRS.convertNumericToRSAccountFormat = function (account)

NRS.getAccountTitle = function (object, acc)

NRS.formatStyledAmount = function (strAmount, round)

NRS.getUnconfirmedTransactionsFromCache = function (type, subtype, fields, single)

NRS.completeUnconfirmedTransactionDetails = function (unconfirmedTransaction)

NRS.hasTransactionUpdates = function (transactions)

NRS.setCookie = function (name, value, days)

NRS.getCookie = function (name)

NRS.deleteCookie = function (name)

NRS.validateDecimals = function (maxFractionLength, charCode, val, e) 

NRS.getUrlParameter = function (sParam)

NRS.getUtf8Bytes = function (str)

NRS.getTransactionStatusIcon = function (phasedEntity)

NRS.phasingControlObjectToPhasingParams = function(controlObj)

NRS.strToUTF8Arr = function(str)

function byteArrayToBigInteger(byteArray)

NRS.generateToken = function(message, secretPhrase)


