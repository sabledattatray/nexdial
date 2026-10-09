const fs = require('fs');
let content = fs.readFileSync('src/app/privacy/page.tsx', 'utf8');

content = content.replace(
  /Mandate status and subscription plan/g,
  "Retainer agreement status"
);

content = content.replace(
  /Billing history \(plan, amount, date\)/g,
  "Billing history (project, amount, date)"
);

content = content.replace(
  /Payment processing. Razorpay is PCI-DSS Level 1 certified./g,
  "Invoice payment processing. Razorpay is PCI-DSS Level 1 certified."
);

fs.writeFileSync('src/app/privacy/page.tsx', content);
