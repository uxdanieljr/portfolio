const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <a href="case-something.html" with <Link to="/case-something"
  // and </a> with </Link> for those specific tags.

  // We can use a regex to find all <a href="([^"]+\.html)"(.*?)>(.*?)<\/a> 
  // Wait, the regex might fail if it spans multiple lines.
  // Actually, the grep_search shows they are single line mostly:
  // <a href="case-conecta.html" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>

  content = content.replace(/<a href="(case-[^"]+)\.html"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, p3) => {
    return `<Link to="/${p1}"${p2}>${p3}</Link>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Links updated!');
