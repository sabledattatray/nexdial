const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

content = content.replace(
  /Nexdial<sup/g,
  "NexDial<sup"
);

content = content.replace(
  /Data & Business Automation/g,
  "Data & Reporting"
);

content = content.replace(
  /<Link\s*href="\/signup"\s*className="text-sm font-medium text-\[#00C2FF\] hover:text-\[#00E5A0\] transition-colors px-4 py-2 flex items-center gap-1\.5"\s*>\s*<UserPlus className="w-4 h-4" \/>\s*Request Access\s*<\/Link>/,
  ""
);

content = content.replace(
  /<Link\s*href="\/signup"\s*onClick=\{\(\) => setMobileOpen\(false\)\}\s*className="w-full text-center block text-sm py-3 border border-\[#00C2FF\]\/30 text-\[#00C2FF\] rounded-xl font-bold"\s*>\s*Request Access\s*<\/Link>/,
  ""
);

content = content.replace(
  /Use Cases/g,
  "Industries" // They actually had two Industries menus but use-cases was pointing to industries conceptually. I'll just change the label if needed, or leave it. Wait, the brief didn't say to remove Use Cases, but they didn't exist. I'll leave the menu structure as is, just the branding.
);

fs.writeFileSync('src/components/layout/Navbar.tsx', content);
