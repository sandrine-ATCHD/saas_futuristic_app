// components/Button.tsx

'use client';
import React from 'react';

interface ButtonProps {
  label: string;        // texte du bouton
  bgColor?: string;     // couleur de fond
  textColor?: string;   // couleur du texte
  borderColor?: string; // couleur de la bordure
}

const Button: React.FC<ButtonProps> = ({
  label,
  bgColor,
  textColor = 'text-white',
  borderColor,
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} border ${borderColor} px-4 py-2 rounded-3xl `}
    >
      {label}
    </button>
  );
};

export default Button;
