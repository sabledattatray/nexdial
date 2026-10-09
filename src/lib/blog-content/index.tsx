import { BlogPost } from "./types";
import { vbaAutomationGuide } from "./article-1-vba-automation";
import { powerBiVsExcel } from "./article-2-powerbi-vs-excel";
import { dataCleaningGuide } from "./article-3-data-cleaning";
import { misReportsGuide } from "./article-4-mis-reports";
import { excelFinanceFormulas } from "./article-5-excel-finance";
import { powerBiInsights } from "./article-6-powerbi-insights";
import { customExcelDashboards } from "./article-7-excel-dashboards";
import { hiddenCostsBadData } from "./article-8-bad-data";
import { automatingRoutineVba } from "./article-9-vba-macros";
import { bestPracticesDashboards } from "./article-10-dashboard-design";

export const ARTICLES: Record<string, BlogPost> = {
  "automate-business-excel-vba-guide": vbaAutomationGuide,
  "power-bi-vs-excel-business-analytics": powerBiVsExcel,
  "ultimate-guide-data-cleaning-accurate-reporting": dataCleaningGuide,
  "building-effective-mis-reports-guide": misReportsGuide,
  "top-10-excel-formulas-finance-professionals": excelFinanceFormulas,
  "transforming-raw-data-actionable-insights-power-bi": powerBiInsights,
  "small-businesses-need-custom-excel-dashboards": customExcelDashboards,
  "hidden-costs-bad-data-cleaning": hiddenCostsBadData,
  "automating-routine-tasks-vba-macros": automatingRoutineVba,
  "best-practices-designing-excel-dashboards": bestPracticesDashboards,
};
