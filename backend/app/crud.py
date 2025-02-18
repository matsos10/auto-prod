from sqlalchemy.orm import Session
from app import models, schemas

# Função para criar um novo produto
def create_product(db: Session, product: schemas.ProductCreate):
    db_product = models.Product(**product.dict(), status="pendente")
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

# Função para obter a lista de produtos
def get_products(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Product).offset(skip).limit(limit).all()

# Funções para configurações
def get_setting(db: Session):
    setting = db.query(models.Setting).first()
    if not setting:
        # Se não houver configurações, cria uma configuração padrão
        setting = models.Setting(language="pt-BR", price_multiplier=1.0, default_category="Geral")
        db.add(setting)
        db.commit()
        db.refresh(setting)
    return setting

def update_setting(db: Session, setting_update: schemas.SettingCreate):
    setting = get_setting(db)
    setting.language = setting_update.language
    setting.price_multiplier = setting_update.price_multiplier
    setting.default_category = setting_update.default_category
    db.commit()
    db.refresh(setting)
    return setting
