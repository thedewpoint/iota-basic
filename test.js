
   const IOTA = require('iota.lib.js');
   const receiveSeed = "PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM";
//    const seed = "FIJQA9MHPPTRKLJBY9PEPFGYLFSLZSVHNXHIZNBBATVTXM9LSPPGXOCKWDDCRSKGENS9NADYTDMTHORBB";
   const receiveAddress = "QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW";
//    const attachAddress = "EDPKBXLNQMKLNAMBDCXMBDWLSTAKLJLLJVBYQ9TO9CASSKQAFLXQHJBWFBMGKLU9PMHKTSLEWBOVHWSAD";
   var messageToSend = {
    'code': 'LMNOPQ'
};
   var iota = new IOTA({
    'provider': 'https://iotanode.us:443'
    });
    var messageTrytes = iota.utils.toTrytes(JSON.stringify(messageToSend));

var testMessage = [{
    'address': receiveAddress,
    'value': 0,
    'message': messageTrytes
}];






// iota.api.getInputs(receiveSeed,{},(e,inputs)=>{
//     console.log(JSON.stringify(inputs));
// });

// iota.api.sendTransfer(receiveSeed, 4, 14, testMessage, function(e) {
//     console.log("done");
//     console.log(e);
// });
// iota.api.getNewAddress(receiveSeed,{},function(e,address, transactions){
//     console.log(address);
// });
iota.api.getAccountData(receiveSeed, function(e, accountData) {

    console.log("Account data" + JSON.stringify(accountData));

    // Update address in case it's not defined yet
    if (accountData.addresses[0]) {

        address = iota.utils.addChecksum(accountData.addresses[accountData.addresses.length - 1]);
        accountData.transfers.forEach(function(transfer) {

            try {
                // console.log(JSON.stringify(transfer));
                var message = iota.utils.extractJson(transfer);

                message = JSON.parse(message);
                // console.log("JSON: ", message);


            } catch(e) {
                console.log("Transaction did not contain any JSON Data");
            }
        })
    } });
