const express = require('express') 
const router = express.Router()
const favicon = require('serve-favicon')

//router.use(favicon(process.cwd() + '/public/image/favicon.ico'))

router.get('/', (req, res) => {
    // If you have a documentation page add the file path here and file in public folder
    //res.sendFile(process.cwd() + '/public/index.html')

    //for now...
    res.send('Hello World!')
})


module.exports = router
