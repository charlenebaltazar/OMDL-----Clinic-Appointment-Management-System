// multiSelectStyles.ts
import type { StylesConfig, GroupBase } from "react-select";

export interface ServiceOption {
  value: string;
  label: string;
  price?: number;
}

export const getSelectStyles = <T, IsMulti extends boolean = false>(
  darkMode: boolean,
): StylesConfig<T, IsMulti, GroupBase<T>> => ({
  control: (base, state) => ({
    ...base,
    backgroundColor: darkMode ? "#18181b" : "#ffffff",
    borderColor: state.isFocused
      ? darkMode
        ? "#2563eb"
        : "#2563eb"
      : darkMode
        ? "#3f3f46"
        : "#d4d4d8",
    color: darkMode ? "#f4f4f5" : "#18181b",
    "&:hover": {
      borderColor: state.isFocused
        ? darkMode
          ? "#2563eb"
          : "#2563eb"
        : darkMode
          ? "#71717a"
          : "#a1a1aa",
    },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: darkMode ? "#18181b" : "#ffffff",
    zIndex: 99999, // above modals
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 99999,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? darkMode
        ? "#27272a"
        : "#f4f4f5"
      : darkMode
        ? "#18181b"
        : "#ffffff",
    color: darkMode ? "#f4f4f5" : "#18181b",
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
    color: darkMode ? "#f4f4f5" : "#18181b",
  }),
  input: (base) => ({
    ...base,
    color: darkMode ? "#f4f4f5" : "#18181b",
  }),
  placeholder: (base) => ({
    ...base,
    color: darkMode ? "#a1a1aa" : "#71717a",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: darkMode ? "#27272a" : "#e5e7eb",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: darkMode ? "#f4f4f5" : "#111827",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: darkMode ? "#f4f4f5" : "#111827",
    ":hover": {
      backgroundColor: darkMode ? "#ef4444" : "#f87171",
      color: "#fff",
    },
  }),
});