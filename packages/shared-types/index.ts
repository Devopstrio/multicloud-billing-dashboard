export enum CloudProvider {
  AWS = "AWS",
  AZURE = "AZURE",
  GCP = "GCP",
  ONPREM = "ONPREM"
}

export enum CostType {
  USAGE = "USAGE",
  TAX = "TAX",
  CREDIT = "CREDIT",
  REFUND = "REFUND",
  RECURRING = "RECURRING"
}

export interface BillingEntry {
  id: string;
  provider: CloudProvider;
  service: string;
  account: string;
  region: string;
  resourceId?: string;
  cost: number;
  currency: string;
  usageType: string;
  usageAmount: number;
  tags: Record<string, string>;
  billingPeriod: string;
  date: string;
}

export interface CostForecast {
  date: string;
  projectedCost: number;
  lowerBound: number;
  upperBound: number;
  confidence: number;
}

export interface SavingsRecommendation {
  id: string;
  type: "RIGHTSIZING" | "RESERVED_INSTANCE" | "SAVINGS_PLAN" | "ABANDONED_RESOURCE";
  provider: CloudProvider;
  resourceId: string;
  currentMonthlyCost: number;
  potentialMonthlySavings: number;
  effort: "LOW" | "MEDIUM" | "HIGH";
}

export interface FinOpsKPIs {
  totalMonthlySpend: number;
  projectedMonthlySpend: number;
  savingsOpportunity: number;
  untaggedResourcePercentage: number;
  unitCostPerUser: number;
}
