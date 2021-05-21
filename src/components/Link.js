import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    // click on ancour element and open in a new tab
    if (e.metaKey || e.ctrlKey) { return; }

    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
