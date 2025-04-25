
const student = require("./student/student.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(student);
    // ~cb-add-configure-service-name~
};
