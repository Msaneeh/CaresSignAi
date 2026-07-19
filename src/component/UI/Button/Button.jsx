import './Button.css';

const Button = ({ variant = 'primary', className = '', children, ...rest }) => {
  return (
    <button
      type={rest.type || 'button'}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={rest.onClick}
      disabled={rest.disabled}
    >
      {children}
    </button>
  );
};

export default Button;