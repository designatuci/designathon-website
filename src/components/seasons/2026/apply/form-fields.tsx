"use client";

// there is no separate form-options file; define Option inline
import { useEffect, useRef, useState } from "react";
import s from "./css/form-fields.module.css";

type Option = { value: string; label: string };

// ─── Label helpers ────────────────────────────────────────────────────────────

const Required = () => <span className={s.required}>*</span>;
const Optional = () => <span className={s.optional}>(optional)</span>;
const CharLimit = ({ n }: { n: number }) => (
  <span className={s.charLimit}>({n} chars max)</span>
);

// ─── Shared dropdown internals ────────────────────────────────────────────────

const SearchInput = ({
  inputRef,
  query,
  onChange,
  onClear,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  query: string;
  onChange: (v: string) => void;
  onClear: () => void;
}) => (
  <div className={s.searchWrapper}>
    <div className={s.searchInner}>
      <svg
        className={s.searchIcon}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
        />
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className={s.searchInput}
      />
      {query && (
        <button type="button" onClick={onClear} className={s.searchClear}>
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  </div>
);

const Chevron = ({ open }: { open: boolean }) => (
  <span className={s.chevron}>
    <svg
      className={`${s.chevronIcon} ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M6 8l4 4 4-4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

// ─── Field wrapper ────────────────────────────────────────────────────────────

export const Field = ({
  id,
  label,
  required,
  optional,
  charLimit,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  charLimit?: number;
  children: React.ReactNode;
}) => (
  <div>
    <label htmlFor={id} className={s.label}>
      {label}
      {charLimit && <CharLimit n={charLimit} />}
      {required && <Required />}
      {optional && <Optional />}
    </label>
    {children}
  </div>
);

// ─── Basic inputs ─────────────────────────────────────────────────────────────

export const Input = ({
  id,
  name,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    required={required}
    className={s.base}
  />
);

export const Select = ({
  id,
  name,
  required,
  options,
}: {
  id: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <input
        type="hidden"
        name={name}
        value={selected?.value ?? ""}
        required={required}
      />
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        className={s.trigger}
      >
        {selected ? (
          <span className="text-white">{selected.label}</span>
        ) : (
          <span className="text-white/25">Select an option</span>
        )}
        <Chevron open={open} />
      </button>

      {open && (
        <div className={s.dropdown}>
          <ul className={s.list}>
            {options.map((o) => (
              <li
                key={o.value}
                onMouseDown={() => {
                  setSelected(o);
                  setOpen(false);
                }}
                className={`flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                  selected?.value === o.value
                    ? s.listItemHighlighted
                    : s.listItemDefault
                }`}
              >
                {o.label}
                {selected?.value === o.value && (
                  <svg
                    className={s.checkmark}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const TextArea = ({
  id,
  name,
  placeholder,
  rows = 4,
  maxLength,
  required,
}: {
  id: string;
  name: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  required?: boolean;
}) => (
  <textarea
    id={id}
    name={name}
    placeholder={placeholder}
    rows={rows}
    maxLength={maxLength}
    required={required}
    className={`${s.base} resize-none`}
  />
);

// ─── Searchable single select ─────────────────────────────────────────────────

export const SearchableSelect = ({
  id,
  name,
  options,
  placeholder = "Search or select...",
  required,
}: {
  id: string;
  name: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Option | null>(null);
  const [otherValue, setOtherValue] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const otherRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const isOther = selected?.value === "Other";
  const formValue = isOther ? otherValue : (selected?.value ?? "");

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    (listRef.current?.children[highlighted] as HTMLElement)?.scrollIntoView({
      block: "nearest",
    });
  }, [highlighted]);

  const select = (option: Option) => {
    if (option.value === "Other") {
      setSelected(option);
      setQuery("");
      // keep dropdown open, focus the inline other input
      setTimeout(() => otherRef.current?.focus(), 0);
    } else {
      setSelected(option);
      setOtherValue("");
      setQuery("");
      setOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
      setOpen(true);
      return;
    }
    if (e.key === "ArrowDown")
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
    else if (e.key === "ArrowUp") setHighlighted((h) => Math.max(h - 1, 0));
    else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered.length === 0 && query) {
        setSelected({ value: "Other", label: "Other" });
        setOtherValue(query);
        setQuery("");
        setOpen(false);
      } else if (filtered[highlighted]) {
        select(filtered[highlighted]);
      }
    } else if (e.key === "Escape") setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative" onKeyDown={handleKeyDown}>
      <input type="hidden" name={name} value={formValue} required={required} />
      <button
        type="button"
        id={id}
        onClick={() => {
          setOpen((o) => !o);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        className={s.trigger}
      >
        {selected ? (
          <span className="text-white">
            {isOther && otherValue ? otherValue : selected.label}
          </span>
        ) : (
          <span className="text-white/25">{placeholder}</span>
        )}
        <Chevron open={open} />
      </button>

      {open && (
        <div className={s.dropdown}>
          <SearchInput
            inputRef={inputRef}
            query={query}
            onChange={(v) => {
              setQuery(v);
              setHighlighted(0);
            }}
            onClear={() => setQuery("")}
          />
          <ul ref={listRef} className={s.list}>
            {filtered.length === 0 ? (
              <li className={s.listEmpty}>
                No results — press{" "}
                <kbd className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs text-white/50">
                  Enter
                </kbd>{" "}
                to add{" "}
                <span className="text-white/50">&ldquo;{query}&rdquo;</span>
              </li>
            ) : (
              filtered.map((o, i) => (
                <li
                  key={o.value}
                  onMouseDown={() => select(o)}
                  onMouseEnter={() => setHighlighted(i)}
                  className={`flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                    i === highlighted
                      ? s.listItemHighlighted
                      : s.listItemDefault
                  }`}
                >
                  {o.label}
                  {selected?.value === o.value && (
                    <svg
                      className={s.checkmark}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </li>
              ))
            )}
          </ul>
          {isOther && (
            <div className={s.otherRow}>
              <input
                ref={otherRef}
                type="text"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpen(false);
                  }
                }}
                placeholder="Please specify..."
                className={s.otherInput}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── Searchable multi select ──────────────────────────────────────────────────

export const SearchableMultiSelect = ({
  id,
  name,
  options,
  placeholder = "Search or select...",
  required,
}: {
  id: string;
  name: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Option[]>([]);
  // Custom values entered by the user (each becomes its own pill)
  const [customValues, setCustomValues] = useState<string[]>([]);
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const otherRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase()),
  );

  // All values for the hidden input: selected options + custom entries
  const formValue = [...selected.map((o) => o.value), ...customValues].join(
    ", ",
  );

  const totalCount = selected.length + customValues.length;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    (listRef.current?.children[highlighted] as HTMLElement)?.scrollIntoView({
      block: "nearest",
    });
  }, [highlighted]);

  const [otherInputValue, setOtherInputValue] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);

  const toggle = (option: Option) => {
    if (option.value === "Other") {
      setShowOtherInput(true);
      setOtherInputValue("");
      setTimeout(() => otherRef.current?.focus(), 0);
      return;
    }
    setSelected((prev) =>
      prev.find((o) => o.value === option.value)
        ? prev.filter((o) => o.value !== option.value)
        : [...prev, option],
    );
  };

  const confirmOther = () => {
    const trimmed = otherInputValue.trim();
    if (!trimmed) {
      setShowOtherInput(false);
      return;
    }
    if (!customValues.includes(trimmed)) {
      setCustomValues((prev) => [...prev, trimmed]);
    }
    setOtherInputValue("");
    setShowOtherInput(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const removeSelected = (value: string) =>
    setSelected((prev) => prev.filter((o) => o.value !== value));

  const removeCustom = (value: string) =>
    setCustomValues((prev) => prev.filter((v) => v !== value));

  const addCustom = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    if (customValues.includes(trimmed)) return;
    setCustomValues((prev) => [...prev, trimmed]);
    setQuery("");
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
      setOpen(true);
      return;
    }
    if (e.key === "ArrowDown")
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
    else if (e.key === "ArrowUp") setHighlighted((h) => Math.max(h - 1, 0));
    else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered.length === 0 && query) {
        addCustom(query);
      } else if (filtered[highlighted]) {
        toggle(filtered[highlighted]);
      }
    } else if (e.key === "Escape") setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative" onKeyDown={handleKeyDown}>
      <input
        type="hidden"
        name={name}
        value={formValue}
        required={required && totalCount === 0}
      />

      <button
        type="button"
        id={id}
        onClick={() => {
          setOpen((o) => !o);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        className={`${s.trigger} flex min-h-[42px] flex-wrap items-center gap-1.5 pr-10`}
      >
        {totalCount === 0 ? (
          <span className="text-white/25">{placeholder}</span>
        ) : (
          <>
            {selected.map((o) => (
              <span
                key={o.value}
                className="inline-flex items-center gap-1 rounded-md border border-purple-500/30 bg-purple-500/20 px-2 py-0.5 text-xs text-purple-200"
              >
                {o.label}
                <span
                  role="button"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    removeSelected(o.value);
                  }}
                  className="cursor-pointer text-purple-300/60 transition hover:text-purple-200"
                >
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </span>
            ))}
            {customValues.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-1 rounded-md border border-indigo-500/30 bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-200"
              >
                {v}
                <span
                  role="button"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    removeCustom(v);
                  }}
                  className="cursor-pointer text-indigo-300/60 transition hover:text-indigo-200"
                >
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </span>
            ))}
          </>
        )}
        <Chevron open={open} />
      </button>

      {open && (
        <div className={s.dropdown}>
          <SearchInput
            inputRef={inputRef}
            query={query}
            onChange={(v) => {
              setQuery(v);
              setHighlighted(0);
            }}
            onClear={() => setQuery("")}
          />
          <ul ref={listRef} className={s.list}>
            {filtered.length === 0 ? (
              <li className={s.listEmpty}>
                No results — press{" "}
                <kbd className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs text-white/50">
                  Enter
                </kbd>{" "}
                to add{" "}
                <span className="text-white/50">&ldquo;{query}&rdquo;</span>
              </li>
            ) : (
              filtered.map((o, i) => {
                const isSelected = selected.some((s) => s.value === o.value);
                return (
                  <li
                    key={o.value}
                    onMouseDown={() => toggle(o)}
                    onMouseEnter={() => setHighlighted(i)}
                    className={`flex cursor-pointer items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                      i === highlighted
                        ? s.listItemHighlighted
                        : s.listItemDefault
                    }`}
                  >
                    <span
                      className={`${s.checkbox} ${
                        isSelected ? s.checkboxChecked : s.checkboxUnchecked
                      }`}
                    >
                      {isSelected && (
                        <svg
                          className="h-2.5 w-2.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </span>
                    {o.label}
                  </li>
                );
              })
            )}
          </ul>
          {showOtherInput && (
            <div className={s.otherRow}>
              <input
                ref={otherRef}
                type="text"
                value={otherInputValue}
                onChange={(e) => setOtherInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    confirmOther();
                  }
                  if (e.key === "Escape") {
                    e.stopPropagation();
                    setShowOtherInput(false);
                  }
                }}
                placeholder="Type custom value..."
                className={s.otherInput}
              />
              <button
                type="button"
                onMouseDown={confirmOther}
                className={s.otherAdd}
              >
                Add
              </button>
            </div>
          )}
          {totalCount > 0 && (
            <div className={s.footer}>
              <span className={s.footerCount}>{totalCount} selected</span>
              <button
                type="button"
                onMouseDown={() => {
                  setSelected([]);
                  setCustomValues([]);
                }}
                className={s.footerClear}
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
