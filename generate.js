var bwipjs = require('bwip-js');
var fs = require('fs');

// Optionally load some custom fonts.  Maximum 8.
// OpenType and TrueType are supported.
bwipjs.loadFont('Inconsolata', 108,
            require('fs').readFileSync('fonts/Inconsolata.otf', 'binary'));

function setProperties(text){
   return {        
        bcid:        'code128',       // Barcode type
        text:         text,    // Text to encode
        scale:       3,               // 3x scaling factor
        height:      10,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',        // Always good to set this
        textfont:    'Inconsolata',   // Use your custom font
        textsize:    13               // Font size, in points    
   }
}

function createFile(filename,data){
    fs.writeFileSync(filename,data)
}

function generateBarcode(text,filename){
    bwipjs.toBuffer(setProperties(text), function(err,png){
        if (err) {
            console.log("Error ")
        } else {           
            console.log("Done")
            createFile(filename,png)
        }
});
}

// Generate Plasma Barcodes

generateBarcode('PC100101','barcodes/plasma/PC100101.png')
generateBarcode('PC100102','barcodes/plasma/PC100102.png')
generateBarcode('PC100103','barcodes/plasma/PC100103.png')
generateBarcode('PC100104','barcodes/plasma/PC100104.png')

generateBarcode('PC200101','barcodes/plasma/PC200101.png')
generateBarcode('PC200102','barcodes/plasma/PC200102.png')
generateBarcode('PC200103','barcodes/plasma/PC200103.png')
generateBarcode('PC200104','barcodes/plasma/PC200104.png')

generateBarcode('PC300101','barcodes/plasma/PC300101.png')
generateBarcode('PC300102','barcodes/plasma/PC300102.png')
generateBarcode('PC300103','barcodes/plasma/PC300103.png')
generateBarcode('PC300104','barcodes/plasma/PC300104.png')

generateBarcode('PC123456','barcodes/plasma/PC123456.png')
generateBarcode('PC111111','barcodes/plasma/PC111111.png')
generateBarcode('PC222222','barcodes/plasma/PC222222.png')
generateBarcode('PC333333','barcodes/plasma/PC333333.png')

// Generate Buffycoat Barcodes

generateBarcode('BC100101','barcodes/buffycoat/BC100101.png')
generateBarcode('BC100102','barcodes/buffycoat/BC100102.png')
generateBarcode('BC100103','barcodes/buffycoat/BC100103.png')
generateBarcode('BC100104','barcodes/buffycoat/BC100104.png')

generateBarcode('BC200101','barcodes/buffycoat/BC200101.png')
generateBarcode('BC200102','barcodes/buffycoat/BC200102.png')
generateBarcode('BC200103','barcodes/buffycoat/BC200103.png')
generateBarcode('BC200104','barcodes/buffycoat/BC200104.png')

generateBarcode('BC300101','barcodes/buffycoat/BC300101.png')
generateBarcode('BC300102','barcodes/buffycoat/BC300102.png')
generateBarcode('BC300103','barcodes/buffycoat/BC300103.png')
generateBarcode('BC300104','barcodes/buffycoat/BC300104.png')


generateBarcode('BC123456','barcodes/buffycoat/BC123456.png')
generateBarcode('BC111111','barcodes/buffycoat/BC111111.png')
generateBarcode('BC222222','barcodes/buffycoat/BC222222.png')
generateBarcode('BC333333','barcodes/buffycoat/BC333333.png')


//Generate RBC Barcodes

generateBarcode('RC100101','barcodes/rbc/RC100101.png')
generateBarcode('RC100102','barcodes/rbc/RC100102.png')
generateBarcode('RC100103','barcodes/rbc/RC100103.png')
generateBarcode('RC100104','barcodes/rbc/RC100104.png')

generateBarcode('RC200101','barcodes/rbc/RC200101.png')
generateBarcode('RC200102','barcodes/rbc/RC200102.png')
generateBarcode('RC200103','barcodes/rbc/RC200103.png')
generateBarcode('RC200104','barcodes/rbc/RC200104.png')

generateBarcode('RC300101','barcodes/rbc/RC300101.png')
generateBarcode('RC300102','barcodes/rbc/RC300102.png')
generateBarcode('RC300103','barcodes/rbc/RC300103.png')
generateBarcode('RC300104','barcodes/rbc/RC300104.png')


generateBarcode('RC123456','barcodes/rbc/RC123456.png')
generateBarcode('RC111111','barcodes/rbc/RC111111.png')
generateBarcode('RC222222','barcodes/rbc/RC222222.png')
generateBarcode('RC333333','barcodes/rbc/RC333333.png')

//Generate Buufy+RBC Barcodes



//Generate EDTA Barcodes

generateBarcode('ET100101','barcodes/edta/ET100101.png')
generateBarcode('ET100102','barcodes/edta/ET100102.png')
generateBarcode('ET100103','barcodes/edta/ET100103.png')
generateBarcode('ET100104','barcodes/edta/ET100104.png')




console.log("Before generating")