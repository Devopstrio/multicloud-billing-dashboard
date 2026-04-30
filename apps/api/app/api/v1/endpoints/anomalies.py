from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_anomalies():
    return {'status': 'ok', 'billing_component': 'anomalies'}
