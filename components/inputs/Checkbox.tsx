'use client';

import { Checkbox } from '@/components/ui/checkbox';

import { Label } from '../ui/label';
import { GenericProps } from './radioItems';

interface CheckboxProps extends GenericProps {
  item: string;
  defaultChecked?: boolean;
  onChange?: (value: boolean) => void;
  value?: string;
}
const CheckboxGeneric = ({ ...props }: CheckboxProps) => {
  return (
    <div className={props.className}>
      <Label htmlFor={props.name}>
        {props.label ? props.label : 'Checkbox'}
      </Label>
      {props.required && <span style={{ color: '#EC734B' }}>*</span>}
      <div className="flex flex-row items-start space-x-3 space-y-0">
        <Checkbox
          disabled={props.disabled}
          required={props.required}
          defaultChecked={props.defaultChecked}
          onCheckedChange={props.onChange}
        />
        <Label className="text-sm font-medium" htmlFor={props.name}>
          {props.item}
        </Label>
      </div>
      <p className="marker:text-muted-foreground block text-[0.8rem] text-red-500 ">
        {props.errorMsg}
      </p>
    </div>
  );
};

export default CheckboxGeneric;
