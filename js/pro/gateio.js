'use strict';

//  ---------------------------------------------------------------------------

const gate = require ('./gate.js');

// ---------------------------------------------------------------------------

module.exports = class gateio extends gate {
    describe () {
        return this.deepExtend (super.describe (), {
            'alias': true,
            'id': 'gateio',
        });
    }
};
