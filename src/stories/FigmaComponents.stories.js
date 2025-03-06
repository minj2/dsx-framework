// src/stories/FigmaComponents.stories.js
import React from 'react';
import figmaComponents from '../components/FigmaComponents';

console.log('Figma Components:', figmaComponents);

export default {
  title: 'Figma Components',
  parameters: { layout: 'centered' },
};

const stories = {};
figmaComponents.forEach(({ id, name, component: FigmaComponent }, index) => {
  const safeName = name.replace(/[^a-zA-Z0-9]/g, '-');
  const uniqueKey = `${safeName}-${id}-${index}`;
  console.log(`🔹 Story ${index}: key=${uniqueKey}`);
  stories[uniqueKey] = () => <FigmaComponent />;
});

export const AllStories = stories;