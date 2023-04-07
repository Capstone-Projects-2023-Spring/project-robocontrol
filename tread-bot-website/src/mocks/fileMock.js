module.exports = 'test-file-stub';


// this file is needed because Jest cannot natively parse binary assets like images
// this file acts as a mock module for imported image files
// this change instructs Jest to use the fileMock.js module whenever it encounters
    // an image file with specific extensions .(jpg|jpeg|png|gif)