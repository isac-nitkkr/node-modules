import { MdDateRange } from 'react-icons/md';
import { z } from 'zod';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/forms/interfaces/FormElements';
import DatePicker from '@/components/inputs/date';

import TextValidationForm from './InputBasedForm';

const input_type: ElementsType = 'TimeField';

export const DateFieldFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <DatePicker
      className="w-full"
      readOnly
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: DatePicker,
  propertiesComponent: TextValidationForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Date Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdDateRange,
    label: 'Date Field',
  },
  schemaObject: schemaObject,
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
    format: 'date',
  };
}
function schemaObject(required: boolean) {
  if (required) {
    return z.date();
  } else {
    return z.date().optional();
  }
}
