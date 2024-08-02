import Image from "next/image";
import React, { FC } from 'react';

// Define an interface for the component props
interface ButtonProps {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  // Define the button styles using inline CSS
  const buttonStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px', // approx gap-2 in Tailwind
    padding: '16px 28px', // approx px-7 py-4 in Tailwind
    fontFamily: 'Montserrat, sans-serif', // from Tailwind config
    fontSize: '20px', // text-lg in Tailwind
    lineHeight: 'normal', // leading-none in Tailwind
    backgroundColor: backgroundColor || '#FF6452', // bg-coral-red from Tailwind
    color: textColor || 'white', // text-white from Tailwind
    border: `1px solid ${borderColor || '#FF6452'}`, // border-coral-red from Tailwind
    borderRadius: '9999px', // rounded-full in Tailwind
    width: fullWidth ? '100%' : 'auto',
  };

  return (
    <button style={buttonStyles}>
      {label}
      {iconURL && (
        <span style={{ marginLeft: '8px', backgroundColor: 'white', borderRadius: '50%', width: '20px', height: '20px' }}>
          <Image
            src={iconURL}
            alt="icon"
            layout="fill" // Ensure the Image component from Next.js covers the span
            style={{ borderRadius: '50%' }}
          />
        </span>
      )}
    </button>
  );
};

export default Button;