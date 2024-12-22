import React, { useEffect, useRef } from 'react';
import './Preview.css';

const Preview = ({ html, css, js }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument;
    const head = document.head;
    const body = document.body;

    // Clear the iframe content
    head.innerHTML = '';
    body.innerHTML = '';

    // Add the HTML content
    body.innerHTML = html;

    // Add the CSS
    const style = document.createElement('style');
    style.textContent = css;
    head.appendChild(style);

    // Add the JS
    const script = document.createElement('script');
    script.textContent = js;
    body.appendChild(script);
  }, [html, css, js]);

  return <iframe ref={iframeRef} className="preview" title="Preview"></iframe>;
};

export default Preview;
