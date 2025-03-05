import { fetchFigmaComponents } from './fetchFigmaComponents.js';
import fs from 'fs';
import path from 'path';

export const saveFigmaComponentsToJson = async () => {
  const components = await fetchFigmaComponents();

  if (components && components.length > 0) {
    const jsonData = JSON.stringify(components, null, 2);
    const filePath = path.resolve(__dirname, '../../figmaComponents.json');
    fs.writeFileSync(filePath, jsonData);
    console.log('Figma components saved to figmaComponents.json');
  } else {
    console.log('No components to save.');
  }
};

// CLI로 실행 시 자동 호출
if (require.main === module) {
  saveFigmaComponentsToJson();
}