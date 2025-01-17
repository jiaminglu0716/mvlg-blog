1. For Setting Context

```tsx
type Setting = {};

const setting: Setting = {};

const SettingContext = createContext(null);

<SettingContext.Provider value={setting}></SettingContext.Provider>;

const context = useContext<Setting>(SettingContext);
```

2. For Input Config Value Change

```tsx
const t = {
  value: "",
  onChange() {},
};

export default function useChangeValue<T extends any>(
  value: T,
  change: (e) => void
) {
  const [cvalue, setValue] = useState<T>(value);
  return {
    value: cvalue,
    onChange(e) {
      setValue(e.target.value);
      change(e);
    },
  };
}
```
