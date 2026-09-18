import React, { useState, useRef, useEffect } from 'react';

// --- Types ---
export interface SelectOption {
  value: string;
  label: string;
}

// --- Shared Styles (DRY Principle) ---
const styles = {
  dropdownTrigger:
    'w-full bg-transparent cursor-pointer flex justify-between items-center border-none',
  dropdownMenu:
    'absolute z-50 top-full left-0 w-full mt-1 bg-white rounded-[12px] shadow-lg max-h-60 overflow-auto',
  searchWrapper: 'p-2 sticky top-0 bg-white rounded-t-[12px]',
};

// --- Icons ---
const ChevronDown = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// --- Component ---
interface DropdownProps {
  options?: SelectOption[];
  value: SelectOption | SelectOption[] | null;
  onChange: (v: any) => void;
  placeholder?: string;
  isMulti?: boolean;
  isSearch?: boolean;
  textColor?: string;
  placeholderColor?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  value,
  onChange,
  placeholder,
  isMulti,
  isSearch,
  textColor = 'text-black',
  placeholderColor = 'text-gray-500',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: SelectOption) => {
    if (isMulti) {
      const current = Array.isArray(value) ? value : [];
      const exists = current.some((v) => v.value === option.value);
      onChange(
        exists
          ? current.filter((v) => v.value !== option.value)
          : [...current, option]
      );
    } else {
      onChange(option);
      setIsOpen(false);
    }
  };

  const isSelected = (option: SelectOption) => {
    if (isMulti)
      return Array.isArray(value) && value.some((v) => v.value === option.value);
    return (value as SelectOption)?.value === option.value;
  };

  const isEmpty =
    !value || (isMulti && Array.isArray(value) && value.length === 0);

  const displayText = () => {
    if (isMulti) {
      if (isEmpty) return placeholder;
      return (value as SelectOption[]).map((v) => v.label).join(', ');
    }
    return value ? (value as SelectOption).label : placeholder;
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      {/* Trigger */}
      <div
        className={styles.dropdownTrigger}
        style={{ paddingBlock: '9px', paddingInline: '16px' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={isEmpty ? placeholderColor : textColor}>
          {displayText()}
        </span>
        <span className={textColor}>
          <ChevronDown />
        </span>
      </div>

      {/* Menu */}
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {isSearch && (
            <div className={styles.searchWrapper}>
              <div
                className="flex items-center gap-2 bg-gray-100 rounded border-b border-gray-500"
                style={{ paddingInline: '4px', paddingBlock: '2px' }}
              >
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
            {filteredOptions.length === 0 && (
              <div className="text-sm text-center" style={{ padding: '3px' }}>
                No options
              </div>
            )}
            {filteredOptions.map((opt) => (
              <div
                key={opt.value}
                className="hover:bg-gray-100 cursor-pointer flex justify-between items-center text-sm text-black"
                style={{ paddingBlock: '2px', paddingInline: '4px' }}
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

export default Dropdown;