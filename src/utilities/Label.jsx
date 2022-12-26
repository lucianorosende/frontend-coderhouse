import { LabelDesign } from "../components/products/styles";

export const Label = ({
    children,
    labelName,
    id,
    className,
    type,
    name,
    placeholder,
    ...props
}) => (
    <div className="form-group">
        <LabelDesign htmlFor={labelName}>{labelName}</LabelDesign>
        <input
            id={id}
            className={className}
            type={type}
            name={name}
            required
            placeholder={placeholder}
            {...props}
        />
    </div>
);
