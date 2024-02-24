'use client';
import React, { useRef, useState } from 'react';

import EmailField from './email';
import TextField from './text';
import FileUpload from './fileUpload';
import CheckboxReactHookFormMultiple from './Checkbox';
import TimeField from './time';
import SelectDropdown from './selectIItem';
import { Button } from '../ui/button';
import DateTimeField from './date-time';
import PhoneField from './telephone';
import RadioGeneric from './radioItems';
import DropdownMenuMulti from './multiDropdown';

interface FormValues {
  email: string;
  name: string;
  file: FileList;
  checkbox: string[];
  dateTime: string;
  time: string;
  select: string;
  radio: string;
}

export default function Visualizer() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const dateTimeRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [radio, setRadio] = useState<string>(''); // State to hold the selected radio value

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormValues = {
      email: emailRef.current?.value || '',
      name: nameRef.current?.value || '',
      file: fileRef.current?.files || new FileList(),
      checkbox: checkboxRef.current?.value
        ? checkboxRef.current?.value.split(',')
        : [],
      dateTime: dateTimeRef.current?.value || '',
      time: timeRef.current?.value || '',
      select: selectRef.current?.value || '',
      radio: radio, // Set radio value from state
    };
    console.log('Submitted Data:', formData);
  };

  const items = ['item1', 'item2', 'item3', 'item4'];

  return (
    <form onSubmit={handleSubmit}>
      <div className="ml-80 w-80 space-y-6">
        <EmailField ref={emailRef} required />
        <TextField
          ref={nameRef}
          label="Name"
          placeholder="Enter your name"
          required
        />
        <FileUpload ref={fileRef} required />
        <CheckboxReactHookFormMultiple
          ref={checkboxRef}
          items={items}
          description="check only one value"
          required
        />
        <TimeField ref={timeRef} required />
        <DateTimeField ref={dateTimeRef} required />
        <SelectDropdown
          items={items}
          required
          onChange={() => {}}
          value={items[0]}
        />
        <PhoneField ref={phoneRef} required />
        <RadioGeneric
          items={items}
          required
          value={items[1]}
          onChange={(value) => {
            setRadio(value); // Update radio value in state
          }}
        />
        <DropdownMenuMulti items={items} required />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
