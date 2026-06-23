const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const filesToConvert = [
  { file: 'index.html', component: 'Home' },
  { file: 'case-conecta.html', component: 'CaseConecta' },
  { file: 'case-mobinft.html', component: 'CaseMobinft' },
  { file: 'case-bradesco.html', component: 'CaseBradesco' },
  { file: 'case-bradesco-senha.html', component: 'CaseBradescoSenha' }
];

function htmlToJsx(html) {
  let bodyContent = html;
  
  const headerEnd = html.indexOf('</header>');
  const footerStart = html.indexOf('<footer');
  if (headerEnd !== -1 && footerStart !== -1) {
    bodyContent = html.substring(headerEnd + 9, footerStart);
  } else {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      bodyContent = bodyMatch[1];
    }
  }

  bodyContent = bodyContent.replace(/<div id="scroll-progress"[^>]*><\/div>/gi, '');
  let jsx = bodyContent.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
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

  jsx = jsx.replace(/<(img|br|input|hr)([^>]*?)(?!\/|><\/[a-zA-Z]+)>/g, '<$1$2 />');
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  return jsx;
}

filesToConvert.forEach(item => {
  if (!fs.existsSync(item.file)) {
    console.log(`Skipping ${item.file}, not found`);
    return;
  }
  const content = fs.readFileSync(item.file, 'utf8');
  
  let jsxContent = htmlToJsx(content);
  
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
  console.log(`Regenerated ${item.component}.jsx`);
});
