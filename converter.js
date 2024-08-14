import fs from 'fs';
import { ConvertGLBtoGltf, ConvertGltfToGLB, ConvertToGLB } from 'gltf-import-export';

// Function to convert GLB to GLTF
function convertGlbToGltf(inputGlb, outputGltf) {
  ConvertGLBtoGltf(inputGlb, outputGltf);
  console.log(`Converted ${inputGlb} to ${outputGltf}`);
}

// Function to convert GLTF to GLB
function convertGltfToGlb(inputGltf, outputGlb) {
  ConvertGltfToGLB(inputGltf, outputGlb);
  console.log(`Converted ${inputGltf} to ${outputGlb}`);
}

// Example usage
const inputGlb = 'input/galaxy-s10-opt2.glb';
const outputGltf = 'output/galaxy-s10-opt2.gltf';
// const outputGlb = 'path/to/your/output.glb';

// Uncomment the function you want to use
convertGlbToGltf(inputGlb, outputGltf);
// convertGltfToGlb(outputGltf, outputGlb);