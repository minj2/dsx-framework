import React from 'react';
import figmaComponentsData from '~/figmaComponents.json' assert { type: "json" };

const createFigmaComponent = (name, thumbnailUrl) => {
  return ({ children }) => (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={name}
          style={{ maxWidth: '200px', marginBottom: '8px' }}
        />
      )}
      {children && <div>{children}</div>}
    </div>
  );
};

const componentsArray = Array.isArray(figmaComponentsData)
  ? figmaComponentsData
  : [figmaComponentsData];

const figmaComponents = componentsArray.map((component) => ({
  id: component.key,
  name: component.name,
  component: createFigmaComponent(component.name, component.thumbnail_url),
}));

export default figmaComponents;
