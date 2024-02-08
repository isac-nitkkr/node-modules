// This is a temporary file used to showcase different generic components.

import React from 'react';

import { EmailField } from './email';
import { NameField } from './name';
import { PhoneField } from './telephone';
import { DatePicker } from './date';
import { FileUpload } from './fileUpload';
import { CheckboxReactHookFormMultiple } from './select';
import { DateTimePicker } from './date-time-picker/date-time-picker';
import { TimeField } from './date-time-picker/time-field';

export default function Visualizer() {
  return (
    <div className="m-5 flex flex-col">
      <EmailField />
      <NameField required />
      <DatePicker required />
      <FileUpload required />
      <CheckboxReactHookFormMultiple />
      <PhoneField />
      <DateTimePicker granularity={'minute'} />
      <TimeField />
    </div>
  );
}
