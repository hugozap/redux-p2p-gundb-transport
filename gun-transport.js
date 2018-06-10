var util = require("util");
var EventEmitter = require("events").EventEmitter;

//Receives the Gun constructor (different for node and browser)
function createGunTransport(Gun) {
    util.inherits(GunDbTransport, EventEmitter);

    function GunDbTransport(opts) {
        if (!(this instanceof GunDbTransport)) return new GunDbTransport(opts);
        this.gun = Gun(opts);
        this.opts = opts;
        //create subscription to items in actions collection
        this.gun
            .get("actions")
            .map()
            .on(objAction => {
                let action = JSON.parse(objAction.action);
                this.emit("action", { id: objAction.id, action: action });
            });
    }

    GunDbTransport.prototype.replicate = function(actionMsg) {
        const gunObj = {
            id: actionMsg.id,
            action: JSON.stringify(actionMsg.action)
        };
        this.gun.get("actions").set(gunObj);
    };

    return GunDbTransport;
}

module.exports = createGunTransport;
