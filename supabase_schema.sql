-- ====================================================================
-- AVINYATES GLOBAL CMS DATABASE SCHEMA
-- Run this in Supabase SQL Editor (https://supabase.com/dashboard/project/preqldcywrmtqodvmgpj/sql)
-- ====================================================================

-- 1. SITE CONTENT (For Contact Info, Taglines, Hero text across pages)
CREATE TABLE IF NOT EXISTS site_content (
  key TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  value TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed initial site content
INSERT INTO site_content (key, category, value, description) VALUES
  ('contact_email', 'contact', 'Vineeth@avinyates.com', 'Primary contact email'),
  ('contact_phone', 'contact', '+91 99619 47458', 'Primary corporate phone line'),
  ('contact_whatsapp', 'contact', '919961947458', 'WhatsApp phone number with country code (digits only)'),
  ('contact_address', 'contact', 'Avinyates India Private Limited, Republic of India', 'Headquarters address'),
  ('hero_eyebrow', 'home', 'AVINYATES GLOBAL', 'Hero Eyebrow tag'),
  ('hero_title_1', 'home', 'Inspire.', 'Hero word 1'),
  ('hero_title_2', 'home', 'Innovate.', 'Hero word 2'),
  ('hero_title_3', 'home', 'Ignite.', 'Hero word 3'),
  ('hero_subtext', 'home', 'Pioneering breakthrough ventures and next-generation technologies to unlock futuristic opportunities for mankind.', 'Home hero description')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- 2. PRODUCTS TABLE (For Gulpit spreads & Snackys cans)
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  brand TEXT NOT NULL CHECK (brand IN ('gulpit', 'snackys')),
  name TEXT NOT NULL,
  tag TEXT,
  category TEXT,
  seasoning TEXT,
  short_desc TEXT,
  image_url TEXT NOT NULL,
  ingredients TEXT,
  pairings TEXT,
  accent_color TEXT DEFAULT '#00BFFF',
  net_vol TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed initial Gulpit Flavours
INSERT INTO products (id, brand, name, tag, category, short_desc, image_url, ingredients, pairings, accent_color, display_order) VALUES
  ('coconut-chilli', 'gulpit', 'Coconut Chilli Chutney', 'INDIAN-INSPIRED', 'savoury', 'A refreshing blend of grated coconut, green chilli and curry leaf.', '/brands/gulpit/coconut_chilli_chutney.png', 'Fresh Coconut, Green Chilli, Curry Leaf, Cold-Pressed Oil', 'Dosa, idli, wraps, savoury rolls and dipping platters', '#00BFFF', 1),
  ('smoky-tomato', 'gulpit', 'Smoky Tomato Relish', 'WESTERN-INSPIRED', 'savoury', 'Rich tomatoes, shallots and a hint of smoked paprika.', '/brands/gulpit/smoky_tomato_relish.png', 'Vine Tomatoes, Shallots, Smoked Paprika, Mediterranean Sea Salt', 'Burgers, toasties, sourdough toast and grilled meals', '#ef4444', 2),
  ('miso-ginger', 'gulpit', 'Miso Ginger Garlic', 'JAPANESE-INSPIRED', 'savoury', 'Savory umami paste with cold-pressed ginger and aged miso notes.', '/brands/gulpit/miso_ginger_garlic.png', 'Fermented Miso, Fresh Ginger, Garlic, White Sesame', 'Noodles, rice bowls, stir-fries, dim sum and grilled vegetables', '#f59e0b', 3),
  ('mint-thulasi', 'gulpit', 'Mint & Thulasi Chutney', 'HERBAL FUSION', 'savoury', 'Fresh garden mint infused with holy thulasi leaf extracts.', '/brands/gulpit/mint_thulasi_chutney.png', 'Garden Mint, Sacred Thulasi, Lemon, Green Chillies', 'Savoury bites, samosas, grain bowls and sharing platters', '#10b981', 4),
  ('gochujang-onion', 'gulpit', 'Gochujang Onion Jam', 'KOREAN-INSPIRED', 'savoury', 'Caramelized shallots married with fermented Korean gochujang heat.', '/brands/gulpit/gochujang_onion.png', 'Caramelized Onion, Fermented Gochujang, Rice Vinegar, Garlic', 'Bowls, sandwiches, dipping, wraps and pan-fried bites', '#ea580c', 5),
  ('mango-passion', 'gulpit', 'Mango Passion Jam', 'TROPICAL SUNSHINE', 'fruit', 'Sun-ripened Alphonso mango layered with tangy passion fruit pulp.', '/brands/gulpit/mango_passion_jam.png', 'Alphonso Mango, Passion Fruit, Natural Fruit Pectin', 'Toast, waffles, pancakes, yogurt and dessert platters', '#eab308', 6),
  ('pineapple-vanilla', 'gulpit', 'Pineapple Vanilla Preserve', 'ISLAND SWEET', 'fruit', 'Sweet island pineapples slow-cooked with Madagascar vanilla beans.', '/brands/gulpit/pineapple_vanilla_preserve.png', 'Pineapple Pulp, Madagascar Vanilla, Cold-Pressed Lemon', 'Croissants, brioche, scones and cheese boards', '#fbbf24', 7),
  ('spiced-guava', 'gulpit', 'Spiced Guava Jelly', 'HERITAGE BLEND', 'fruit', 'Pink mountain guavas gently spiced with black pepper and clove.', '/brands/gulpit/spiced_guava_jelly.png', 'Pink Guava, Crushed Black Pepper, Ceylon Clove, Pectin', 'Crackers, sharp cheese, parathas and morning toast', '#f43f5e', 8),
  ('berry-cardamom', 'gulpit', 'Berry Cardamom Spread', 'NORDIC-INDIAN', 'fruit', 'Wild forest berries lifted by warm aromatic cardamom pods.', '/brands/gulpit/berry_cardamom_spread.png', 'Strawberries, Blueberries, Green Cardamom, Apple Juice', 'French toast, oatmeal, yogurt parfaits and crêpes', '#8b5cf6', 9),
  ('tropical-colada', 'gulpit', 'Tropical Piña Colada', 'EXOTIC CREAM', 'fruit', 'Creamy coconut cream and sweet golden pineapple harmony.', '/brands/gulpit/tropical_pina_colada.png', 'Tender Coconut, Ripe Pineapple, Coconut Blossom Nectar', 'Smoothie bowls, chia pudding, desserts and toast', '#06b6d4', 10)
ON CONFLICT (id) DO NOTHING;

-- Seed initial Snackys Cans
INSERT INTO products (id, brand, name, tag, seasoning, short_desc, image_url, ingredients, pairings, accent_color, net_vol, display_order) VALUES
  ('sweet-potato', 'snackys', 'Sweet Potato Chips', 'ROOT CHIPS', 'Himalayan Pink Salt', 'Artisanal root chips with subtle mineral salt bringing out natural earthiness and sweetness.', '/brands/snackys/sweet_potato_chips.png', 'Selected Orange Sweet Potatoes, Cold-Pressed Rice Bran Oil, Himalayan Pink Salt', 'Creamy guacamole, hummus and evening mocktails', '#f97316', '120g Can', 1),
  ('jackfruit', 'snackys', 'Jackfruit Crisps', 'TROPICAL FRUIT', 'Kerala Black Pepper', 'Sweet, golden jackfruit slices with a warm cracked black pepper punch.', '/brands/snackys/jackfruit_crisps.png', 'Ripe Golden Jackfruit, Rice Bran Oil, Malabar Black Pepper, Sea Salt', 'Sparkling iced teas, charcuterie boards and dips', '#eab308', '110g Can', 2),
  ('beetroot', 'snackys', 'Beetroot Wafers', 'EARTH & SPICE', 'Smoked Sea Salt & Rosemary', 'Crimson crisps with woody rosemary and wood-smoked salt.', '/brands/snackys/beetroot_wafers.png', 'Organic Red Beetroots, Cold-Pressed Oil, Crushed Dried Rosemary, Smoked Salt', 'Labneh, goat cheese platters and herb dips', '#be185d', '100g Can', 3),
  ('plantain', 'snackys', 'Plantain Chips', 'HERITAGE CRISP', 'Peri-Peri & Lemon', 'Traditional golden plantains with fiery peri-peri and citrus twist.', '/brands/snackys/plantain_chips.png', 'Nendran Green Plantains, Cold-Pressed Oil, African Bird Eye Chilli, Lime Extract', 'Cold brews, party platters and salsa bowls', '#84cc16', '130g Can', 4),
  ('tapioca', 'snackys', 'Tapioca Crunch', 'CLASSIC CRUNCH', 'Classic Sour Cream & Herb', 'Light and bubbly cassava crunch with velvety herb-sour cream tang.', '/brands/snackys/tapioca_crunch.png', 'Selected Cassava Tubers, Rice Bran Oil, Chive & Parsley Herb Blend, Lactic Acid', 'Chilled beverages, game-day dips and picnics', '#00BFFF', '120g Can', 5)
ON CONFLICT (id) DO NOTHING;

-- 3. INQUIRIES TABLE (To view contact form messages inside the CMS)
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  division TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) setup
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public read access to site_content and products
CREATE POLICY "Public read site_content" ON site_content FOR SELECT USING (true);
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);

-- Allow public insert to inquiries (from contact form)
CREATE POLICY "Public insert inquiries" ON inquiries FOR INSERT WITH CHECK (true);

-- Service Role Key has full access to everything (used by CMS APIs)
