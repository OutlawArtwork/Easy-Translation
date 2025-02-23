import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

/**
 * Language Props
 * @author Wallace Krumrei
 */

interface ILanguage {
    children: React.ReactNode;
    supported: string[];
    url?: string;
}

declare function LanguageProvider({ url, supported, children }: ILanguage): react_jsx_runtime.JSX.Element;

declare function Translation$1({ from, children, category, }: {
    from?: any;
    children?: any;
    category?: any;
}): any;

type Type<T> = {
    [K in keyof T]: T[K];
} & {};
/**
 * Translation Type
 */
type Translation = {
    text: string;
    category?: any;
    tokens?: any[];
};

declare function useTranslation(category?: string): {
    group: (list: Type<Translation>[]) => any;
    translate: (text: string, category?: any, tokens?: any[]) => any;
};

export { LanguageProvider, Translation$1 as Translation, useTranslation };
