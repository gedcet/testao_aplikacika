const express1 = require("./app");
const { LISTINING_PORT, NETWORK_CARD } = require("./utils/config");

express1.listen(LISTINING_PORT, NETWORK_CARD, function(){
    console.log("http://"+NETWORK_CARD+":"+LISTINING_PORT)
})