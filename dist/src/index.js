"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMnemonic = exports.LANGUAGES = void 0;
const de_DE = __importStar(require("../langs/de_DE.json"));
const en_US = __importStar(require("../langs/en_US.json"));
const es_ES = __importStar(require("../langs/es_ES.json"));
const fr_FR = __importStar(require("../langs/fr_FR.json"));
const it_IT = __importStar(require("../langs/it_IT.json"));
const ja_JP = __importStar(require("../langs/ja_JP.json"));
const ko_KR = __importStar(require("../langs/ko_KR.json"));
const pt_PT = __importStar(require("../langs/pt_PT.json"));
const zh_CN = __importStar(require("../langs/zh_CN.json"));
const zh_TW = __importStar(require("../langs/zh_TW.json"));
exports.LANGUAGES = {
    'de_DE': de_DE,
    'en_US': en_US,
    'es_ES': es_ES,
    'fr_FR': fr_FR,
    'it_IT': it_IT,
    'ja_JP': ja_JP,
    'ko_KR': ko_KR,
    'pt_PT': pt_PT,
    'zh_CN': zh_CN,
    'zh_TW': zh_TW,
};
function generateMnemonic(language, wordCount, separator = " ") {
    const randArr = new Array(wordCount)
        .fill(0)
        .map(() => exports.LANGUAGES[language][getRandomInt(0, 2047)]);
    return randArr.join(separator);
}
exports.generateMnemonic = generateMnemonic;
function getRandomInt(min, max) {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    let randomNumber = randomBuffer[0] / (0xffffffff + 1);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}
//# sourceMappingURL=index.js.map