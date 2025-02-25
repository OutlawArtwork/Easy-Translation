'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function _0x5386(){var _0x2ac9d5=['2EaUXMA','400lifaeo','321965lYbsTE','142218CJHkaM','createContext','10372800mudihl','2653lfMVKk','11OtguCz','18462UvfLCl','323500WDoygD','541797WIEAHd','20XKAkwW','4344352nPzxFY'];_0x5386=function(){return _0x2ac9d5;};return _0x5386();}var _0x26e89e=_0x2a1e;(function(_0x5c7c70,_0x2c5ab4){var _0x2194f3=_0x2a1e,_0x261155=_0x5c7c70();while(!![]){try{var _0x556072=-parseInt(_0x2194f3(0x1c1))/0x1+parseInt(_0x2194f3(0x1bf))/0x2*(-parseInt(_0x2194f3(0x1c9))/0x3)+-parseInt(_0x2194f3(0x1c8))/0x4*(-parseInt(_0x2194f3(0x1bd))/0x5)+parseInt(_0x2194f3(0x1c7))/0x6*(-parseInt(_0x2194f3(0x1c5))/0x7)+parseInt(_0x2194f3(0x1be))/0x8+-parseInt(_0x2194f3(0x1c2))/0x9*(-parseInt(_0x2194f3(0x1c0))/0xa)+-parseInt(_0x2194f3(0x1c6))/0xb*(-parseInt(_0x2194f3(0x1c4))/0xc);if(_0x556072===_0x2c5ab4)break;else _0x261155['push'](_0x261155['shift']());}catch(_0x1bc0c3){_0x261155['push'](_0x261155['shift']());}}}(_0x5386,0xa9805));function _0x2a1e(_0x28cdc7,_0x578c32){var _0x538612=_0x5386();return _0x2a1e=function(_0x2a1e59,_0x360052){_0x2a1e59=_0x2a1e59-0x1bd;var _0x22292e=_0x538612[_0x2a1e59];return _0x22292e;},_0x2a1e(_0x28cdc7,_0x578c32);}var Language=React[_0x26e89e(0x1c3)]('en');

function LanguageProvider(_a) {
    var _this = this;
    var url = _a.url, supported = _a.supported, children = _a.children;
    var _b = React.useState(null), loaded = _b[0], setLoaded = _b[1];
    React.useEffect(function () {
        var fetchLanguage = function () { return __awaiter(_this, void 0, void 0, function () {
            var file, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = url ? url : "/locale";
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("".concat(url, "/").concat(getLanguage(supported), ".json"))];
                    case 2:
                        file = _b.sent();
                        if (!file.ok)
                            throw new Error("File not found: ".concat(file.status));
                        _a = setLoaded;
                        return [4 /*yield*/, file.json()];
                    case 3:
                        _a.apply(void 0, [_b.sent()]);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        throw new Error("-Easy Translation-: ".concat(error_1.message));
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fetchLanguage();
    }, []);
    // Fallback to the top supported language
    var getLanguage = function (supported) {
        var language = navigator === null || navigator === void 0 ? void 0 : navigator.language.split("-")[0];
        if (supported.includes(language)) {
            return language;
        }
        return supported[0];
    };
    if (!loaded)
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    return jsxRuntime.jsx(Language.Provider, { value: loaded, children: children });
}

function _0x5d1f(_0x44810e,_0x2c37d7){var _0x3ce5ec=_0x3ce5();return _0x5d1f=function(_0x5d1ff1,_0x354782){_0x5d1ff1=_0x5d1ff1-0x1d7;var _0x4171b4=_0x3ce5ec[_0x5d1ff1];return _0x4171b4;},_0x5d1f(_0x44810e,_0x2c37d7);}(function(_0x2f4414,_0x44bcb0){var _0x40b18a=_0x5d1f,_0x4effc1=_0x2f4414();while(!![]){try{var _0x160e74=-parseInt(_0x40b18a(0x1d7))/0x1*(parseInt(_0x40b18a(0x1d8))/0x2)+-parseInt(_0x40b18a(0x1db))/0x3*(-parseInt(_0x40b18a(0x1de))/0x4)+-parseInt(_0x40b18a(0x1dc))/0x5*(-parseInt(_0x40b18a(0x1da))/0x6)+-parseInt(_0x40b18a(0x1d9))/0x7*(-parseInt(_0x40b18a(0x1df))/0x8)+parseInt(_0x40b18a(0x1e3))/0x9+parseInt(_0x40b18a(0x1e1))/0xa*(parseInt(_0x40b18a(0x1e2))/0xb)+-parseInt(_0x40b18a(0x1e0))/0xc*(parseInt(_0x40b18a(0x1dd))/0xd);if(_0x160e74===_0x44bcb0)break;else _0x4effc1['push'](_0x4effc1['shift']());}catch(_0x85a254){_0x4effc1['push'](_0x4effc1['shift']());}}}(_0x3ce5,0x2280f));function _0x3ce5(){var _0xe7188d=['65skQzqG','258452rnKpmG','64LGVOKm','391116ktPXJH','209430UlQsjA','33kOdDWH','96444ETYEYJ','140282EYSarP','4gcqLBv','141302qbdCwx','342VOIFQZ','12tgBkmk','8015nmvnEA'];_0x3ce5=function(){return _0xe7188d;};return _0x3ce5();}

(function(_0x2a0951,_0x2efb33){var _0x55cccd=_0x40f5,_0x18295b=_0x2a0951();while(!![]){try{var _0x16e7a6=-parseInt(_0x55cccd(0x87))/0x1*(-parseInt(_0x55cccd(0x88))/0x2)+parseInt(_0x55cccd(0x9a))/0x3*(-parseInt(_0x55cccd(0x97))/0x4)+-parseInt(_0x55cccd(0x98))/0x5*(parseInt(_0x55cccd(0x8c))/0x6)+parseInt(_0x55cccd(0x99))/0x7*(parseInt(_0x55cccd(0x96))/0x8)+-parseInt(_0x55cccd(0x92))/0x9*(-parseInt(_0x55cccd(0x85))/0xa)+-parseInt(_0x55cccd(0x8b))/0xb+parseInt(_0x55cccd(0x9b))/0xc*(parseInt(_0x55cccd(0x8d))/0xd);if(_0x16e7a6===_0x2efb33)break;else _0x18295b['push'](_0x18295b['shift']());}catch(_0x28ae92){_0x18295b['push'](_0x18295b['shift']());}}}(_0xca0c,0xdfb98));var translateText=function(_0x4f1bd7,_0x44248e,_0x30ac92,_0x437a27,_0x36b986){var _0x57e1fd=_0x40f5;_0x437a27=getCategory(_0x437a27,_0x4f1bd7);try{if('MSkex'!==_0x57e1fd(0x8f)){var _0xcbd283=_0x30ac92[_0x57e1fd(0x8e)]()[_0x57e1fd(0x93)](/@([\w]+)@/g,function(_0x92bb47,_0x29ea07){var _0x155b5d=_0x57e1fd;if(_0x155b5d(0x90)===_0x155b5d(0x90))return _0x44248e[_0x437a27][_0x29ea07];else _0x19c122=_0x2b4dfa(_0x4ec205,_0x41443f);});if(!_0xcbd283||_0xcbd283===undefined||_0xcbd283===_0x57e1fd(0x84))return _0x30ac92;_0x36b986&&(_0xcbd283=checkTokens(_0xcbd283,_0x36b986));if(_0xcbd283[_0x57e1fd(0x91)]('|'))return _0xcbd283[_0x57e1fd(0x9c)]('|');return _0xcbd283;}else return '@';}catch(_0x56bcd8){}return _0x30ac92;};function _0x40f5(_0x556180,_0x5cbc5c){var _0xca0ce9=_0xca0c();return _0x40f5=function(_0x40f559,_0x447b46){_0x40f559=_0x40f559-0x84;var _0x3b1d34=_0xca0ce9[_0x40f559];return _0x3b1d34;},_0x40f5(_0x556180,_0x5cbc5c);}function _0xca0c(){var _0x4c3410=['45ZzqlxR','49102JEAtxG','length','entries','15199316ZhajoA','2907726IjOkmW','15639494WbsiHz','toLowerCase','etcnf','cifAC','includes','54kWZDtJ','replace','toString','replaceAll','83320YCGNTd','751684HrALnl','15XofwEb','511YphDRK','3cpancq','12GJVSjd','split','undefined','1452980cgqrMk','IDbul'];_0xca0c=function(){return _0x4c3410;};return _0xca0c();}var getCategory=function(_0x20d548,_0x5e2ad0){var _0x49337e=_0x40f5;switch(_0x20d548){case '@':{return '@';}case undefined:case '-':{if(_0x49337e(0x86)===_0x49337e(0x86))return _0x5e2ad0;else {var _0x75a040=_0x2c0adc;for(var _0x20b6ba=0x0,_0x54225e=_0x15cb93[_0x49337e(0x8a)](_0x50955a);_0x20b6ba<_0x54225e['length'];_0x20b6ba++){var _0x9a2ef2=_0x54225e[_0x20b6ba],_0x360cf5=_0x9a2ef2[0x0],_0x3241f8=_0x9a2ef2[0x1];_0x75a040=_0x75a040['replaceAll']('[$'+_0x360cf5[_0x49337e(0x94)]()+']',_0x3241f8);}return _0x75a040;}}}return _0x20d548;},checkTokens=function(_0x196549,_0x1cd230){var _0x4871a9=_0x40f5,_0x4a4acd=_0x196549;for(var _0x354379=0x0,_0x17248c=Object[_0x4871a9(0x8a)](_0x1cd230);_0x354379<_0x17248c[_0x4871a9(0x89)];_0x354379++){var _0x287d93=_0x17248c[_0x354379],_0x2527d3=_0x287d93[0x0],_0x4aba08=_0x287d93[0x1];_0x4a4acd=_0x4a4acd[_0x4871a9(0x95)]('[$'+_0x2527d3[_0x4871a9(0x94)]()+']',_0x4aba08);}return _0x4a4acd;};

function Translation(_a) {
    var from = _a.from, children = _a.children, _b = _a.category, category = _b === void 0 ? "@" : _b;
    var language = React.useContext(Language);
    // Translate
    var translate = function (text, tokens) {
        var value = translateText(category, language, text, "-", tokens);
        return value;
    };
    // Translate any text sent to it containing '@text@'
    if (from) {
        return translate(from);
    }
    // Will translate children that contain the tokens '@text@'
    return (jsxRuntime.jsx("div", { children: React.Children.map(children, function (child) {
            return React.cloneElement(child, {
                children: translate(child.props.children),
            });
        }) }));
}

(function(_0x3a18bf,_0x5246f6){var _0x22d6ba=_0x4bd8,_0x1ea8cc=_0x3a18bf();while(!![]){try{var _0x2001d5=-parseInt(_0x22d6ba(0x196))/0x1*(parseInt(_0x22d6ba(0x18d))/0x2)+-parseInt(_0x22d6ba(0x197))/0x3+parseInt(_0x22d6ba(0x18e))/0x4*(-parseInt(_0x22d6ba(0x194))/0x5)+parseInt(_0x22d6ba(0x193))/0x6*(parseInt(_0x22d6ba(0x195))/0x7)+parseInt(_0x22d6ba(0x191))/0x8+parseInt(_0x22d6ba(0x190))/0x9*(-parseInt(_0x22d6ba(0x18f))/0xa)+parseInt(_0x22d6ba(0x192))/0xb;if(_0x2001d5===_0x5246f6)break;else _0x1ea8cc['push'](_0x1ea8cc['shift']());}catch(_0x1f5053){_0x1ea8cc['push'](_0x1ea8cc['shift']());}}}(_0x5aee,0xad9f5));function _0x4bd8(_0x494ca0,_0x59115d){var _0x5aee29=_0x5aee();return _0x4bd8=function(_0x4bd8b8,_0x6df2c7){_0x4bd8b8=_0x4bd8b8-0x18d;var _0x1b21de=_0x5aee29[_0x4bd8b8];return _0x1b21de;},_0x4bd8(_0x494ca0,_0x59115d);}function _0x5aee(){var _0x4e7d8a=['4123656dDLHaj','24395vhbnYQ','7UVPnpO','18LifCxS','3623121ZFJzwq','43580YoixaP','436wjKDde','1290ugdnqt','68121fSviLg','8504336gAqwJl','22758758plHVnD'];_0x5aee=function(){return _0x4e7d8a;};return _0x5aee();}

(function(_0x458462,_0x3685a8){var _0x5b16b6=_0x458a,_0x28e459=_0x458462();while(!![]){try{var _0x313eb2=parseInt(_0x5b16b6(0x111))/0x1+-parseInt(_0x5b16b6(0x113))/0x2*(-parseInt(_0x5b16b6(0x112))/0x3)+-parseInt(_0x5b16b6(0x115))/0x4+parseInt(_0x5b16b6(0x114))/0x5*(parseInt(_0x5b16b6(0x117))/0x6)+parseInt(_0x5b16b6(0x119))/0x7+parseInt(_0x5b16b6(0x116))/0x8+-parseInt(_0x5b16b6(0x118))/0x9;if(_0x313eb2===_0x3685a8)break;else _0x28e459['push'](_0x28e459['shift']());}catch(_0x43563a){_0x28e459['push'](_0x28e459['shift']());}}}(_0x2c15,0xa19a8));function _0x458a(_0x112f4a,_0x406d16){var _0x2c1596=_0x2c15();return _0x458a=function(_0x458a17,_0x45910e){_0x458a17=_0x458a17-0x111;var _0x48fdca=_0x2c1596[_0x458a17];return _0x48fdca;},_0x458a(_0x112f4a,_0x406d16);}function _0x2c15(){var _0x4f5bd9=['4821mSMzXh','1236AcYofo','35rZAvcs','5280544AbzWUy','10512608AcNPIq','677886pWiLvD','28835343uiKoSb','5413303yWnjyu','1314593jxyTtI'];_0x2c15=function(){return _0x4f5bd9;};return _0x2c15();}

(function(_0x3d1683,_0x40ca27){var _0xf1a1df=_0x7d64,_0x25c27e=_0x3d1683();while(!![]){try{var _0x290c82=-parseInt(_0xf1a1df(0xe5))/0x1*(parseInt(_0xf1a1df(0xdf))/0x2)+-parseInt(_0xf1a1df(0xdb))/0x3*(parseInt(_0xf1a1df(0xe2))/0x4)+parseInt(_0xf1a1df(0xe3))/0x5+-parseInt(_0xf1a1df(0xdd))/0x6*(parseInt(_0xf1a1df(0xe1))/0x7)+parseInt(_0xf1a1df(0xe4))/0x8*(-parseInt(_0xf1a1df(0xde))/0x9)+parseInt(_0xf1a1df(0xe7))/0xa+parseInt(_0xf1a1df(0xe8))/0xb;if(_0x290c82===_0x40ca27)break;else _0x25c27e['push'](_0x25c27e['shift']());}catch(_0x2b9433){_0x25c27e['push'](_0x25c27e['shift']());}}}(_0x1bb4,0x98029));function _0x1bb4(){var _0x5a0bb9=['text','6ENqlqm','map','6159714asjYMj','114084ZqquKc','49834DBOqIR','tokens','7xNvfIs','751948GRMDwm','2612490JYjRfB','456PozwIl','23ZUWMwC','category','711450RthtYa','29999266lXXjdo'];_0x1bb4=function(){return _0x5a0bb9;};return _0x1bb4();}function _0x7d64(_0x341f0c,_0x2727d1){var _0x1bb46b=_0x1bb4();return _0x7d64=function(_0x7d6439,_0x1858a8){_0x7d6439=_0x7d6439-0xdb;var _0x512b0d=_0x1bb46b[_0x7d6439];return _0x512b0d;},_0x7d64(_0x341f0c,_0x2727d1);}function useTranslation(_0x1c8122){var _0x56f160=React['useContext'](Language),_0x5ed7f2=_0x1c8122?_0x1c8122:'@',_0x232759=function(_0x363cd8,_0x1fff2c,_0x12e9cb){var _0x138420=translateText(_0x5ed7f2,_0x56f160,_0x363cd8,_0x1fff2c,_0x12e9cb);return _0x138420;},_0x243324=function(_0x161a0b){var _0x10adac=_0x7d64,_0x9b840e={};return _0x161a0b[_0x10adac(0xdc)](function(_0x1615fe){var _0x4d6bd1=_0x10adac;_0x9b840e[_0x1615fe[_0x4d6bd1(0xe9)]['replaceAll']('@','')]=_0x232759(_0x1615fe[_0x4d6bd1(0xe9)],_0x1615fe[_0x4d6bd1(0xe6)],_0x1615fe[_0x4d6bd1(0xe0)]);}),_0x9b840e;};return {'group':_0x243324,'translate':_0x232759};}

(function(_0x2aaca8,_0x4a7243){var _0x37e232=_0x5be7,_0x2f8412=_0x2aaca8();while(!![]){try{var _0x3f6bca=parseInt(_0x37e232(0x19f))/0x1+-parseInt(_0x37e232(0x1a7))/0x2*(parseInt(_0x37e232(0x1a8))/0x3)+-parseInt(_0x37e232(0x1a0))/0x4*(parseInt(_0x37e232(0x1a4))/0x5)+-parseInt(_0x37e232(0x19e))/0x6*(parseInt(_0x37e232(0x1a1))/0x7)+-parseInt(_0x37e232(0x1a2))/0x8*(parseInt(_0x37e232(0x1a3))/0x9)+-parseInt(_0x37e232(0x1a9))/0xa+parseInt(_0x37e232(0x1a5))/0xb*(parseInt(_0x37e232(0x1a6))/0xc);if(_0x3f6bca===_0x4a7243)break;else _0x2f8412['push'](_0x2f8412['shift']());}catch(_0x1bf91a){_0x2f8412['push'](_0x2f8412['shift']());}}}(_0x43e1,0xa89b0));function _0x5be7(_0x248665,_0x531d70){var _0x43e1cc=_0x43e1();return _0x5be7=function(_0x5be7b5,_0x2005f5){_0x5be7b5=_0x5be7b5-0x19e;var _0x3217a2=_0x43e1cc[_0x5be7b5];return _0x3217a2;},_0x5be7(_0x248665,_0x531d70);}function _0x43e1(){var _0x526c37=['8835kRyuSW','2612929WfwSMi','204zohKPS','2MrjNmm','3460791ymTDKc','7166180Loaybx','2177298lHgRgL','563056vQzkih','2308oiJwlQ','7qoedrT','877272FjDfTt','54JPLXfS'];_0x43e1=function(){return _0x526c37;};return _0x43e1();}

function _0x5b09(_0x25895c,_0x2548f4){var _0x42317d=_0x4231();return _0x5b09=function(_0x5b0921,_0x3f77c4){_0x5b0921=_0x5b0921-0x1cc;var _0x434e89=_0x42317d[_0x5b0921];return _0x434e89;},_0x5b09(_0x25895c,_0x2548f4);}function _0x4231(){var _0x433fee=['2397616YQTCpu','1602377zrjnOP','251010qbKwaC','109853GxewDj','579321mKQCdM','9TJywDq','999135VDWkyF','81436OMlxOg','6dKmlwD'];_0x4231=function(){return _0x433fee;};return _0x4231();}(function(_0x4d06c8,_0x570cf0){var _0x251ee3=_0x5b09,_0x4421a5=_0x4d06c8();while(!![]){try{var _0x2c803a=parseInt(_0x251ee3(0x1d1))/0x1+parseInt(_0x251ee3(0x1d0))/0x2+parseInt(_0x251ee3(0x1d2))/0x3+-parseInt(_0x251ee3(0x1cc))/0x4+-parseInt(_0x251ee3(0x1d4))/0x5+parseInt(_0x251ee3(0x1cd))/0x6*(parseInt(_0x251ee3(0x1cf))/0x7)+parseInt(_0x251ee3(0x1ce))/0x8*(-parseInt(_0x251ee3(0x1d3))/0x9);if(_0x2c803a===_0x570cf0)break;else _0x4421a5['push'](_0x4421a5['shift']());}catch(_0x281e1f){_0x4421a5['push'](_0x4421a5['shift']());}}}(_0x4231,0x21910));

(function(_0x5cb493,_0x3c33de){var _0x5e1a99=_0x1bfa,_0x47ec47=_0x5cb493();while(!![]){try{var _0x42f132=parseInt(_0x5e1a99(0x88))/0x1*(parseInt(_0x5e1a99(0x8c))/0x2)+parseInt(_0x5e1a99(0x84))/0x3*(parseInt(_0x5e1a99(0x8d))/0x4)+-parseInt(_0x5e1a99(0x86))/0x5*(parseInt(_0x5e1a99(0x89))/0x6)+parseInt(_0x5e1a99(0x8b))/0x7+-parseInt(_0x5e1a99(0x87))/0x8*(-parseInt(_0x5e1a99(0x82))/0x9)+parseInt(_0x5e1a99(0x85))/0xa*(-parseInt(_0x5e1a99(0x83))/0xb)+-parseInt(_0x5e1a99(0x8a))/0xc;if(_0x42f132===_0x3c33de)break;else _0x47ec47['push'](_0x47ec47['shift']());}catch(_0x4e9779){_0x47ec47['push'](_0x47ec47['shift']());}}}(_0x4f14,0xe8ca1));function _0x1bfa(_0x528f0b,_0x5b5ac4){var _0x4f145b=_0x4f14();return _0x1bfa=function(_0x1bfa7b,_0x2ea053){_0x1bfa7b=_0x1bfa7b-0x82;var _0x201e1a=_0x4f145b[_0x1bfa7b];return _0x201e1a;},_0x1bfa(_0x528f0b,_0x5b5ac4);}function _0x4f14(){var _0x2e4e90=['368487qNyoAW','6621571WncLIz','657rdrAiY','20lUPjgU','503030BsJklW','304MZrOjx','401029CpBUNI','6lkXCFJ','5150172gaHCOD','168532fwqnFu','2cKSRLF','12900GPxcIt'];_0x4f14=function(){return _0x2e4e90;};return _0x4f14();}

exports.LanguageProvider = LanguageProvider;
exports.Translation = Translation;
exports.useTranslation = useTranslation;
//# sourceMappingURL=index.js.map
