const express = require('express');
const { createGroup, getGroupById, addPostToGroup } = require('../controllers/groupController');
const router = express.Router();

router.post('/', createGroup);              // create group
router.get('/:id', getGroupById);           // get group by id
router.post('/:id/posts', addPostToGroup);  // add post to group

module.exports = router;
