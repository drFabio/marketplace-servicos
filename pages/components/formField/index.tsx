import React, { FC } from "react";

/**
 * 😀 Typescript e propriedades react
 *
 * keywords: react , props
 */
export type FormFieldProps = {
  label: string;
  htmlId: string;
  required?: boolean;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormField: FC<FormFieldProps> = ({
  label,
  htmlId,
  type,
  required,
  ...rest
}) => {
  let parsedLabel = required ? `${label} *` : label;
  return (
    <label htmlFor={htmlId}>
      {parsedLabel}
      <input type={type} id={htmlId} required={required} {...rest} />
    </label>
  );
};
export default FormField;
