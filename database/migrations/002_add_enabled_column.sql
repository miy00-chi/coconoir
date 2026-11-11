-- Migration: Add enabled flag to products (seller inventory)
ALTER TABLE products
  ADD COLUMN isEnabled TINYINT(1) DEFAULT 1 AFTER image_url;

-- Create index for faster inventory filtering
CREATE INDEX idx_products_is_enabled ON products(isEnabled);
