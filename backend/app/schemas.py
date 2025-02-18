from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# Schemas para Product
class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: Optional[float] = None

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int
    status: str
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

# Schemas para Setting
class SettingBase(BaseModel):
    language: Optional[str] = "pt-BR"
    price_multiplier: Optional[float] = 1.0
    default_category: Optional[str] = "Geral"

class SettingCreate(SettingBase):
    pass

class Setting(SettingBase):
    id: int

    class Config:
        orm_mode = True

# Schema para upload de CSV
class CSVData(BaseModel):
    data: List[dict]  # Espera uma lista de dicionários com os dados do CSV
