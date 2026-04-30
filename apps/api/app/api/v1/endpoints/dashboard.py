from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_dashboard():
    return {'status': 'ok', 'billing_component': 'dashboard'}
