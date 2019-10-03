module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define('file', {
      
      name: {
      type: Sequelize.TEXT
      },
      data: {
      type: Sequelize.TEXT
      }
    });
    
    return File;
  }
