import type { StylesConfig } from "react-select";
import type { Options } from "./admin/patientTable/table";

export const selectStyles = (
  darkMode: boolean,
): StylesConfig<Options, false> => ({
  control: (base) => ({
    ...base,
    backgroundColor: darkMode ? "#18181b" : "#ffffff",
    borderColor: darkMode ? "#3f3f46" : "#d4d4d8",
    color: darkMode ? "#f4f4f5" : "#18181b",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: darkMode ? "#18181b" : "#ffffff",
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
  menuPortal: (base) => ({
    ...base,
    zIndex: 99999, // must be higher than your modal (z-70)
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