import fs from 'fs';
import path from 'path';

// Function to create a new Lit component file and Razor page
function createLitComponent(componentName, sliceName) {
  // Convert component name to proper case format
  const className = componentName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // Create the component template
  const componentContent = `import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('${componentName}')
export class ${className} extends LitElement {
  render() {
    return html\`
      <div>
        <!-- Your component content here -->
      </div>
    \`;
  }
}
`;

  // Create the Razor page template with proper relative path
  const razorContent = `@page "/${componentName.toLowerCase()}"

<LitComponent ScriptName="${sliceName}/${className}">
    <${componentName}></${componentName}>
</LitComponent>
`;

  // Determine the file paths
  const featuresDir = path.resolve('./Pages/Features', sliceName);
  
  const tsFilePath = path.join(featuresDir, `${className}.ts`);
  const razorFilePath = path.join(featuresDir, `${className}.razor`);
  
  // Create directories if they don't exist
  if (!fs.existsSync(featuresDir)) {
    fs.mkdirSync(featuresDir, { recursive: true });
  }
  
  // Write the files
  fs.writeFileSync(tsFilePath, componentContent);
  fs.writeFileSync(razorFilePath, razorContent);
  
  console.log(`✅ Created new Lit component: ${tsFilePath}`);
  console.log(`✅ Created new Razor page: ${razorFilePath}`);
  console.log(`To use this component, navigate to /${componentName.toLowerCase()} in your browser.`);
}

// Check if component name was provided as an argument
const componentName = process.argv[2];
const sliceName = process.argv[3];

if (!componentName) {
  console.error('❌ Please provide a component name (kebab-case format)');
  console.error('Example: node Scripts/newFile.js my-component SliceName');
  process.exit(1);
}

if (!sliceName) {
  console.error('❌ Please provide a slice name');
  console.error('Example: node Scripts/newFile.js my-component SliceName');
  process.exit(1);
}

// Validate component name format (kebab-case)
if (!/^[a-z]([a-z0-9-]*[a-z0-9])?$/.test(componentName)) {
  console.error('❌ Component name must be in kebab-case format (e.g., my-component)');
  process.exit(1);
}

// Create the component and Razor page
createLitComponent(componentName, sliceName);
