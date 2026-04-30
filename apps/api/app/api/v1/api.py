from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, cost, forecast, budgets, anomalies, optimization, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(cost.router, prefix="/cost", tags=["cost"])
api_router.include_router(forecast.router, prefix="/forecast", tags=["forecast"])
api_router.include_router(budgets.router, prefix="/budgets", tags=["budgets"])
api_router.include_router(anomalies.router, prefix="/anomalies", tags=["anomalies"])
api_router.include_router(optimization.router, prefix="/optimization", tags=["optimization"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
