import { Shield, LayoutDashboard, Building2, Briefcase, Kanban, FileSpreadsheet, PieChart, TrendingUp, AlertCircle, Database, CheckCircle2 } from "lucide-react";

export const industriesContent: Record<string, any> = {
  "healthcare": {
    title: "Data Organization & Reporting for Healthcare",
    subtitle: "Secure, compliant, and structured data management for modern healthcare providers.",
    description: "Stop struggling with fragmented patient data and compliance-heavy spreadsheets. We provide secure, structured Excel reporting and data management to help healthcare providers track patient outcomes, manage billing data, and streamline operational efficiency.",
    color: "#00E5A0",
    icon: Shield,
    challenges: [
      { title: "Fragmented Patient Records", desc: "Data spread across multiple systems and spreadsheets making it hard to get a unified view." },
      { title: "Manual Billing Reconciliation", desc: "Hours spent matching invoices with insurance claims and patient payments manually." },
      { title: "Compliance Risks", desc: "Unsecured spreadsheets posing risks to HIPAA and other patient privacy regulations." }
    ],
    solutions: [
      { icon: Database, title: "Centralized Data Models", desc: "We build structured databases in Excel and Power BI that bring all your patient and operational data into one secure place." },
      { icon: PieChart, title: "Automated Billing Reports", desc: "Reduce manual reconciliation with automated MIS reports that match claims with payments instantly." },
      { icon: CheckCircle2, title: "Compliance-Ready Formatting", desc: "We ensure all data management practices follow strict confidentiality and security protocols." }
    ],
    deliverables: [
      "Patient Outcome Tracking Dashboards",
      "Daily/Weekly Billing Reconciliation Reports",
      "Resource & Staff Allocation Models",
      "Inventory Management for Medical Supplies"
    ]
  },
  "ecommerce": {
    title: "Excel Automation & Inventory Analytics for E-commerce",
    subtitle: "Consolidate your multi-channel sales and take control of your inventory.",
    description: "Take control of your inventory, sales data, and marketplace reporting. We automate the consolidation of sales reports from Shopify, Amazon, and WooCommerce, giving you a unified view of your stock, margins, and customer behavior.",
    color: "#00C2FF",
    icon: LayoutDashboard,
    challenges: [
      { title: "Multi-Channel Chaos", desc: "Selling on Amazon, Shopify, and in-store creates disjointed sales reports." },
      { title: "Inventory Blind Spots", desc: "Overstocking or stockouts due to a lack of real-time inventory visibility." },
      { title: "Unclear Profit Margins", desc: "Difficulty calculating true profit margins after ad spend, shipping, and returns." }
    ],
    solutions: [
      { icon: FileSpreadsheet, title: "Unified Sales Dashboards", desc: "We merge exports from all your sales channels into a single, automated master dashboard." },
      { icon: TrendingUp, title: "Inventory Forecasting", desc: "Use historical data to build models that predict when you need to reorder stock." },
      { icon: PieChart, title: "True Margin Analysis", desc: "Automatically calculate net profit by factoring in all hidden costs, shipping, and ad spend." }
    ],
    deliverables: [
      "Multi-Channel Sales Consolidation Reports",
      "Inventory Turn & Forecasting Models",
      "SKU-Level Profit Margin Dashboards",
      "Automated Returns & Refund Tracking"
    ]
  },
  "real-estate": {
    title: "Automated MIS & Lead Tracking for Real Estate",
    subtitle: "Track properties, agents, and leads without the manual data entry.",
    description: "Consolidate lead data from multiple sources and track property performance without manual data entry. We build maintainable Excel and Power BI dashboards that provide instant visibility into property sales, agent performance, and lead conversion rates.",
    color: "#8B5CF6",
    icon: Building2,
    challenges: [
      { title: "Scattered Lead Data", desc: "Inquiries from Zillow, website forms, and walk-ins get lost in messy spreadsheets." },
      { title: "Opaque Agent Performance", desc: "Hard to track which agents are closing deals and which need more support." },
      { title: "Complex Property Portfolios", desc: "Managing valuations, maintenance costs, and rental yields across multiple properties is overwhelming." }
    ],
    solutions: [
      { icon: Database, title: "Central Lead Repositories", desc: "Automatically format and clean lead exports into a standardized tracking sheet." },
      { icon: TrendingUp, title: "Agent KPI Dashboards", desc: "Visualize calls made, viewings scheduled, and deals closed per agent in real-time." },
      { icon: FileSpreadsheet, title: "Portfolio Management", desc: "Track rental yields, maintenance expenses, and property valuations in a single automated workbook." }
    ],
    deliverables: [
      "Agent Performance & Commission Trackers",
      "Property Valuation & Yield Models",
      "Lead Source Conversion Dashboards",
      "Monthly Rent Roll & Arrears Reports"
    ]
  },
  "financial": {
    title: "Structured Excel Reporting for Financial Services",
    subtitle: "Eliminate manual reconciliation and ensure absolute accuracy.",
    description: "Eliminate manual reconciliation and ensure absolute accuracy in your financial reporting. We specialize in building automated MIS reports, P&L statements, and audit-ready data models that save your finance team hours of repetitive work.",
    color: "#EF4444",
    icon: Briefcase,
    challenges: [
      { title: "End-of-Month Bottlenecks", desc: "Finance teams working late just to close the books and reconcile statements manually." },
      { title: "Error-Prone Spreadsheets", desc: "Broken formulas and manual copy-pasting leading to inaccurate financial reporting." },
      { title: "Audit Anxiety", desc: "Unstructured data making it difficult to prepare for internal or external audits." }
    ],
    solutions: [
      { icon: CheckCircle2, title: "Automated Reconciliation", desc: "We build macros and Power Query workflows that match transactions in seconds, not hours." },
      { icon: AlertCircle, title: "Error-Proof Formulas", desc: "We audit and rebuild your financial models to ensure formulas are robust, locked, and error-free." },
      { icon: FileSpreadsheet, title: "Audit-Ready Structures", desc: "Format all ledgers and financial statements to comply with standard auditing requirements." }
    ],
    deliverables: [
      "Automated P&L and Balance Sheet Generation",
      "Bank & Credit Card Reconciliation Workflows",
      "Budget vs. Actual Variance Analysis Dashboards",
      "Cash Flow Forecasting Models"
    ]
  },
  "manufacturing": {
    title: "Supply Chain & Production Dashboards for Manufacturing",
    subtitle: "Turn raw production data into actionable operational insights.",
    description: "Turn raw production data into actionable insights. We clean and structure your ERP exports, creating dynamic dashboards to track production efficiency, material costs, and supply chain logistics without the need for expensive custom software.",
    color: "#F59E0B",
    icon: Kanban,
    challenges: [
      { title: "Clunky ERP Exports", desc: "Extracting data from legacy ERP systems results in unreadable, messy CSV files." },
      { title: "Production Inefficiencies", desc: "Inability to track machine downtime, defect rates, and operator performance." },
      { title: "Supply Chain Delays", desc: "Lack of visibility into raw material inventory and supplier delivery times." }
    ],
    solutions: [
      { icon: Database, title: "ERP Data Cleaning", desc: "We build Power Query pipelines that instantly clean and format your ERP exports." },
      { icon: PieChart, title: "OEE & KPI Dashboards", desc: "Visualize Overall Equipment Effectiveness (OEE) and production targets on dynamic dashboards." },
      { icon: TrendingUp, title: "Supply Chain Tracking", desc: "Monitor raw material stock levels and track supplier lead times to prevent production halts." }
    ],
    deliverables: [
      "Production KPI & OEE Dashboards",
      "Raw Material Inventory Tracking",
      "Supply Chain & Logistics Cost Models",
      "Scrap & Defect Rate Analysis Reports"
    ]
  }
};
