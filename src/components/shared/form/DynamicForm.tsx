import React from 'react';
import type { SelectOption } from '../Dropdown';
import Dropdown from '../Dropdown';

// --- Types ---
export type FieldType = 'text' | 'select' | 'date';

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: SelectOption[];
  isMulti?: boolean;
  isSearch?: boolean;
  textColor?: string;
  placeholderColor?: string;
}

export type FormDataState = Record<string, any>;

export interface DynamicFormProps {
  fields: FormField[];
  formData: FormDataState;
  setFormData: React.Dispatch<React.SetStateAction<FormDataState>>;
  textColor?: string;
  placeholderColor?: string;
}

// --- Shared Styles (no dynamic props here) ---
const styles = {
  container: 'w-full flex flex-col gap-[20px]',
  row: 'flex flex-col bg-black/10 rounded-[12px] relative',
  inputBase: 'w-full bg-transparent outline-none border-none',
};

// --- Sub-Components ---

const TextInput: React.FC<{
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  textColor?: string;
  placeholderColor?: string;
}> = ({
  placeholder,
  value,
  onChange,
  textColor = '',
  placeholderColor = '',
}) => (
  <input
    type="text"
    className={`${styles.inputBase} ${textColor} ${placeholderColor}`}
    style={{ paddingBlock: '9px', paddingInline: '16px' }}
    placeholder={placeholder}
    value={value || ''}
    onChange={(e) => onChange(e.target.value)}
  />
);

const DatePicker: React.FC<{
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  textColor?: string;
  placeholderColor?: string;
}> = ({ value, onChange, textColor = '', placeholderColor = '' }) => (
  <div className="relative w-full flex items-center">
    <input
      type="date"
      className={`${styles.inputBase} ${textColor} ${placeholderColor} appearance-none`}
      style={{ paddingBlock: '9px', paddingInline: '16px' }}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

// --- Main Export ---
const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  formData,
  setFormData,
  textColor,
  placeholderColor,
}) => {
  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className={styles.container}>
      {fields.map((field) => {
        // Per-field override wins over the form-level values
        const fieldTextColor = field.textColor ?? textColor ?? '';
        const fieldPlaceholderColor =
          field.placeholderColor ?? placeholderColor ?? '';

        return (
          <div key={field.id} className={styles.row}>
            {field.type === 'text' && (
              <TextInput
                placeholder={field.placeholder || field.label}
                value={formData[field.id] as string}
                onChange={(val) => handleChange(field.id, val)}
                textColor={fieldTextColor}
                placeholderColor={fieldPlaceholderColor}
              />
            )}
            {field.type === 'date' && (
              <DatePicker
                placeholder={field.placeholder || field.label}
                value={formData[field.id] as string}
                onChange={(val) => handleChange(field.id, val)}
                textColor={fieldTextColor}
                placeholderColor={fieldPlaceholderColor}
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
                placeholderColor={fieldPlaceholderColor}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DynamicForm;