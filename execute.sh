#!/bin/bash
npm start & firebase emulators:start & cd react-backend && PORT=3001 node bin/www