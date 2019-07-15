const loadDynamicScript = (callback) => {
  const existingScript = document.getElementById('ml5Script');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'url'; // URL for the third-party library being loaded.
    script.id = 'libraryName'; // e.g., googleMaps or stripe
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};