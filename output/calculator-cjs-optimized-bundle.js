(function (modules, entryIds) {
    var cache = {};
    function require(id) {
        if (!cache[id]) {
            cache[id] = {
                exports: {}
            };
            modules[id].call(
                cache[id].exports,
                require,
                cache[id],
                cache[id].exports
            );
        }

        return cache[id].exports;
    }
    entryIds.forEach(require);
}({
    1: function (require, module, exports) {
        module.exports = {
            add: function (a, b) {
                return a + b;
            }
        };
    },
    2: function (require, module, exports) {
        const calculator = require(1);
        console.log(calculator.add(1, 2));
    }
}, [2]));