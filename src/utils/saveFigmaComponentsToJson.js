import { fetchFigmaComponents } from './fetchFigmaComponents.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// 모듈이 직접 실행되었는지 확인 (ESM 방식)
if (import.meta.url === `file://${process.argv[1]}`) {
  saveFigmaComponentsToJson();
}