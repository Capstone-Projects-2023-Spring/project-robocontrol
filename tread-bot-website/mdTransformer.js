const path = require('path');

module.exports = {
  process(src, filename) {
    return `
      const path = require('path');
      module.exports = path.resolve(__dirname, '${path.basename(filename)}');
    `;
  },
};
