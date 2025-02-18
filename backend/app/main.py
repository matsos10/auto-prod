from fastapi import FastAPI
from app.endpoints import csv_upload, products, settings, dashboard
from app.database import engine, Base

app = FastAPI(title="Backend SaaS - Gerador Automático de Fichas de Produto SEO")

# Cria as tabelas no banco de dados (para ambiente de desenvolvimento)
Base.metadata.create_all(bind=engine)

# Inclusão dos routers (endpoints)
app.include_router(csv_upload.router, prefix="/api")
app.include_router(products.router, prefix="/api")
app.include_router(settings.router, prefix="/api")
app.include_router(dashboard.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Bem-vindo ao backend do SaaS de Fichas de Produto SEO"}
