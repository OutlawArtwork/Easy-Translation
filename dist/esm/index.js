import { jsx, Fragment } from 'react/jsx-runtime';
import React from 'react';

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

var _0x353e13=_0x4900;function _0x1688(){var _0x5cd386=['createContext','2YEtuei','5378270fyZAfj','135GMcpxW','240vOhGHx','6258546gtbxIH','8327385oFwbIh','641582yEQYav','58664IJUQeb','329wbQPzg','43532Elqngf','67020nzYsEt'];_0x1688=function(){return _0x5cd386;};return _0x1688();}function _0x4900(_0x3b4db5,_0x1a319f){var _0x1688c2=_0x1688();return _0x4900=function(_0x4900ae,_0x452ca7){_0x4900ae=_0x4900ae-0x170;var _0x3c72c3=_0x1688c2[_0x4900ae];return _0x3c72c3;},_0x4900(_0x3b4db5,_0x1a319f);}(function(_0x474bf0,_0x38c624){var _0x5b5070=_0x4900,_0x36621e=_0x474bf0();while(!![]){try{var _0x3502e1=parseInt(_0x5b5070(0x170))/0x1*(parseInt(_0x5b5070(0x176))/0x2)+-parseInt(_0x5b5070(0x178))/0x3*(parseInt(_0x5b5070(0x173))/0x4)+-parseInt(_0x5b5070(0x179))/0x5*(parseInt(_0x5b5070(0x174))/0x6)+-parseInt(_0x5b5070(0x172))/0x7*(-parseInt(_0x5b5070(0x171))/0x8)+parseInt(_0x5b5070(0x17a))/0x9+parseInt(_0x5b5070(0x177))/0xa+-parseInt(_0x5b5070(0x17b))/0xb;if(_0x3502e1===_0x38c624)break;else _0x36621e['push'](_0x36621e['shift']());}catch(_0x236e68){_0x36621e['push'](_0x36621e['shift']());}}}(_0x1688,0x6a92c));var Language=React[_0x353e13(0x175)]('en');

function LanguageProvider(_a) {
    var _this = this;
    var url = _a.url, files = _a.files, supported = _a.supported, children = _a.children;
    var _b = React.useState(null), loaded = _b[0], setLoaded = _b[1];
    React.useEffect(function () {
        // Fetch from server
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
        // Load locally
        var loadLanguage = function () {
            try {
                if (files) {
                    var parsedLanguage = getLanguageFile(files);
                    setLoaded(parsedLanguage);
                }
            }
            catch (error) {
                throw new Error("-Easy Translation-: ".concat(error.message));
            }
        };
        if (url)
            fetchLanguage();
        else if (files)
            loadLanguage();
    }, []);
    // Get the language information - Fallback to the top file
    var getLanguageFile = function (files) {
        var language = navigator === null || navigator === void 0 ? void 0 : navigator.language.split("-")[0];
        var languageExists = files === null || files === void 0 ? void 0 : files.filter(function (lang) { return lang.name === language; });
        if (!languageExists) {
            return files[0].file;
        }
        return languageExists[0].file;
    };
    // Fallback to the top supported language
    var getLanguage = function (supported) {
        var language = navigator === null || navigator === void 0 ? void 0 : navigator.language.split("-")[0];
        if (supported.includes(language)) {
            return language;
        }
        return supported[0];
    };
    if (!loaded)
        return jsx(Fragment, {});
    return jsx(Language.Provider, { value: loaded, children: children });
}

(function(_0x229f28,_0x5ded99){var _0x160f15=_0x1afd,_0x2af8ca=_0x229f28();while(!![]){try{var _0x3d4011=parseInt(_0x160f15(0x12a))/0x1*(-parseInt(_0x160f15(0x129))/0x2)+-parseInt(_0x160f15(0x126))/0x3*(parseInt(_0x160f15(0x122))/0x4)+-parseInt(_0x160f15(0x125))/0x5*(parseInt(_0x160f15(0x127))/0x6)+parseInt(_0x160f15(0x123))/0x7*(-parseInt(_0x160f15(0x124))/0x8)+-parseInt(_0x160f15(0x12b))/0x9+-parseInt(_0x160f15(0x12c))/0xa+parseInt(_0x160f15(0x128))/0xb;if(_0x3d4011===_0x5ded99)break;else _0x2af8ca['push'](_0x2af8ca['shift']());}catch(_0x925b48){_0x2af8ca['push'](_0x2af8ca['shift']());}}}(_0x2344,0x5c9f5));function _0x1afd(_0x10b542,_0x369116){var _0x234498=_0x2344();return _0x1afd=function(_0x1afdaa,_0x5335f9){_0x1afdaa=_0x1afdaa-0x122;var _0x210683=_0x234498[_0x1afdaa];return _0x210683;},_0x1afd(_0x10b542,_0x369116);}function _0x2344(){var _0x4d515b=['22DNrzIM','4856139LSuJfD','6943840UUvbLa','185552OtPGJB','4459VlBGlp','2104WrskhZ','5xSjtbR','3CrDNEX','1335762SlnTmy','25194004HusTzf','21862oSkZiA'];_0x2344=function(){return _0x4d515b;};return _0x2344();}

(function(_0x15141f,_0x3e78d4){var _0x163bf4=_0x4d13,_0x1aa8e2=_0x15141f();while(!![]){try{var _0x588646=parseInt(_0x163bf4(0x9f))/0x1+-parseInt(_0x163bf4(0xa6))/0x2*(-parseInt(_0x163bf4(0xa1))/0x3)+parseInt(_0x163bf4(0x9d))/0x4+-parseInt(_0x163bf4(0xaa))/0x5+parseInt(_0x163bf4(0x9a))/0x6*(parseInt(_0x163bf4(0x99))/0x7)+-parseInt(_0x163bf4(0xa8))/0x8+-parseInt(_0x163bf4(0xa2))/0x9;if(_0x588646===_0x3e78d4)break;else _0x1aa8e2['push'](_0x1aa8e2['shift']());}catch(_0x2b6520){_0x1aa8e2['push'](_0x1aa8e2['shift']());}}}(_0x515f,0xc233a));function _0x4d13(_0x190f32,_0x33d2c6){var _0x515f4e=_0x515f();return _0x4d13=function(_0x4d1374,_0x13e497){_0x4d1374=_0x4d1374-0x99;var _0x27b24e=_0x515f4e[_0x4d1374];return _0x27b24e;},_0x4d13(_0x190f32,_0x33d2c6);}var translateText=function(_0x4166c5,_0x25f91b,_0x330142,_0x26206a,_0x201e93){var _0xd37900=_0x4d13;_0x26206a=getCategory(_0x26206a,_0x4166c5);try{var _0x40e246=_0x330142[_0xd37900(0xa5)]()[_0xd37900(0xa4)](/@([\w]+)@/g,function(_0x5e23fe,_0x49b433){var _0x2ec252=_0xd37900;if(_0x2ec252(0x9e)!=='gPMfh'){var _0x19f591=_0x1558bb[_0x508614],_0x181be4=_0x19f591[0x0],_0x125180=_0x19f591[0x1];_0x12d3bd=_0x573aff[_0x2ec252(0xa0)]('[$'+_0x181be4['toString']()+']',_0x125180);}else return _0x25f91b[_0x26206a][_0x49b433];});if(!_0x40e246||_0x40e246===undefined||_0x40e246===_0xd37900(0x9c))return _0x330142;_0x201e93&&(_0x40e246=checkTokens(_0x40e246,_0x201e93));if(_0x40e246['includes']('|'))return _0x40e246[_0xd37900(0xa7)]('|');return _0x40e246;}catch(_0x56b0d4){}return _0x330142;};var getCategory=function(_0x192c07,_0x1c3050){var _0x504c53=_0x4d13;switch(_0x192c07){case '@':{if('zggrx'!==_0x504c53(0xa3))return '@';else {switch(_0x23e931){case '@':{return '@';}case _0x38bf4f:case '-':{return _0x29e3dc;}}return _0x58a1cf;}}case undefined:case '-':{return _0x1c3050;}}return _0x192c07;},checkTokens=function(_0x56eba9,_0x17fabd){var _0x482c0b=_0x4d13,_0x3319d9=_0x56eba9;for(var _0x4fc198=0x0,_0x2b1ca3=Object['entries'](_0x17fabd);_0x4fc198<_0x2b1ca3[_0x482c0b(0x9b)];_0x4fc198++){var _0x2e0e0b=_0x2b1ca3[_0x4fc198],_0x372d82=_0x2e0e0b[0x0],_0x25fe2b=_0x2e0e0b[0x1];_0x3319d9=_0x3319d9[_0x482c0b(0xa0)]('[$'+_0x372d82[_0x482c0b(0xa9)]()+']',_0x25fe2b);}return _0x3319d9;};function _0x515f(){var _0x435cde=['eKgBV','replace','toLowerCase','24ClTzXM','split','2758344rFWgdS','toString','4948535ZDKXQY','68593LzxVXU','888vwXCRO','length','undefined','4108492VjTDWh','gPMfh','700536KBuCJU','replaceAll','188502swxmAo','16217721hXAkoA'];_0x515f=function(){return _0x435cde;};return _0x515f();}

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
    return (jsx("div", { children: React.Children.map(children, function (child) {
            return React.cloneElement(child, {
                children: translate(child.props.children),
            });
        }) }));
}

(function(_0x2ff6f5,_0x4720b4){var _0x4b5442=_0x4f2b,_0x42e434=_0x2ff6f5();while(!![]){try{var _0x501546=parseInt(_0x4b5442(0x12c))/0x1+parseInt(_0x4b5442(0x129))/0x2*(-parseInt(_0x4b5442(0x127))/0x3)+-parseInt(_0x4b5442(0x12a))/0x4*(-parseInt(_0x4b5442(0x12e))/0x5)+-parseInt(_0x4b5442(0x12d))/0x6+parseInt(_0x4b5442(0x130))/0x7+-parseInt(_0x4b5442(0x12b))/0x8*(-parseInt(_0x4b5442(0x12f))/0x9)+-parseInt(_0x4b5442(0x128))/0xa;if(_0x501546===_0x4720b4)break;else _0x42e434['push'](_0x42e434['shift']());}catch(_0x4e2c1f){_0x42e434['push'](_0x42e434['shift']());}}}(_0x3694,0x73bfb));function _0x3694(){var _0x2aaecd=['35PpMxbI','18GjRvpv','455182jODdAj','21UNOawc','10092490MDpTmC','66730YbNvWd','242404PXQxph','3159328BoHgNd','813189vsaFmq','2252058NVsqeF'];_0x3694=function(){return _0x2aaecd;};return _0x3694();}function _0x4f2b(_0x5e6b94,_0x27f466){var _0x369485=_0x3694();return _0x4f2b=function(_0x4f2b10,_0x253f41){_0x4f2b10=_0x4f2b10-0x127;var _0x2dbb5f=_0x369485[_0x4f2b10];return _0x2dbb5f;},_0x4f2b(_0x5e6b94,_0x27f466);}

function _0x6a0c(){var _0x5103a1=['102062jQHUqI','4WAuoGb','8243424joWquJ','40lhsptc','7CjxPMP','1344969zokUfS','12807280rYcFvg','956271gUxMRq','173788GfTPBe','6807965sugVQd'];_0x6a0c=function(){return _0x5103a1;};return _0x6a0c();}(function(_0xe05f00,_0xf0f0b0){var _0x2c2a71=_0x4fd7,_0x34db74=_0xe05f00();while(!![]){try{var _0xada721=parseInt(_0x2c2a71(0x1df))/0x1+-parseInt(_0x2c2a71(0x1e1))/0x2+-parseInt(_0x2c2a71(0x1de))/0x3+-parseInt(_0x2c2a71(0x1e2))/0x4*(parseInt(_0x2c2a71(0x1e0))/0x5)+-parseInt(_0x2c2a71(0x1e3))/0x6*(-parseInt(_0x2c2a71(0x1e5))/0x7)+parseInt(_0x2c2a71(0x1dd))/0x8+-parseInt(_0x2c2a71(0x1e6))/0x9*(parseInt(_0x2c2a71(0x1e4))/0xa);if(_0xada721===_0xf0f0b0)break;else _0x34db74['push'](_0x34db74['shift']());}catch(_0x479a28){_0x34db74['push'](_0x34db74['shift']());}}}(_0x6a0c,0xc8101));function _0x4fd7(_0x203311,_0x6e99c8){var _0x6a0c08=_0x6a0c();return _0x4fd7=function(_0x4fd74a,_0x3199af){_0x4fd74a=_0x4fd74a-0x1dd;var _0xa17e92=_0x6a0c08[_0x4fd74a];return _0xa17e92;},_0x4fd7(_0x203311,_0x6e99c8);}

(function(_0x4d3eff,_0x3e8b29){var _0x48882c=_0xf9a1,_0x4fa175=_0x4d3eff();while(!![]){try{var _0x556ea8=-parseInt(_0x48882c(0x76))/0x1*(parseInt(_0x48882c(0x85))/0x2)+parseInt(_0x48882c(0x74))/0x3*(parseInt(_0x48882c(0x7f))/0x4)+-parseInt(_0x48882c(0x7a))/0x5*(parseInt(_0x48882c(0x77))/0x6)+parseInt(_0x48882c(0x81))/0x7*(parseInt(_0x48882c(0x7c))/0x8)+parseInt(_0x48882c(0x84))/0x9+-parseInt(_0x48882c(0x75))/0xa*(-parseInt(_0x48882c(0x83))/0xb)+-parseInt(_0x48882c(0x80))/0xc;if(_0x556ea8===_0x3e8b29)break;else _0x4fa175['push'](_0x4fa175['shift']());}catch(_0x1e17d7){_0x4fa175['push'](_0x4fa175['shift']());}}}(_0x1ebd,0xb7c98));function _0xf9a1(_0x2a95ba,_0xa5f374){var _0x1ebd57=_0x1ebd();return _0xf9a1=function(_0xf9a16c,_0x465109){_0xf9a16c=_0xf9a16c-0x74;var _0x4ed0da=_0x1ebd57[_0xf9a16c];return _0x4ed0da;},_0xf9a1(_0x2a95ba,_0xa5f374);}function _0x1ebd(){var _0x220fb3=['text','2382845dneDiM','category','2966424iDKoqD','useContext','replaceAll','64LjKVqr','649164ovSXOx','7wnQuNp','tokens','530167ToWWjH','7679016tfKTXg','6SJlXut','72669SKpdhj','30SaQQfj','157576BaMjVv','6gBsOFy','map'];_0x1ebd=function(){return _0x220fb3;};return _0x1ebd();}function useTranslation(_0x4950ba){var _0xcacaaf=_0xf9a1,_0x3e7f73=React[_0xcacaaf(0x7d)](Language),_0x2bddd9=_0x4950ba?_0x4950ba:'@',_0x150bba=function(_0x285a8c,_0x32aab9,_0x10d334){var _0x29c199=translateText(_0x2bddd9,_0x3e7f73,_0x285a8c,_0x32aab9,_0x10d334);return _0x29c199;},_0x34f01a=function(_0x25c51a){var _0x3b77f3=_0xcacaaf,_0x5e5ab3={};return _0x25c51a[_0x3b77f3(0x78)](function(_0x4c63b4){var _0x17269e=_0x3b77f3;_0x5e5ab3[_0x4c63b4[_0x17269e(0x79)][_0x17269e(0x7e)]('@','')]=_0x150bba(_0x4c63b4[_0x17269e(0x79)],_0x4c63b4[_0x17269e(0x7b)],_0x4c63b4[_0x17269e(0x82)]);}),_0x5e5ab3;};return {'group':_0x34f01a,'translate':_0x150bba};}

(function(_0x596ab8,_0x5e013e){var _0x29be84=_0x298a,_0x1e4314=_0x596ab8();while(!![]){try{var _0x26831a=-parseInt(_0x29be84(0xcd))/0x1*(-parseInt(_0x29be84(0xd0))/0x2)+parseInt(_0x29be84(0xcc))/0x3+-parseInt(_0x29be84(0xd1))/0x4*(parseInt(_0x29be84(0xca))/0x5)+parseInt(_0x29be84(0xcf))/0x6+parseInt(_0x29be84(0xcb))/0x7+-parseInt(_0x29be84(0xce))/0x8+parseInt(_0x29be84(0xc9))/0x9;if(_0x26831a===_0x5e013e)break;else _0x1e4314['push'](_0x1e4314['shift']());}catch(_0x1d544c){_0x1e4314['push'](_0x1e4314['shift']());}}}(_0x3510,0x6e2d5));function _0x3510(){var _0x341f05=['2iGXsgw','4MaYyxe','1713852CzWZyR','2094070VoBBWj','1144024KFUXyy','486201XjRxrN','574109eGfPzM','4603024yzVNJo','2132646jhOwOj'];_0x3510=function(){return _0x341f05;};return _0x3510();}function _0x298a(_0x3d56f1,_0x47c52d){var _0x3510f3=_0x3510();return _0x298a=function(_0x298a34,_0x52dc44){_0x298a34=_0x298a34-0xc9;var _0x3acacf=_0x3510f3[_0x298a34];return _0x3acacf;},_0x298a(_0x3d56f1,_0x47c52d);}

(function(_0x531f32,_0x145213){var _0x1aa8af=_0x5899,_0x181a6d=_0x531f32();while(!![]){try{var _0x24134c=-parseInt(_0x1aa8af(0x1c4))/0x1*(-parseInt(_0x1aa8af(0x1bf))/0x2)+parseInt(_0x1aa8af(0x1c8))/0x3*(parseInt(_0x1aa8af(0x1c9))/0x4)+-parseInt(_0x1aa8af(0x1c0))/0x5+parseInt(_0x1aa8af(0x1c6))/0x6*(parseInt(_0x1aa8af(0x1c1))/0x7)+parseInt(_0x1aa8af(0x1c5))/0x8*(-parseInt(_0x1aa8af(0x1c3))/0x9)+parseInt(_0x1aa8af(0x1c7))/0xa+parseInt(_0x1aa8af(0x1c2))/0xb;if(_0x24134c===_0x145213)break;else _0x181a6d['push'](_0x181a6d['shift']());}catch(_0x30e9b4){_0x181a6d['push'](_0x181a6d['shift']());}}}(_0x4238,0xb4d37));function _0x5899(_0x365b3a,_0x455463){var _0x4238f6=_0x4238();return _0x5899=function(_0x58990a,_0x2fe381){_0x58990a=_0x58990a-0x1bf;var _0x3247d6=_0x4238f6[_0x58990a];return _0x3247d6;},_0x5899(_0x365b3a,_0x455463);}function _0x4238(){var _0x3d665e=['108572quhxvW','28394KayskM','5320970ybsMGo','6346774ULPMfP','1267156cvfsiZ','5876460QHwvYA','56UzjtIJ','16oYWrWs','6DuQEcz','11038260DBgiVe','21ZjQzoT'];_0x4238=function(){return _0x3d665e;};return _0x4238();}

(function(_0x2b4e4b,_0x28ffe8){var _0x211cd2=_0x2bc7,_0x1149b3=_0x2b4e4b();while(!![]){try{var _0x485a18=-parseInt(_0x211cd2(0xc8))/0x1+-parseInt(_0x211cd2(0xc5))/0x2+-parseInt(_0x211cd2(0xc3))/0x3+-parseInt(_0x211cd2(0xc7))/0x4*(-parseInt(_0x211cd2(0xcc))/0x5)+parseInt(_0x211cd2(0xcd))/0x6*(parseInt(_0x211cd2(0xc9))/0x7)+parseInt(_0x211cd2(0xc6))/0x8*(parseInt(_0x211cd2(0xca))/0x9)+parseInt(_0x211cd2(0xc4))/0xa*(parseInt(_0x211cd2(0xcb))/0xb);if(_0x485a18===_0x28ffe8)break;else _0x1149b3['push'](_0x1149b3['shift']());}catch(_0x40f79c){_0x1149b3['push'](_0x1149b3['shift']());}}}(_0x5305,0x49fe7));function _0x2bc7(_0x29dfef,_0x1ff003){var _0x530544=_0x5305();return _0x2bc7=function(_0x2bc7e4,_0x135122){_0x2bc7e4=_0x2bc7e4-0xc3;var _0x450b90=_0x530544[_0x2bc7e4];return _0x450b90;},_0x2bc7(_0x29dfef,_0x1ff003);}function _0x5305(){var _0x27c838=['35cALIkP','6AVlFRC','73827FvMOQn','40kPTcQb','180964VyyUZX','8LPioAR','303496LteLdf','432008qrFYQL','45647GGrvRD','2150271QlLkmg','202455cPmdgR'];_0x5305=function(){return _0x27c838;};return _0x5305();}

export { LanguageProvider, Translation, useTranslation };
//# sourceMappingURL=index.js.map
