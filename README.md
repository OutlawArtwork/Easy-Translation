# React - Easy Translation

> Easily add language translations to your React/Next application.

## Prerequisites

This project was built using React (version 19.0.0).

## Table of contents

- [Easy Peasy Translation](#project-name)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [LanguageProvider Context](#LanguageProvider)
    - [Language Files](#language-files)
    - [useTranslation Hook](#useTranslation)
    - [translate function](#translate)
    - [group function](#translate-group)
    - [Translation Component](#translation)
  - [Versioning](#versioning)
  - [Authors](#authors)

## Installation

To install the library, run:

```sh
$ npm i easy-peasy-translation
```

## Usage

## LanguageProvider

The LanuageProvider must be added to the top level of your application as it sets up the required Context.

Props:

`url` (Optional)

| Type   | Description                                                                                             |
| ------ | ------------------------------------------------------------------------------------------------------- |
| string | The url to language files directory. If not included will look in your server public "locale" directory |

`supported` (Required)

| Type          | Description                 |
| ------------- | --------------------------- |
| Array[string] | List of supported languages |

Example:

### For ReactJS. The provider can be added directly to the top level.

```tsx
import { LanguageProvider } from "easy-peasy-translation";
function main() {
  return (
    <LanguageProvider
      url="<http path to language directory>"
      supported={["en", "fr"]}
    >
      <div>...</div>
    </LanguageProvider>
  );
}
export default main;
```

### For NextJS. The provider needs to be added from inside a client component.

```tsx
function main() {
  return (
    <Lang>
      <div>...</div>
    </Lang>
  );
}
export default main;
```

```tsx
"use client";
import React from "react";
import { LanguageProvider } from "easy-peasy-translation";

function Lang({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider
      url="<http path to language directory>"
      supported={["en", "fr"]}
    >
      {children}
    </LanguageProvider>
  );
}
export default Lang;
```

## Language Files

Language files are JSON files that are seperated into sections.
Language files must be localed in at publicly accessable url. `http://someurl.com/locale`

> If `url` is not supplied, falls back to '/Public/Locale/'

Language file names must be named based on the supported language:

Files:

- en.json
- fr.json

> The first section for each language file MUST have the "@" section. See below for an example.

Usage:

### Basic

```json
{
  "@": {
    "key": "This is the text to be translated"
  }
}
```

### Multiple (Pipe split)

```json
{
  "@": {
    "key": "This is the text | to translate to that is indexed"
  }
}
```

### Tokenized

```json
{
  "@": {
    "key": "This is a token [$0] and some more tokens [$1] [$2]"
  }
}
```

Example:

> en.json

```json
{
  "@": {
    "title": "This is an English language file",
    "multiple": "This is a string | That can be indexed",
    "tokens": "This is an indexed string | With tokens [$0] [$1]"
  },
  "section1": {
    "title": "This is section one",
    "tokens": "This is a string with tokens [$0] [$1]"
  },
  "section2": {
    "title": "This is section two",
    "subtitle": "This is section two"
  }
}
```

## useTranslation

This is the most common way to use the translation library.

Usage:

```ts
useTranslation("section");
```

Options:

`section` (Optional)

| Type   | Default value | Description                                             |
| ------ | ------------- | ------------------------------------------------------- |
| string | undefined     | All translations will use a passed "section" as default |

## Translate

Usage:

```ts
translate("@text@", "section", ["tokens"])[idx];
```

Options:

`@text@` (Required)

| Type   | value    | Description                                                      |
| ------ | -------- | ---------------------------------------------------------------- |
| string | "@text@" | The translation key that must match the key in the language file |

`section` (Optional)

| Type   | value     | Description                                   |
| ------ | --------- | --------------------------------------------- |
| string | "section" | Section of the language file this key exists. |

if "-" is passed in the section field. Looks in the current section.

`tokens` (Optional)

| Type           | value                | Description                                                                  |
| -------------- | -------------------- | ---------------------------------------------------------------------------- |
| Array[strings] | ["token1", "token2"] | Token strings. Language matches tokens on an index. See language file above. |

### Basic

```ts
translate("@title@");
```

### Multiple (Pipe split)

```ts
translate("@multiple@")[0];
translate("@multiple@")[1];
```

### Tokenized

```ts
translate("@tokens@", "section1", ["token1", "token2"]);
```

Example:

```tsx
import { useTranslation } from "easy-peasy-translation";

function MyComponent() {
  const { translate: t } = useTranslation("section1"); // Switch default to Section1

  return (
    <div>
      <p>{t("@title@")}</p>
      <p>{t("@title@", "@")}</p>
      <p>{t("@multple@", "@")[1]}</p>
      <p>{t("@tokens@", "@", ["token1", "token2"])[1]}</p>
      <p>{t("@title@", "section2")}</p>
    </div>
  );
}
export default MyComponent;
```

## Translate Group

This function can be used to translate an Array of Translation Objects

Usage:

```ts
group([{ text: "@text@", section: "section", tokens: ["tokens"] }]);
```

Options:

`object` (Required)

| Type      | value             | Description                          |
| --------- | ----------------- | ------------------------------------ |
| Array[{}] | [{text:"@text@"}] | Pass an array of Translation Objects |

### Basic

```tsx
import { useTranslation } from "easy-peasy-translation";

function MyComponent() {
  const { group: t } = useTranslation();
  const translations = t([{ text: "@title@" }, { text: "@subtitle@" }]);

  return (
    <div>
      <p>{translations.title}</p>
      <p>{translations.subtitle}</p>
    </div>
  );
}
export default MyComponent;
```

### Multiple (Pipe split)

```tsx
import { useTranslation } from "easy-peasy-translation";

function MyComponent() {
  const { group: t } = useTranslation();
  const translations = t([{ text: "@multiple@" }]);

  return (
    <div>
      <p>{translations.multiple[0]}</p>
      <p>{translations.multiple[1]}</p>
    </div>
  );
}
export default MyComponent;
```

### Tokenized

```tsx
import { useTranslation } from "easy-peasy-translation";

function MyComponent() {
  const { group: t } = useTranslation("section1");
  const translations = t([
    { text: "@tokens@", "-", ["token1", "token2"] }
  ]);

  return (
    <div>
      <p>{translations.tokens}</p>
    </div>
  );
}
export default MyComponent;
```

Example:

```tsx
import { useTranslation } from "easy-peasy-translation";

function MyComponent() {
  const { group: t } = useTranslation("Section2");
  const translations = t([
    { text: "@title@" },
    { text: "@subtitle@" },
    { text: "@tokens@", category: "@", tokens: ["token1", "token2"] },
  ]);

  return (
    <div>
      <p>{translations.title}</p>
      <p>{translations.subtitle}</p>
      <p>{translations.tokens[0]}</p>
      <p>{translations.tokens[1]}</p>
    </div>
  );
}
export default MyComponent;
```

## Translation

The Translation Component can also be used. This component translates @text@ tokens by passing JSX.

Options:

`category` (Required)

| Type   | Default value | Description                                                      |
| ------ | ------------- | ---------------------------------------------------------------- |
| string | undefined     | The translation key that must match the key in the language file |

`@text@` (Required)

| Type   | Default value | Description                                             |
| ------ | ------------- | ------------------------------------------------------- |
| string | ""            | All translations will use a passed "section" as default |

Example:

```tsx
"use client";
import { Translation } from "easy-peasy-translation";

function MyComponent() {
  return (
    <div>
      <Translation category={"Section2"}>
        <h3>@title@</h3>
        <p>@subtitle@</p>
      </Translation>
    </div>
  );
}
export default MyComponent;
```

## Versioning

- 1.0.2 [STABLE]
- 1.0.1
- 1.0.0

## Authors

- **Wallace Krumrei** - [WallaceKrumrei](https://github.com/OutlawArtwork)
