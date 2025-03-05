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

function _0xfd4f(_0x5f4f49,_0x5e95dc){var _0x12376b=_0x1237();return _0xfd4f=function(_0xfd4fec,_0x58f726){_0xfd4fec=_0xfd4fec-0xcc;var _0x203eef=_0x12376b[_0xfd4fec];return _0x203eef;},_0xfd4f(_0x5f4f49,_0x5e95dc);}(function(_0x279f43,_0x4cae44){var _0x5dca6b=_0xfd4f,_0x449308=_0x279f43();while(!![]){try{var _0x43a9da=parseInt(_0x5dca6b(0xcd))/0x1*(-parseInt(_0x5dca6b(0xce))/0x2)+-parseInt(_0x5dca6b(0xd1))/0x3+-parseInt(_0x5dca6b(0xd3))/0x4+-parseInt(_0x5dca6b(0xd0))/0x5*(-parseInt(_0x5dca6b(0xcc))/0x6)+parseInt(_0x5dca6b(0xcf))/0x7+-parseInt(_0x5dca6b(0xd4))/0x8+parseInt(_0x5dca6b(0xd2))/0x9;if(_0x43a9da===_0x4cae44)break;else _0x449308['push'](_0x449308['shift']());}catch(_0x1b2089){_0x449308['push'](_0x449308['shift']());}}}(_0x1237,0x6b2b9));function _0x1237(){var _0x2d401d=['371578BmZHuV','2nteRUq','1243144QWgcdq','145LRBnUq','317985kuSLRV','12068064lxnsPF','1629936FZNhPi','1694664dtikNb','3594eJCmcl'];_0x1237=function(){return _0x2d401d;};return _0x1237();}var Language=React['createContext']('en');

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

function _0x577e(_0x540b8e,_0x1bbdea){var _0x3e81a6=_0x3e81();return _0x577e=function(_0x577eb0,_0x4cd2c0){_0x577eb0=_0x577eb0-0x18b;var _0x5a4d1f=_0x3e81a6[_0x577eb0];return _0x5a4d1f;},_0x577e(_0x540b8e,_0x1bbdea);}function _0x3e81(){var _0x23b998=['1232JBzpdL','4066944XtJoCm','3601370OmgZiu','103940AILhZq','373322YISDeE','364148HfGwfa','7CoLqIs','595688SasXFA','1244511mzQKpx','4lgZjbw','27FnwuIg'];_0x3e81=function(){return _0x23b998;};return _0x3e81();}(function(_0x1fede2,_0x1bc222){var _0x11f1cc=_0x577e,_0xf21121=_0x1fede2();while(!![]){try{var _0x455d82=-parseInt(_0x11f1cc(0x190))/0x1+-parseInt(_0x11f1cc(0x191))/0x2+parseInt(_0x11f1cc(0x194))/0x3*(-parseInt(_0x11f1cc(0x195))/0x4)+-parseInt(_0x11f1cc(0x18e))/0x5+-parseInt(_0x11f1cc(0x18d))/0x6*(-parseInt(_0x11f1cc(0x192))/0x7)+-parseInt(_0x11f1cc(0x193))/0x8*(-parseInt(_0x11f1cc(0x18b))/0x9)+-parseInt(_0x11f1cc(0x18f))/0xa*(-parseInt(_0x11f1cc(0x18c))/0xb);if(_0x455d82===_0x1bc222)break;else _0xf21121['push'](_0xf21121['shift']());}catch(_0x42997c){_0xf21121['push'](_0xf21121['shift']());}}}(_0x3e81,0x5b82c));

function _0x4e44(_0xc64ca6,_0x55fac6){var _0x542378=_0x5423();return _0x4e44=function(_0x4e44c7,_0x5b6ae9){_0x4e44c7=_0x4e44c7-0x76;var _0x3a2743=_0x542378[_0x4e44c7];return _0x3a2743;},_0x4e44(_0xc64ca6,_0x55fac6);}(function(_0x3ac3d8,_0x133bb4){var _0x228beb=_0x4e44,_0x2044fc=_0x3ac3d8();while(!![]){try{var _0x57c43e=parseInt(_0x228beb(0x79))/0x1+parseInt(_0x228beb(0x85))/0x2*(-parseInt(_0x228beb(0x83))/0x3)+parseInt(_0x228beb(0x80))/0x4+-parseInt(_0x228beb(0x82))/0x5+parseInt(_0x228beb(0x7f))/0x6+parseInt(_0x228beb(0x7d))/0x7*(-parseInt(_0x228beb(0x87))/0x8)+-parseInt(_0x228beb(0x7e))/0x9;if(_0x57c43e===_0x133bb4)break;else _0x2044fc['push'](_0x2044fc['shift']());}catch(_0x4fb45a){_0x2044fc['push'](_0x2044fc['shift']());}}}(_0x5423,0x9ba80));var translateText=function(_0x7d83bf,_0xc06370,_0x4e9f1b,_0x1aa5a0,_0xab45ed){var _0x2684d7=_0x4e44;_0x1aa5a0=getCategory(_0x1aa5a0,_0x7d83bf);try{if(_0x2684d7(0x89)!==_0x2684d7(0x88)){var _0x5095b4=_0x4e9f1b[_0x2684d7(0x84)]()[_0x2684d7(0x7a)](/@([\w]+)@/g,function(_0x42081f,_0xdde31f){return _0xc06370[_0x1aa5a0][_0xdde31f];});if(!_0x5095b4||_0x5095b4===undefined||_0x5095b4===_0x2684d7(0x78))return _0x4e9f1b;if(_0xab45ed){if(_0x2684d7(0x77)!=='foGdT')_0x5095b4=checkTokens(_0x5095b4,_0xab45ed);else {var _0x2f257b=_0x41d91a['toLowerCase']()[_0x2684d7(0x7a)](/@([\w]+)@/g,function(_0x2754c9,_0x5864c1){return _0x2797f8[_0x25dff2][_0x5864c1];});if(!_0x2f257b||_0x2f257b===_0x4f3995||_0x2f257b==='undefined')return _0x2b9990;_0x23deab&&(_0x2f257b=_0x1f1fb7(_0x2f257b,_0x1a04e2));if(_0x2f257b[_0x2684d7(0x86)]('|'))return _0x2f257b[_0x2684d7(0x7c)]('|');return _0x2f257b;}}if(_0x5095b4['includes']('|'))return _0x5095b4[_0x2684d7(0x7c)]('|');return _0x5095b4;}else _0x106e38=_0x301fdb(_0xaad1fd,_0x21eacc);}catch(_0x955281){}return _0x4e9f1b;};var getCategory=function(_0x1fdd79,_0xf1615a){var _0x40cb78=_0x4e44;switch(_0x1fdd79){case '@':{return 'SuaeZ'===_0x40cb78(0x8a)?'@':_0x3c2278;}case undefined:case '-':{return _0xf1615a;}}return _0x1fdd79;},checkTokens=function(_0x24469f,_0x590657){var _0x21e567=_0x4e44,_0x186169=_0x24469f;for(var _0x3d4a7d=0x0,_0x5c8a3e=Object[_0x21e567(0x76)](_0x590657);_0x3d4a7d<_0x5c8a3e['length'];_0x3d4a7d++){{var _0x3e56ab=_0x5c8a3e[_0x3d4a7d],_0x40376f=_0x3e56ab[0x0],_0xafde17=_0x3e56ab[0x1];_0x186169=_0x186169['replaceAll']('[$'+_0x40376f[_0x21e567(0x7b)]()+']',_0xafde17);}}return _0x186169;};function _0x5423(){var _0x19c11c=['xSvYT','undefined','631245EHlrQR','replace','toString','split','7Zshqzs','2812464ACVtyA','5855502fmOPtV','4371884pMDqdD','length','855095dfcqze','1366899BphjMW','toLowerCase','2FXiJVt','includes','8987336ZHjglQ','LszMa','tXMns','SuaeZ','entries'];_0x5423=function(){return _0x19c11c;};return _0x5423();}

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

(function(_0x251d90,_0x503468){var _0xcf0962=_0x4390,_0x11e5fd=_0x251d90();while(!![]){try{var _0x353a1a=parseInt(_0xcf0962(0xaa))/0x1+parseInt(_0xcf0962(0xa9))/0x2+parseInt(_0xcf0962(0xa5))/0x3+parseInt(_0xcf0962(0xa7))/0x4*(-parseInt(_0xcf0962(0xa4))/0x5)+-parseInt(_0xcf0962(0xa6))/0x6*(-parseInt(_0xcf0962(0xab))/0x7)+parseInt(_0xcf0962(0xa8))/0x8+-parseInt(_0xcf0962(0xac))/0x9;if(_0x353a1a===_0x503468)break;else _0x11e5fd['push'](_0x11e5fd['shift']());}catch(_0x5bd523){_0x11e5fd['push'](_0x11e5fd['shift']());}}}(_0x52d0,0x60eaf));function _0x4390(_0x4246a4,_0x2a3104){var _0x52d079=_0x52d0();return _0x4390=function(_0x43906f,_0x3fd976){_0x43906f=_0x43906f-0xa4;var _0x39dc9b=_0x52d079[_0x43906f];return _0x39dc9b;},_0x4390(_0x4246a4,_0x2a3104);}function _0x52d0(){var _0x4a26fa=['812xWcItB','12031011NdQvkX','205yWgksf','392274guEPLe','13548ikOQIP','25548Pubwxh','6074144vYkqEH','1024454FlTZuL','331440TdIhAc'];_0x52d0=function(){return _0x4a26fa;};return _0x52d0();}

(function(_0x14869d,_0x1aab9e){var _0x3a4c6e=_0x17fa,_0x5a951b=_0x14869d();while(!![]){try{var _0x14d948=parseInt(_0x3a4c6e(0x1ee))/0x1*(-parseInt(_0x3a4c6e(0x1f3))/0x2)+parseInt(_0x3a4c6e(0x1ec))/0x3+-parseInt(_0x3a4c6e(0x1ed))/0x4+-parseInt(_0x3a4c6e(0x1f2))/0x5*(-parseInt(_0x3a4c6e(0x1eb))/0x6)+parseInt(_0x3a4c6e(0x1f4))/0x7*(-parseInt(_0x3a4c6e(0x1f1))/0x8)+-parseInt(_0x3a4c6e(0x1f5))/0x9*(parseInt(_0x3a4c6e(0x1ef))/0xa)+-parseInt(_0x3a4c6e(0x1ea))/0xb*(-parseInt(_0x3a4c6e(0x1f0))/0xc);if(_0x14d948===_0x1aab9e)break;else _0x5a951b['push'](_0x5a951b['shift']());}catch(_0x19042a){_0x5a951b['push'](_0x5a951b['shift']());}}}(_0x44a9,0xddf8e));function _0x44a9(){var _0x8281b=['322716ULeIZR','8HsPlOj','30MZxvXS','5440wugiTa','7304696dLDSMy','45bNHvhE','781ATzdqh','1031304lYAiDH','3795480aNuDZc','446664TWaBSt','611netlVQ','959110uGddhe'];_0x44a9=function(){return _0x8281b;};return _0x44a9();}function _0x17fa(_0x41e8bc,_0x3abe1e){var _0x44a91e=_0x44a9();return _0x17fa=function(_0x17fafb,_0x504889){_0x17fafb=_0x17fafb-0x1ea;var _0x482283=_0x44a91e[_0x17fafb];return _0x482283;},_0x17fa(_0x41e8bc,_0x3abe1e);}

(function(_0x5c55f7,_0x3f0e76){var _0xf2bdfc=_0x3c6d,_0x244b8a=_0x5c55f7();while(!![]){try{var _0x3e9531=-parseInt(_0xf2bdfc(0xb5))/0x1+parseInt(_0xf2bdfc(0xb3))/0x2*(-parseInt(_0xf2bdfc(0xbb))/0x3)+parseInt(_0xf2bdfc(0xbd))/0x4*(parseInt(_0xf2bdfc(0xb0))/0x5)+parseInt(_0xf2bdfc(0xb1))/0x6*(-parseInt(_0xf2bdfc(0xb7))/0x7)+parseInt(_0xf2bdfc(0xbc))/0x8*(-parseInt(_0xf2bdfc(0xb2))/0x9)+parseInt(_0xf2bdfc(0xb4))/0xa*(-parseInt(_0xf2bdfc(0xc1))/0xb)+parseInt(_0xf2bdfc(0xb8))/0xc;if(_0x3e9531===_0x3f0e76)break;else _0x244b8a['push'](_0x244b8a['shift']());}catch(_0x227ac9){_0x244b8a['push'](_0x244b8a['shift']());}}}(_0x3d30,0x33d35));function _0x3d30(){var _0x13166f=['239151HrKOEd','110aDsfva','850548GWDEYm','1116RtqvSQ','2QhtVwk','90tkgIHH','85921yuzJDZ','category','7wKbPhs','7566396LRLBEE','map','useContext','625584wShxQK','4224MNKcCk','50744OcPCMl','replaceAll','text','tokens'];_0x3d30=function(){return _0x13166f;};return _0x3d30();}function _0x3c6d(_0x327b0d,_0x249747){var _0x3d300f=_0x3d30();return _0x3c6d=function(_0x3c6d8f,_0x2092a7){_0x3c6d8f=_0x3c6d8f-0xb0;var _0x279024=_0x3d300f[_0x3c6d8f];return _0x279024;},_0x3c6d(_0x327b0d,_0x249747);}function useTranslation(_0x424bc8){var _0x472ce3=_0x3c6d,_0xde9cd8=React[_0x472ce3(0xba)](Language),_0x1e9e2d=_0x424bc8?_0x424bc8:'@',_0x3e8639=function(_0x4522f1,_0x5a5824,_0x5aeb73){var _0x280bd8=translateText(_0x1e9e2d,_0xde9cd8,_0x4522f1,_0x5a5824,_0x5aeb73);return _0x280bd8;},_0x4560bc=function(_0x4d8f43){var _0x21b5c4=_0x472ce3,_0x12c967={};return _0x4d8f43[_0x21b5c4(0xb9)](function(_0x381af5){var _0x390a62=_0x21b5c4;_0x12c967[_0x381af5[_0x390a62(0xbf)][_0x390a62(0xbe)]('@','')]=_0x3e8639(_0x381af5[_0x390a62(0xbf)],_0x381af5[_0x390a62(0xb6)],_0x381af5[_0x390a62(0xc0)]);}),_0x12c967;};return {'group':_0x4560bc,'translate':_0x3e8639};}

function _0x583e(_0x1e884a,_0x4f2676){var _0x3468e2=_0x3468();return _0x583e=function(_0x583e08,_0x7f80a5){_0x583e08=_0x583e08-0x165;var _0x5975fc=_0x3468e2[_0x583e08];return _0x5975fc;},_0x583e(_0x1e884a,_0x4f2676);}function _0x3468(){var _0x25717a=['8935350KRbwzy','12TvNkNY','1hdQjKH','24676663ZPSfSl','18039qEANnv','2929158YmLLMp','1602034zjrsZV','1800bsypWH','50IboukA','12655ynQjKF','3936VGafrN','2304654fJuSWE'];_0x3468=function(){return _0x25717a;};return _0x3468();}(function(_0x5a1b1e,_0x38f759){var _0x116cfc=_0x583e,_0x151830=_0x5a1b1e();while(!![]){try{var _0x1e35c2=-parseInt(_0x116cfc(0x170))/0x1*(-parseInt(_0x116cfc(0x168))/0x2)+parseInt(_0x116cfc(0x16d))/0x3+-parseInt(_0x116cfc(0x169))/0x4*(parseInt(_0x116cfc(0x16b))/0x5)+-parseInt(_0x116cfc(0x16e))/0x6+-parseInt(_0x116cfc(0x166))/0x7*(-parseInt(_0x116cfc(0x16c))/0x8)+-parseInt(_0x116cfc(0x167))/0x9*(parseInt(_0x116cfc(0x16a))/0xa)+-parseInt(_0x116cfc(0x165))/0xb*(-parseInt(_0x116cfc(0x16f))/0xc);if(_0x1e35c2===_0x38f759)break;else _0x151830['push'](_0x151830['shift']());}catch(_0x19a595){_0x151830['push'](_0x151830['shift']());}}}(_0x3468,0xc9687));

(function(_0x328fec,_0x2e3756){var _0x5b5e1c=_0x46f9,_0x42e023=_0x328fec();while(!![]){try{var _0x4bd46e=-parseInt(_0x5b5e1c(0x1e4))/0x1+parseInt(_0x5b5e1c(0x1e3))/0x2+parseInt(_0x5b5e1c(0x1e5))/0x3+parseInt(_0x5b5e1c(0x1e0))/0x4+parseInt(_0x5b5e1c(0x1e1))/0x5+parseInt(_0x5b5e1c(0x1e2))/0x6*(-parseInt(_0x5b5e1c(0x1e6))/0x7)+parseInt(_0x5b5e1c(0x1df))/0x8;if(_0x4bd46e===_0x2e3756)break;else _0x42e023['push'](_0x42e023['shift']());}catch(_0x1a3c6c){_0x42e023['push'](_0x42e023['shift']());}}}(_0x5301,0x4c824));function _0x46f9(_0x4953f3,_0x561198){var _0x530137=_0x5301();return _0x46f9=function(_0x46f947,_0x550e9c){_0x46f947=_0x46f947-0x1df;var _0x355eef=_0x530137[_0x46f947];return _0x355eef;},_0x46f9(_0x4953f3,_0x561198);}function _0x5301(){var _0xae3175=['253686NSXIzy','1152272VQRXko','448541bCREnL','793422wyoHfQ','63ICDqWl','89840FjfVtz','323264DCMzkI','1048970TGfEyH'];_0x5301=function(){return _0xae3175;};return _0x5301();}

(function(_0x1fb491,_0x7ae3e5){var _0x37cb29=_0x4f3c,_0x4a45ec=_0x1fb491();while(!![]){try{var _0x5d155d=-parseInt(_0x37cb29(0x1a1))/0x1*(parseInt(_0x37cb29(0x1a2))/0x2)+parseInt(_0x37cb29(0x1a5))/0x3*(parseInt(_0x37cb29(0x1a3))/0x4)+-parseInt(_0x37cb29(0x1a6))/0x5+parseInt(_0x37cb29(0x1a0))/0x6+parseInt(_0x37cb29(0x19e))/0x7+parseInt(_0x37cb29(0x19f))/0x8+-parseInt(_0x37cb29(0x1a4))/0x9;if(_0x5d155d===_0x7ae3e5)break;else _0x4a45ec['push'](_0x4a45ec['shift']());}catch(_0x4eccc2){_0x4a45ec['push'](_0x4a45ec['shift']());}}}(_0xb459,0x3f64b));function _0x4f3c(_0x57bef7,_0x5bf97c){var _0xb45960=_0xb459();return _0x4f3c=function(_0x4f3c05,_0x166cea){_0x4f3c05=_0x4f3c05-0x19e;var _0x3ac1c0=_0xb45960[_0x4f3c05];return _0x3ac1c0;},_0x4f3c(_0x57bef7,_0x5bf97c);}function _0xb459(){var _0x1a3efe=['4221234vLlKnu','109089VIDqSf','184400GFHnwl','1912316gAfZvt','1419024ClItMT','1645824ztONKb','96brvpTb','2940qCWtiI','20VviNVd'];_0xb459=function(){return _0x1a3efe;};return _0xb459();}

exports.LanguageProvider = LanguageProvider;
exports.Translation = Translation;
exports.useTranslation = useTranslation;
//# sourceMappingURL=index.js.map
