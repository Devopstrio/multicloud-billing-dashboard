from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_budgets():
    return {'status': 'ok', 'billing_component': 'budgets'}
