// fetch-figma.js
import { saveFigmaComponentsToJson } from './src/utils/saveFigmaComponentsToJson.js';

async function updateFigmaComponents() {
  try {
    console.log('FIGMA_API_KEY:', process.env.FIGMA_API_KEY ? 'Set' : 'Not set');
    console.log('FIGMA_FILE_ID:', process.env.FIGMA_FILE_ID || 'Not set');
    await saveFigmaComponentsToJson();
    console.log('Figma components updated successfully.');
  } catch (error) {
    console.error('Error updating Figma components:', error);
  }
}

updateFigmaComponents();