var bwipjs = require('bwip-js');
var fs = require('fs');

// Optionally load some custom fonts.  Maximum 8.
// OpenType and TrueType are supported.
bwipjs.loadFont('Inconsolata', 108,
            require('fs').readFileSync('fonts/Inconsolata.otf', 'binary'));

bwipjs.toBuffer({
        bcid:        'qrcode',       // Barcode type
        text:        'png.readUInt32BE(16) : PNG image width',    // Text to encode
        scale:       5,               // 3x scaling factor
        height:      20,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',        // Always good to set this
        textfont:    'Inconsolata',   // Use your custom font
        textsize:    13               // Font size, in points
    }, function (err, png) {
        if (err) {
            // Decide how to handle the error
            // `err` may be a string or Error object
        } else {
            // `png` is a Buffer
            // png.length           : PNG file length
            // png.readUInt32BE(16) : PNG image width
            // png.readUInt32BE(20) : PNG image height
            fs.writeFileSync('qr.png',png)
            console.log("Done ")
        }
    });