import React from 'react';

export default function Button({ 
  children, 
  variant = 'coral', 
  size = 'md', 
  className = '', 
  onClick, 
  href, 
  icon: Icon,
  external = false,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm active:scale-[0.98]";
  
  const variants = {
    coral: "bg-soft-coral hover:bg-[#db7a61] text-white shadow-soft hover:shadow-md focus:ring-soft-coral",
    teal: "bg-medical-teal hover:bg-[#137777] text-white focus:ring-medical-teal",
    deepTeal: "bg-deep-teal hover:bg-[#0c2a34] text-white focus:ring-deep-teal",
    outline: "border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white focus:ring-deep-teal",
    outlineCoral: "border-2 border-soft-coral text-soft-coral hover:bg-soft-coral hover:text-white focus:ring-soft-coral",
    mint: "bg-mint-mist hover:bg-[#d5e9e5] text-deep-teal focus:ring-medical-teal",
    ghost: "bg-transparent text-deep-teal hover:bg-mint-mist/50 focus:ring-deep-teal"
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
    xl: "px-8 py-4 text-lg gap-3"
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClass}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass} {...props}>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
}
