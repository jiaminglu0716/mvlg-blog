## Internation

### Static Web

#### Router Query For Locale

1. Get locale

```ts
// /posts?locale=ja
const router = useRouter();
const query = router.query;
const locale = query.locale ?? "en";
```

2. Locale persistent route link

3. Get i18n dict by locale (Recommand ts)

### Next Router

#### Default Locale

1. locale-switcher

```ts
import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```
