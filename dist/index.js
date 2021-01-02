"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var java;
(function (java) {
    var util;
    (function (util) {
        var Assertions = (function () {
            function Assertions() {
            }
            Assertions.isNumber = function (v) {
                return typeof v === "number";
            };
            Assertions.isUndefined = function (v) {
                return typeof v === "undefined";
            };
            return Assertions;
        }());
        var ArrayList = (function () {
            function ArrayList(capacity) {
                this.store = capacity ? new Array(capacity) : [];
            }
            ArrayList.prototype[Symbol.iterator] = function () {
                var _a, _b, element, e_1_1;
                var e_1, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 5, 6, 7]);
                            _a = __values(this.store), _b = _a.next();
                            _d.label = 1;
                        case 1:
                            if (!!_b.done) return [3, 4];
                            element = _b.value;
                            return [4, element];
                        case 2:
                            _d.sent();
                            _d.label = 3;
                        case 3:
                            _b = _a.next();
                            return [3, 1];
                        case 4: return [3, 7];
                        case 5:
                            e_1_1 = _d.sent();
                            e_1 = { error: e_1_1 };
                            return [3, 7];
                        case 6:
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7];
                        case 7: return [2];
                    }
                });
            };
            ArrayList.prototype.iterator = function () {
                var _a, _b, element, e_2_1;
                var e_2, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 5, 6, 7]);
                            _a = __values(this.store), _b = _a.next();
                            _d.label = 1;
                        case 1:
                            if (!!_b.done) return [3, 4];
                            element = _b.value;
                            return [4, element];
                        case 2:
                            _d.sent();
                            _d.label = 3;
                        case 3:
                            _b = _a.next();
                            return [3, 1];
                        case 4: return [3, 7];
                        case 5:
                            e_2_1 = _d.sent();
                            e_2 = { error: e_2_1 };
                            return [3, 7];
                        case 6:
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                            return [7];
                        case 7: return [2];
                    }
                });
            };
            ArrayList.prototype.add = function (valueOrIndex, value) {
                if (!Assertions.isNumber(valueOrIndex))
                    this.store.push(valueOrIndex);
                else if (!Assertions.isUndefined(value))
                    this.store[valueOrIndex] = value;
                else if (Assertions.isNumber(valueOrIndex) &&
                    Assertions.isUndefined(value))
                    this.store.push(valueOrIndex);
                return value;
            };
            ArrayList.prototype.addAll = function (collection) {
                var e_3, _a;
                try {
                    for (var collection_1 = __values(collection), collection_1_1 = collection_1.next(); !collection_1_1.done; collection_1_1 = collection_1.next()) {
                        var item = collection_1_1.value;
                        this.add(item);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (collection_1_1 && !collection_1_1.done && (_a = collection_1.return)) _a.call(collection_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return collection;
            };
            ArrayList.prototype.set = function (valueOrIndex, value) {
                if (!Assertions.isNumber(valueOrIndex))
                    this.store.push(valueOrIndex);
                else if (!Assertions.isUndefined(value))
                    this.store[valueOrIndex] = value;
                else if (Assertions.isNumber(valueOrIndex) &&
                    Assertions.isUndefined(value))
                    this.store.push(valueOrIndex);
                return value;
            };
            ArrayList.prototype.get = function (index) {
                return this.store[index];
            };
            ArrayList.prototype.remove = function (valueOrIndex) {
                if (Assertions.isNumber(valueOrIndex)) {
                    var value = this.store[valueOrIndex];
                    delete this.store[valueOrIndex];
                    return value;
                }
                else if (!Assertions.isNumber(valueOrIndex)) {
                    var index = this.store.indexOf(valueOrIndex);
                    var value = this.store[index];
                    delete this.store[index];
                    return value;
                }
                else
                    return;
            };
            ArrayList.prototype.removeAll = function (collection) {
                var e_4, _a;
                try {
                    for (var collection_2 = __values(collection), collection_2_1 = collection_2.next(); !collection_2_1.done; collection_2_1 = collection_2.next()) {
                        var item = collection_2_1.value;
                        if (this.contains(item))
                            this.remove(item);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (collection_2_1 && !collection_2_1.done && (_a = collection_2.return)) _a.call(collection_2);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return collection;
            };
            ArrayList.prototype.clear = function () {
                this.store = [];
            };
            ArrayList.prototype.isEmpty = function () {
                return this.store.length === 0;
            };
            ArrayList.prototype.size = function () {
                return this.store.length;
            };
            ArrayList.prototype.toArray = function () {
                return this.store;
            };
            ArrayList.prototype.indexOf = function (value) {
                return this.store.indexOf(value);
            };
            ArrayList.prototype.lastIndexOf = function (value) {
                return this.store.lastIndexOf(value);
            };
            ArrayList.prototype.contains = function (value) {
                return this.store.includes(value);
            };
            ArrayList.prototype.containsAll = function (collection) {
                var a = collection.toArray();
                return this.store.every(function (e) { return a.indexOf(e) !== -1; });
            };
            ArrayList.prototype.subList = function (start, end) {
                var res = new ArrayList();
                for (var i = start; i < end; i++)
                    res.add(this.store[i]);
                return res;
            };
            ArrayList.prototype.sort = function (comparator) {
                this.store.sort(comparator.compareTo);
                return this;
            };
            return ArrayList;
        }());
        util.ArrayList = ArrayList;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
exports.default = java;
//# sourceMappingURL=index.js.map