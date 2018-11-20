module.exports = (app) => {
    const emailData = require('../../controllers/email.controller.js');

    // Create a new Sport Details
    app.post('/api/email/',emailData.pdfFile);

    // Retrieve a single Sport Details with Id
    // app.get('/api/pages/sportdetails/:Id', details.findOne);

    // Update a Sport Details with Id
    //  app.put('/api/pages/sportdetails/:Id', details.update);

    // Delete a Sport Details with Id
    // app.delete('/api/pages/sportdetails/:Id', details.delete);
}