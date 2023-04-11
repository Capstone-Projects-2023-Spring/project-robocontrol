module.exports = {
    process(src, filename) {
      return {
        code: `
          const path = require('path');
          module.exports = path.resolve(__dirname, '${filename}');
        `,
      };
    },
  };
  