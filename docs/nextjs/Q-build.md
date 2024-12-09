## Build

### Static Build

1. set next.config.ts

```ts
export default {
  output: "export",
};
```

2. but this is not support i18n and image optimized. So, we also need to add this for image.

```ts
export default {
  images: {
    unoptimized: true,
  },
};
```
