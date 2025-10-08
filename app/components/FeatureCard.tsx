import React from 'react';
import Link from 'next/link';
import Icone from './Icone';

interface FeatureCardProps {
  iconSrc: string;
  iconShadowColor?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  width: number;
  height: number;
  imageSrc?: string;
  imageAlt?: string;
  variant?: 'default' | 'large-image'; // Nouvelle prop pour distinguer les variantes
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  iconShadowColor,
  title,
  description,
  linkText,
  linkHref,
  width,
  height,
  imageSrc,
  imageAlt,
  variant = 'default', // Par défaut, comportement normal
}) => {
  // Version avec grande image centrée
  if (variant === 'large-image') {
    return (
      <div className="card w-full rounded-2xl p-6 blur-effect shadow-lg custom-shadow text-left flex flex-col gap-6 sm:rounded-3xl sm:p-8 md:p-12 lg:p-16 lg:flex-row lg:gap-8">
        <div className="flex-1">
          <div className="mb-4 sm:mb-5 md:mb-6">
            <Icone src={iconSrc} shadowColor={iconShadowColor} />
          </div>
          <h3 className="text-white text-lg font-semibold mb-3 sm:text-xl sm:mb-4">
            {title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-4 sm:text-sm sm:mb-5 md:mb-6">
            {description}
          </p>
          <Link
            href={linkHref}
            className="text-white hover:text-purple-300 text-xs font-medium inline-flex items-center gap-2 transition-colors underline sm:text-sm"
          >
            {linkText}
          </Link>
        </div>
        <div className="flex items-center justify-center flex-1">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto max-w-xs rounded-xl custom-shadow sm:max-w-sm md:max-w-md md:rounded-2xl"
            />
          )}
        </div>
      </div>
    );
  }

  // Version par défaut (pour les autres cards)
  return (
    <div className="card w-full rounded-2xl p-6 blur-effect shadow-lg custom-shadow text-left flex flex-col gap-6 sm:rounded-3xl sm:p-8 md:p-12 lg:p-16 lg:flex-row lg:items-start">
      <div className="flex-1">
        <div className="mb-4 sm:mb-5 md:mb-6">
          <Icone src={iconSrc} shadowColor={iconShadowColor} />
        </div>
        <h3 className="text-white text-lg font-semibold mb-3 sm:text-xl sm:mb-4">
          {title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-4 sm:text-sm sm:mb-5 md:mb-6">
          {description}
        </p>
        <Link
          href={linkHref}
          className="text-white hover:text-purple-300 text-xs font-medium inline-flex items-center gap-2 transition-colors underline sm:text-sm"
        >
          {linkText}
        </Link>
      </div>
      <div className="flex justify-center lg:justify-start">
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="custom-shadow w-full h-auto max-w-xs sm:max-w-sm md:max-w-md" 
          />
        )}
      </div>
    </div>
  );
};

export default FeatureCard;