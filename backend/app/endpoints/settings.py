from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas, crud
from app.database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/settings", response_model=schemas.Setting)
def read_settings(db: Session = Depends(get_db)):
    """
    Retorna as configurações do sistema.
    """
    setting = crud.get_setting(db)
    return setting

@router.post("/settings", response_model=schemas.Setting)
def update_settings(setting_update: schemas.SettingCreate, db: Session = Depends(get_db)):
    """
    Atualiza as configurações do sistema.
    """
    setting = crud.update_setting(db, setting_update)
    return setting
