import React, { useState } from 'react';
import DynamicForm, { type FormDataState, type FormField } from '../home/DynamicForm';  

interface MainFormProps{
    className?: string;
    textColor?: string;
}

const MainForm: React.FC<MainFormProps> = ({className, textColor}) => {
    // 1. State management for the form
    const [formData, setFormData] = useState<FormDataState>({});

    // 2. Configuration array for the fields
    const formConfig: FormField[] = [
        { 
            id: 'carType', 
            label: 'Car type', 
            type: 'select', 
            placeholder: 'Car type',
            options: [
                { value: 'sedan', label: 'Sedan' },
                { value: 'suv', label: 'SUV' },
                { value: 'truck', label: 'Truck' }
            ]
        },
        { 
            id: 'rentalPlace', 
            label: 'Place of rental', 
            type: 'select', 
            isSearch: true, // Add search functionality
            placeholder: 'Place of rental',
            options: [
                { value: 'ny', label: 'New York' },
                { value: 'la', label: 'Los Angeles' },
                { value: 'chi', label: 'Chicago' },
            ]
        },
        { 
            id: 'returnPlace', 
            label: 'Place of return', 
            type: 'select', 
            isSearch: true,
            placeholder: 'Place of return',
            options: [
                { value: 'ny', label: 'New York' },
                { value: 'la', label: 'Los Angeles' },
                { value: 'chi', label: 'Chicago' },
            ]
        },
        { 
            id: 'rentalDate', 
            label: 'Rental date', 
            type: 'date',
            placeholder: 'Rental date' 
        },
        { 
            id: 'returnDate', 
            label: 'Return date', 
            type: 'date',
            placeholder: 'Return date' 
        },
        // Example of a multi-select and text field if needed:
        // { 
        //     id: 'extras', 
        //     label: 'Extras', 
        //     type: 'select', 
        //     isMulti: true, 
        //     placeholder: 'Select extras',
        //     options: [{value: 'gps', label: 'GPS'}, {value: 'seat', label: 'Child Seat'}]
        // },
        // { 
        //     id: 'name', 
        //     label: 'Driver Name', 
        //     type: 'text', 
        //     placeholder: 'Enter name' 
        // }
    ];

    const handleBookNow = () => {
        console.log("Form Submitted:", formData);
        alert("Check console for form data");
    }

    return (
        <div className={`${className} rounded-[var(--radius-button)] shadow-sm`} style={{padding: '40px'}}>
            <h4 className={`${textColor} text-center font-bold text-xl`}>
                Book your car
            </h4>
            
            <div style={{marginBlock: '20px'}}>
                {/* 3. Render the Dynamic Form */}
                <DynamicForm 
                    fields={formConfig} 
                    formData={formData} 
                    setFormData={setFormData} 
                />
            </div>

            <button 
                className='w-full button_style bg-secondary text-white font-semibold transition hover:opacity-90'
                onClick={handleBookNow}
            >
                Book now
            </button>
        </div>
    )
}

export default MainForm