export declare const LANGUAGES: {
    de_DE: string[];
    en_US: string[];
    es_ES: string[];
    fr_FR: string[];
    it_IT: string[];
    ja_JP: string[];
    ko_KR: string[];
    pt_PT: string[];
    zh_CN: string[];
    zh_TW: string[];
};
export declare type Language = keyof typeof LANGUAGES;
export declare function generateMnemonic(language: Language, wordCount: number, separator?: string): string;
