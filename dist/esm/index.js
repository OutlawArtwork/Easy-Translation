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

// Language context
var Language = React.createContext("en");

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
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, fetch("".concat(url, "/").concat(getLanguage(supported), ".json"))];
                    case 2:
                        file = _b.sent();
                        if (!file.ok)
                            throw new Error("File not found: ".concat(file.status));
                        if (!file.ok) return [3 /*break*/, 4];
                        _a = setLoaded;
                        return [4 /*yield*/, file.json()];
                    case 3:
                        _a.apply(void 0, [_b.sent()]);
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        throw new Error("-Easy Translation-: ".concat(error_1.message));
                    case 6: return [2 /*return*/];
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
        return jsx(Fragment, {});
    return jsx(Language.Provider, { value: loaded, children: children });
}

/**
 * Translate string
 * @param defaultCategory // defaults to "Default"
 * @param language // Language set by navigator
 * @param text // String to translate
 * @param category // override category
 * @param tokens // Array of text tokens for replace
 * @returns string
 */
var translateText = function (defaultCategory, language, text, category, tokens) {
    category = getCategory(category, defaultCategory);
    var value = text
        .toLowerCase()
        .replace(/@([\w]+)@/g, function (_, token) { return language[category][token]; });
    if (!value || value === undefined || value === "undefined") {
        return text;
    }
    if (tokens) {
        value = checkTokens(value, tokens);
    }
    if (value.includes("|"))
        return value.split("|");
    return value;
};
/**
 * Get the category
 * @param category // values "@ | - | Custom"
 * @param defaultCategory
 * @returns string
 */
var getCategory = function (category, defaultCategory) {
    switch (category) {
        case "@": {
            return "@";
        }
        case undefined:
        case "-": {
            return defaultCategory;
        }
    }
    return category;
};
/**
 * Convert any tokenized values '[token]'
 * @param text // String to replace tokens
 * @param tokens // Array of string tokens
 * @returns string
 */
var checkTokens = function (text, tokens) {
    var tokenString = text;
    for (var _i = 0, _a = Object.entries(tokens); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        tokenString = tokenString.replaceAll("[$" + key.toString() + "]", value);
    }
    return tokenString;
};

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

/**
 * Translation hook
 * @description This hook can be used to easily translate text
 * @author Wallace Krumrei
 */
function useTranslation(category) {
    var language = React.useContext(Language);
    var defaultCategory = category ? category : "@";
    /**
     * Translate string
     * @param text // String of text to translate
     * @param category // {optional} Change default category
     * @param tokens  // (optional) Array of string tokens
     * @returns Translated string or Translated string array
     */
    var translate = function (text, category, tokens) {
        var value = translateText(defaultCategory, language, text, category, tokens);
        return value;
    };
    /**
     * Translate an array of Translations
     * @param list // Array of Translation types
     * @returns Array of translated objects
     */
    var group = function (list) {
        var translations = {};
        list.map(function (item) {
            translations[item.text.replaceAll("@", "")] = translate(item.text, item.category, item.tokens);
        });
        return translations;
    };
    return { group: group, translate: translate };
}

export { LanguageProvider, Translation, useTranslation };
//# sourceMappingURL=index.js.map
