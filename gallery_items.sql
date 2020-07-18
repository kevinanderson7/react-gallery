-- create table
CREATE TABLE "gallery_items" (
	"id" SERIAL PRIMARY KEY,
	"path" varchar(200),
	"description" varchar(255),
	"likes" integer
);

-- Add some data
INSERT INTO gallery_items ("path", "description", "likes")
VALUES 
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/elephant.jpg', 'Photo of a elephant.', 0),
('images/lion.jpg', 'Photo of a lion.', 0),
('images/rainbow_bird.jpg', 'Photo of a random bird.', 0),
('images/flamingos.jpg', 'Photo of some flamingos.', 0);
