## fs

### Resolve

[Github Issues](https://github.com/vercel/next.js/discussions/12124)

Finally, we find out this.

---

it seems that I cannot use fs event in getStaticProps, the compiler renders an error just when importing fs, even if it's not used at all..

---

The real reason is not the message in console. We need to check the code what we add before will cause this error.
