import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'ja'] as const;
type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    return {
      locale: 'en',
      messages: (await import(`../messages/en.json`)).default
    };
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});