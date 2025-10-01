import React from 'react';
import Link from 'next/link';

interface FeatureCardProps {
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
 
  title,
  description,
  linkText,
  linkHref,
  width,
  height,
 
}) => {
  return (
    <div className={`card ${width} ${height} rounded-3xl p-16 m-14 shadow-lg`}>
     
        {/* on mettra le composant de l'icone ici */}
       

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
          className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center gap-2 transition-colors"
        >
          {linkText}
          <span className="text-lg">→</span>
        </Link>
      </div>
    
  );
}
export default FeatureCard
