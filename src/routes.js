const { addNoteHandler, getAllNotesHandler } = require('./handler');

// import {addNoteHandler, getAllNotesHandler} from './handler';

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  }]


module.exports = routes;