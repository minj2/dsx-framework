// src/stories/FigmaComponents.stories.jsx
import React from 'react';
import figmaComponents from '../components/FigmaComponents.jsx';

console.log('Figma Components:', figmaComponents);

export default {
  title: 'Figma Components',
  parameters: { layout: 'centered' },
};

export const AllStories = () => {
  return (
    <div>
      {figmaComponents.map(({ id, name, component }, index) => {
        if (!component) {
          console.warn(`⚠️ Missing component for ${name} (ID: ${id})`);
          return null;
        }
        const safeName = name.replace(/[^a-zA-Z0-9]/g, '-');
        const uniqueKey = `${safeName}-${id}-${index}`;
        console.log(`🔹 Story ${index}: key=${uniqueKey}`);
        return (
          <div key={uniqueKey} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
            <h3>{safeName}</h3>
            {React.createElement(component)}
          </div>
        );
      })}
    </div>
  );
};