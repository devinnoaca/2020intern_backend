const open = require('open');

const openDocs = () => {
  open('http://10.19.247.182:3001/static/docs', {app: ['google chrome', '--incognito']});
}

setTimeout(openDocs, 500);
