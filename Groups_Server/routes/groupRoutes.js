const express = require('express');
const { createGroup, getGroupById, addPostToGroup } = require('../controllers/groupController');
const router = express.Router();

router.post('/', createGroup);
router.get('/:id', getGroupById);
router.post('/:id/posts', addPostToGroup);

module.exports = router;
