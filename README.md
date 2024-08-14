# gltf-converter
Convert glb to gltf or convert gltf to glb converter. GLTF is widely used json format along with .bin (mesh file), with attached  images in webp format


# How to use
- Copy the repository
- Edit the code in `converter.js`
- Edit the `input and output path`
```js
// Example usage
const inputGlb = 'path/to/your/input.glb';
const outputGltf = 'path/to/your/output.gltf';
const outputGlb = 'path/to/your/output.glb';
```
- Also which conversion do you want `convertGlbToGltf` or `convertGltfToGlb`
```js
// Uncomment the function you want to use
convertGlbToGltf(inputGlb, outputGltf);
// convertGltfToGlb(outputGltf, outputGlb);
```
- Cd into the folder `gltf-converter`, main folder
- run `npm install` to install the packages
```bash
npm install
```
- Then run `node` to excute the function
```bash
node converter.js
```


# Special thanks to `najadojo` for providing the tools and code
```
https://github.com/najadojo/gltf-import-export
```