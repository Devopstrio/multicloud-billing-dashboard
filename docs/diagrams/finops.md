# FinOps & Billing Diagrams

## 11. Industrial FinOps Lifecycle (Detailed)
*The end-to-end orchestration of cloud economics and cost optimization.*

```mermaid
graph TD
    subgraph "Phase 1: Visibility"
        V1[Provider Data Export]
        V2[Normalized Ingestion]
        V3[Unified Cost Model]
    end
    subgraph "Phase 2: Allocation"
        A1[Tag Extraction]
        A2[Rule-Based Attribution]
        A3[Accountability Assignment]
    end
    subgraph "Phase 3: Analysis"
        N1[Trend Analysis]
        N2[Predictive Forecasting]
        N3[Anomaly Detection]
    end
    subgraph "Phase 4: Optimization"
        O1[Rightsizing Identifying]
        O2[Reservation Planning]
        O3[Waste Cleanup]
    end
    subgraph "Phase 5: Governance"
        G1[Budget Enforcement]
        G2[Compliance Auditing]
        G3[Value Realization]
    end

    V1 --> V2 --> V3 --> A1 --> A2 --> A3 --> N1 --> N2 --> N3 --> O1 --> O2 --> O3 --> G1 --> G2 --> G3
```

## 15. Cross-cloud billing normalization flow
```mermaid
graph LR
    B[Bill] --> N[Norm]
    N --> C[Cros]
```

## 20. Savings recommendation state machine
```mermaid
graph TD
    Identify[Identify Opportunity] --> Analyze[Analyze Impact]
    Analyze --> Surface[Surface to User]
    Surface -->|Applied| Verify[Verify Savings]
    Surface -->|Rejected| Archive[Archive]
    Verify --> [*]
```

## 25. Unit economics calculation logic
```mermaid
graph LR
    U[Unit] --> E[Econ]
    E --> L[Logi]
```
