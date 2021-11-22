const http = require('http'), 
      path = require('path'),
      express = require('express'),
      fs = require ('fs'),
      xmlParse = require('xslt-processor').xmlParse,
      xsltProcessor = require ('xslt-processor').xsltProcessor,
      xml2js = require('xml2js');

const router = express();
const server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'views')));

router.get('/', function(req, res) {

    res.writeHead(200, {'Content-Type' : 'text/html'});

    let xml = fs.readFileSync('paddycoffee.xml', 'utf8'),
        xsl = fs.readFileSync('paddycoffee.xml', 'utf8');

    let doc = xmlParse(xml),
        stylesheet = xmlParse(xml);

    let result = xsltProcess(doc,stylesheet);

    res.end(result.toString());
    
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function()
{
    const addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port)
});