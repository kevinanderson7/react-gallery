const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//   console.log(req.params);
//   const galleryId = req.params.id;
//   for (const galleryItem of galleryItems) {
//     if (galleryItem.id == galleryId) {
//       galleryItem.likes += 1;
//     }
//   }
//   res.sendStatus(200);
// }); // END PUT Route

// GET Route
// router.get('/', (req, res) => {
//   res.send(galleryItems);
// }); // END GET

//START of STRETCH:
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM gallery_items ORDER BY id DESC;`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log(`Got stuff back from the database`, result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const newImage = req.body;
  const sqlText = `INSERT INTO gallery_items (path, description, likes) VALUES 
  ($1, $2, $3)`;
  console.log('POST:', newImage);

  pool
    .query(sqlText, [
      newImage.rank,
      newSong.artist,
      newSong.track,
      newSong.published,
    ])
    .then((result) => {
      console.log(`Added song to the database`, newSong);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.put('/like/:id', (req, res) => {
  let imageId = req.params.id;

  let sqlText = '';

  sqlText = `UPDATE "gallery_items" SET "likes"= "likes" +1 WHERE "id"=$1`;

  pool
    .query(sqlText, [imageId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
