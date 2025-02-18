from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/dashboard")
def get_dashboard_metrics(db: Session = Depends(get_db)):
    """
    Retorna métricas simuladas para o dashboard.
    """
    total_products = db.query(models.Product).count()
    published_products = db.query(models.Product).filter(models.Product.status == "publicado").count()
    pending_products = db.query(models.Product).filter(models.Product.status == "pendente").count()
    # Métricas fictícias para testes A/B e créditos restantes
    ab_tests = 5
    credits_remaining = 100

    return {
        "total_products": total_products,
        "published_products": published_products,
        "pending_products": pending_products,
        "ab_tests": ab_tests,
        "credits_remaining": credits_remaining
    }
