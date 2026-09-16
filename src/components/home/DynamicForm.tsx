import React, { useState, useRef, useEffect } from 'react';

// --- Types ---
export interface SelectOption {
  value: string;
  label: string;
}

export type FieldType = 'text' | 'select' | 'date';

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: SelectOption[];
  isMulti?: boolean;
  isSearch?: boolean;
}

export type FormDataState = Record<string, any>;

export interface DynamicFormProps {
  fields: FormField[];
  formData: FormDataState;
  setFormData: React.Dispatch<React.SetStateAction<FormDataState>>;
}

// --- Shared Styles (DRY Principle) ---
const styles = {
  // Main container holds the gap between rows
  container: 'w-full flex flex-col gap-[20px]',
  // Each row is a rounded gray block
  row: 'flex flex-col bg-gray-50 rounded-[var(--radius-button)] relative',
  // Base input styles with your exact padding and rounded corners
  inputBase: 'w-full px-[16px] py-[9px] bg-transparent text-black outline-none border-none placeholder-black',
  dropdownTrigger: 'w-full px-[16px] py-[9px] bg-transparent cursor-pointer flex justify-between items-center text-black border-none',
  dropdownMenu: 'absolute z-50 top-full left-0 w-full mt-1 bg-white rounded-[var(--radius-button)] shadow-lg max-h-60 overflow-auto',
  searchWrapper: 'p-2 sticky top-0 bg-white rounded-t-[var(--radius-button)]',
};

// --- Icons ---
const ChevronDown = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);
const CalendarIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);
const SearchIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const CheckIcon = () => (
  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);

// --- Sub-Components ---

const TextInput: React.FC<{ placeholder?: string; value: string; onChange: (v: string) => void }> = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    className={styles.inputBase}
    placeholder={placeholder}
    value={value || ''}
    onChange={(e) => onChange(e.target.value)}
  />
);

const DatePicker: React.FC<{ placeholder?: string; value: string; onChange: (v: string) => void }> = ({ placeholder, value, onChange }) => (
  <div className="relative w-full flex items-center">
    <input
      type="date"
      className={`${styles.inputBase} appearance-none`}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Dropdown: React.FC<{
  options?: SelectOption[];
  value: SelectOption | SelectOption[] | null;
  onChange: (v: any) => void;
  placeholder?: string;
  isMulti?: boolean;
  isSearch?: boolean;
}> = ({ options = [], value, onChange, placeholder, isMulti, isSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelect = (option: SelectOption) => {
    if (isMulti) {
      const current = Array.isArray(value) ? value : [];
      const exists = current.some(v => v.value === option.value);
      onChange(exists ? current.filter(v => v.value !== option.value) : [...current, option]);
    } else {
      onChange(option);
      setIsOpen(false);
    }
  };

  const isSelected = (option: SelectOption) => {
    if (isMulti) return Array.isArray(value) && value.some(v => v.value === option.value);
    return (value as SelectOption)?.value === option.value;
  };

  const displayText = () => {
    if (isMulti) {
      if (!value || !Array.isArray(value) || value.length === 0) return placeholder;
      return value.map(v => v.label).join(', ');
    }
    return value ? (value as SelectOption).label : placeholder;
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className={styles.dropdownTrigger} onClick={() => setIsOpen(!isOpen)}>
        <span className={!value || (isMulti && Array.isArray(value) && value.length === 0) ? "text-gray-500" : "text-black"}>
          {displayText()}
        </span>
        <ChevronDown />
      </div>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {isSearch && (
            <div className={styles.searchWrapper}>
              <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded">
                <SearchIcon />
                <input
                  className="w-full bg-transparent text-black outline-none border-none text-sm"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
          )}
          <div className="py-1">
            {filteredOptions.length === 0 && <div className="p-3 text-sm text-gray-400 text-center">No options</div>}
            {filteredOptions.map((opt) => (
              <div
                key={opt.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center text-sm text-black"
                onClick={() => handleSelect(opt)}
              >
                <span>{opt.label}</span>
                {isSelected(opt) && <CheckIcon />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Export ---
const DynamicForm: React.FC<DynamicFormProps> = ({ fields, formData, setFormData }) => {
  const handleChange = (id: string, value: any) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className={styles.container}>
      {fields.map((field) => (
        <div key={field.id} className={styles.row}>
          {field.type === 'text' && (
            <TextInput
              placeholder={field.placeholder || field.label}
              value={formData[field.id] as string}
              onChange={(val) => handleChange(field.id, val)}
            />
          )}
          {field.type === 'date' && (
            <DatePicker
              placeholder={field.placeholder || field.label}
              value={formData[field.id] as string}
              onChange={(val) => handleChange(field.id, val)}
            />
          )}
          {field.type === 'select' && (
            <Dropdown
              options={field.options}
              isMulti={field.isMulti}
              isSearch={field.isSearch}
              placeholder={field.placeholder || field.label}
              value={formData[field.id]}
              onChange={(val) => handleChange(field.id, val)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;