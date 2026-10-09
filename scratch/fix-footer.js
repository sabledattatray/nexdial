const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

content = content.replace(
  /Ready to Stop Wrestling with Spreadsheets\?/g,
  "Ready to Start Your Data Project?"
);

content = content.replace(
  /Data & Business Automation/g,
  "Data & Reporting"
);

content = content.replace(
  /Nexdial<sup/g,
  "NexDial<sup"
);

content = content.replace(
  /use-cases/g,
  "industries"
);

fs.writeFileSync('src/components/layout/Footer.tsx', content);
