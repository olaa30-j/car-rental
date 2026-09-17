import React from 'react';
import type { SelectOption } from '../shared/Dropdown';
import Dropdown from '../shared/Dropdown';

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
  row: 'flex flex-col bg-gray-50 rounded-[12px] relative',
  // Base input styles with your exact padding and rounded corners
  inputBase: 'w-full bg-transparent text-black outline-none border-none placeholder-black',
};


// --- Sub-Components ---

const TextInput: React.FC<{ placeholder?: string; value: string; onChange: (v: string) => void }> = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    className={styles.inputBase}
    style={{ paddingBlock: '9px', paddingInline: '16px' }}
    placeholder={placeholder}
    value={value || ''}
    onChange={(e) => onChange(e.target.value)}
  />
);

const DatePicker: React.FC<{ placeholder?: string; value: string; onChange: (v: string) => void }> = ({ value, onChange }) => (
  <div className="relative w-full flex items-center">
    <input
      type="date"
      className={`${styles.inputBase} appearance-none`}
      style={{ paddingBlock: '9px', paddingInline: '16px' }}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

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