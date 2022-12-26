export const Send = ({ type, value, ...props }) => (
    <input
        type={type}
        value={value}
        className="btn btn-success mt-3 mb-3"
        {...props}
    ></input>
);
