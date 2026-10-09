const fs = require('fs');
let content = fs.readFileSync('src/components/home/HeroSection.tsx', 'utf8');

content = content.replace(
  /<div className="w-px h-4 bg-white\/10" \/>\s*<div>2-Min Setup<\/div>\s*<div className="w-px h-4 bg-white\/10" \/>\s*<div>No Credit Card<\/div>/g,
  ''
);

content = content.replace(
  /<div\s+className="relative w-full group animate-scale-in opacity-0 hover:scale-\[1\.01\] transition-transform duration-500 ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\]"\s+style={{ animationDelay: "400ms" }}\s*>/g,
  `<div className="text-center mb-3">
              <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Illustrative dashboard preview — sample data
              </span>
            </div>
            <div
              className="relative w-full group animate-scale-in opacity-0 hover:scale-[1.01] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ animationDelay: "400ms" }}
            >`
);

fs.writeFileSync('src/components/home/HeroSection.tsx', content);
