import * as de_DE from '../langs/de_DE.json';
import * as en_US from '../langs/en_US.json';
import * as es_ES from '../langs/es_ES.json';
import * as fr_FR from '../langs/fr_FR.json';
import * as it_IT from '../langs/it_IT.json';
import * as ja_JP from '../langs/ja_JP.json';
import * as ko_KR from '../langs/ko_KR.json';
import * as pt_PT from '../langs/pt_PT.json';
import * as zh_CN from '../langs/zh_CN.json';
import * as zh_TW from '../langs/zh_TW.json';

export const LANGUAGES = {
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
}

export type Language = keyof typeof LANGUAGES;

/**
 * Generates a random BIP 39 mnemonic.
 * @param language A language code available in the LANGUAGES object
 * @param wordCount The number of words to return
 * @param separator A string to separate the words with
 * @returns {string} A string of random words if separator is provided, otherwise a string of random words separated by a space
 */
export function generateMnemonic(language: Language, wordCount: number, separator: string = " "): string {
    const randArr = new Array(wordCount)
        .fill(0)
        .map(
            () => LANGUAGES[language][getRandomInt(0, 2047)]
        );
    
    return randArr.join(separator);
}

// stackoverflow.com/a/42321673/6634591
function getRandomInt(min: number, max: number): number {
    const randomBuffer = new Uint32Array(1);

    window.crypto.getRandomValues(randomBuffer);

    let randomNumber = randomBuffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}