import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        // the window.history will change the pathname property
        window.history.pushState({}, '', href)
        // to emit an URL change event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
        <a
            href={href}
            className={className}
            onClick={onClick}
        >
            {children}
      </a>
  )
}

export default Link