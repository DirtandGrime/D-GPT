const Busboy = require('busboy');

module.exports.handler = async (event, context, callback) => {
    console.log("event", event)
    console.log("here")
    const fields = await parseMultipartForm(event, callback)
    console.log("retrieved fields", fields)
    callback(null, {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify({
        msg: "Hello, World! " + Math.round(Math.random() * 10),
      }),
    })
    // Request access token
}

function parseMultipartForm(req, res) {
  return new Promise((resolve) => {
    // we'll store all form fields inside of this
    const fields = {};

    // let's instantiate our busboy instance!
    const bb = Busboy({
      // it uses request headers
      // to extract the form boundary value (the ----WebKitFormBoundary thing)
      headers: req.headers
    });

    bb.on('file', (name, file, info) => {
      const { filename, encoding, mimeType } = info;
      console.log(
        `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
        filename,
        encoding,
        mimeType
      );
      file.on('data', (data) => {
        console.log(`File [${name}] got ${data.length} bytes`);
      }).on('close', () => {
        console.log(`File [${name}] done`);
      });
    });
    bb.on('field', (name, val, info) => {
      console.log(`Field [${name}]: value: %j`, val);
    });
    bb.on('close', () => {
      console.log('Done parsing form!');
      res.writeHead(303, { Connection: 'close', Location: '/' });
      res.end();
    });
    //req.pipe(bb);
    // before parsing anything, we need to set up some handlers.
    // whenever busboy comes across a file ...
    // busboy.on(
    //   "file",
    //   (fieldname, filestream, filename, transferEncoding, mimeType) => {
    //     // ... we take a look at the file's data ...
    //     filestream.on("data", (data) => {
    //       // ... and write the file's name, type and content into `fields`.
    //       fields[fieldname] = {
    //         filename,
    //         type: mimeType,
    //         content: data,
    //       };
    //     });
    //   }
    // );

    // // whenever busboy comes across a normal field ...
    // busboy.on("field", (fieldName, value) => {
    //   // ... we write its value into `fields`.
    //   fields[fieldName] = value;
    //   console.log("found field with value of " + value)
    // });

    // // once busboy is finished, we resolve the promise with the resulted fields.
    // busboy.on("close", () => {
    //   console.log("on finish")
    //   resolve(fields)
    // });

    // now that all handlers are set up, we can finally start processing our request!
    console.log("calling write")
    bb.write(req.body);
    console.log("after write " + req.body)
  });
}