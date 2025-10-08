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
 
}) => {
  return (
    <div className={`card ${width} ${height} rounded-3xl p-16 blur-effect shadow-lg custom-shadow text-left flex`}>
    
        {/* on mettra le composant de l'icone ici */}
        <div>
     
         <div className="mb-6">
        <Icone src={iconSrc} shadowColor={iconShadowColor} />
      </div>
       

        {/* Titre */}
        <h3 className="text-white text-xl font-semibold mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Lien d'action */}
        <Link 
          href={linkHref}
          className="text-white hover:text-purple-300 text-sm font-medium inline-flex items-center gap-2 transition-colors underline"
        >
          {linkText}
         
        </Link>
        </div>
        <div className='justify-center '>

        {imageSrc && (
        
          <img src={imageSrc} alt={imageAlt} className="  custom-shadow  " />
      
      )}
      </div>
      </div>
    
  );
}
export default FeatureCard
