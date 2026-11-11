-- Migration: Add featured product columns
-- This script adds columns to support featured and best seller products on the homepage

ALTER TABLE products
  ADD COLUMN isHomepageFeatured TINYINT(1) DEFAULT 0 AFTER badge,
  ADD COLUMN isBestSeller TINYINT(1) DEFAULT 0 AFTER isHomepageFeatured;

-- Create index for faster queries
CREATE INDEX idx_homepage_featured ON products(isHomepageFeatured);
CREATE INDEX idx_best_seller ON products(isBestSeller);
