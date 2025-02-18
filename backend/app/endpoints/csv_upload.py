from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas, crud
from app.database import SessionLocal
import random

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/upload-csv")
def upload_csv(csv_data: schemas.CSVData, db: Session = Depends(get_db)):
    """
    Recebe dados CSV (em JSON) e simula a criação de produtos com base nas palavras-chave.
    Para cada registro, cria um produto fictício.
    """
    created_products = []
    for item in csv_data.data:
        # Obtém a palavra-chave (suporta chaves "keyword" ou "palavra-chave")
        keyword = item.get("keyword") or item.get("palavra-chave") or "Produto"
        product_data = schemas.ProductCreate(
            name=f"{keyword} - Produto Gerado",
            description=f"Descrição otimizada para SEO para '{keyword}'.",
            price=round(random.uniform(10.0, 100.0), 2)
        )
        product = crud.create_product(db, product_data)
        created_products.append(product)
    return {"message": "Produtos criados com sucesso", "products": created_products}
