from fastapi import APIRouter
router = APIRouter()
@router.get('/summary')
def get_cost_summary():
    return {'total_spend': 145200.50, 'aws_spend': 85000.00, 'azure_spend': 42000.50, 'gcp_spend': 18200.00, 'period': '2026-04'}
@router.get('/breakdown')
def get_cost_breakdown():
    return {'compute': 75000.00, 'storage': 22000.00, 'database': 18000.00, 'networking': 12000.00, 'other': 18200.50}
