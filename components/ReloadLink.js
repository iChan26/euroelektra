'use client';
import React from 'react';

export default function ReloadLink({ href, as = 'a', children, ...props }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (href) {
      window.location.href = href;
    }
  };

  if (as === 'button') {
    return (
      <button onClick={handleClick} {...props}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
