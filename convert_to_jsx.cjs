const fs = require('fs');
const path = require('path');

const backupDir = 'C:\\Users\\dccar\\.gemini\\antigravity\\brain\\282810db-d680-4af7-a398-f242cc24ad1a\\scratch\\backup';
const pagesDir = path.join(__dirname, 'src', 'pages');

const filesToConvert = [
  { file: 'index.html', component: 'Home' },
  { file: 'case-conecta.html', component: 'CaseConecta' },
  { file: 'case-mobinft.html', component: 'CaseMobinft' },
  { file: 'case-bradesco.html', component: 'CaseBradesco' },
  { file: 'case-bradesco-senha.html', component: 'CaseBradescoSenha' }
];

function htmlToJsx(html) {
  // Extract body content inside main or just body if main missing
  let bodyContent = html;
  
  // Extract only the part after header and before footer
  const headerEnd = html.indexOf('</header>');
  const footerStart = html.indexOf('<footer');
  if (headerEnd !== -1 && footerStart !== -1) {
    bodyContent = html.substring(headerEnd + 9, footerStart);
  } else {
    // If no header/footer, grab what's inside body
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      bodyContent = bodyMatch[1];
    }
  }

  // Remove <div id="scroll-progress"></div> if exists
  bodyContent = bodyContent.replace(/<div id="scroll-progress"[^>]*><\/div>/gi, '');

  // Convert class= to className=
  let jsx = bodyContent.replace(/class=/g, 'className=');

  // Convert for= to htmlFor=
  jsx = jsx.replace(/for=/g, 'htmlFor=');

  // Convert style="..." to style={{...}} (Basic conversion, doesn't handle complex strings perfectly, we will remove inline styles or adjust them manually if needed)
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(r => r.trim() !== '');
    const styleObj = {};
    rules.forEach(rule => {
      let [key, val] = rule.split(':');
      if(key && val) {
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        styleObj[key] = val.trim();
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  // Self close void tags like img, br, input
  jsx = jsx.replace(/<(img|br|input|hr)([^>]*?)(?!\/|><\/[a-zA-Z]+)>/g, '<$1$2 />');

  // Fix comments: <!-- --> to {/* */}
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  return jsx;
}

if (!fs.existsSync(pagesDir)){
    fs.mkdirSync(pagesDir, { recursive: true });
}

filesToConvert.forEach(item => {
  const filePath = path.join(backupDir, item.file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  let jsxContent = htmlToJsx(content);
  
  // Create React Component String
  const componentStr = `import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';

const ${item.component} = () => {
  useScrollReveal();
  const { lang } = useLang();

  return (
    <>
${jsxContent}
    </>
  );
};

export default ${item.component};
`;

  fs.writeFileSync(path.join(pagesDir, `${item.component}.jsx`), componentStr, 'utf8');
  console.log(`Created ${item.component}.jsx`);
});
