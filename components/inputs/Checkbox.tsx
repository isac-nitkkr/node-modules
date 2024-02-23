'use client';
import { forwardRef } from 'react';

import { Checkbox } from '@/components/ui/checkbox';

import { InputProps } from '../ui/input';
import { Label } from '../ui/label';

interface ListProps extends InputProps {
  items: string[]; // Define type for items
  className?: string;
}

const CheckboxReactHookFormMultiple = forwardRef<HTMLDivElement, ListProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <div className={className} ref={ref}>
        <Label>{props.label ? props.label : 'Checkbox'}</Label>
        {props.required && <span style={{ color: '#EC734B' }}>*</span>}
        {items.map((item) => (
          <div
            key={item}
            className="flex flex-row items-start space-x-3 space-y-0"
          >
            <Checkbox disabled={props.disabled} required={props.required} />
            <Label className="text-sm font-medium">{item}</Label>
          </div>
        ))}
        <p className="marker:text-muted-foreground block text-[0.8rem] text-red-500 ">
          {props.errorMsg}
        </p>
      </div>
    );
  }
);

CheckboxReactHookFormMultiple.displayName = 'CheckboxReactHookFormMultiple';
export default CheckboxReactHookFormMultiple;
