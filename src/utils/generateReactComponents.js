// src/utils/fetchFigmaComponents.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const figmaApiKey = process.env.FIGMA_API_KEY;
const figmaFileId = process.env.FIGMA_FILE_ID;

export const fetchFigmaComponents = async () => {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${figmaFileId}/components`,
      {
        headers: {
          'X-Figma-Token': figmaApiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
    }

    const data = await response.json();
    return data.meta.components; // 모든 컴포넌트 정보 반환
  } catch (error) {
    console.error('Error fetching Figma components:', error);
  }
};