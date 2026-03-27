require('../config')

const express = require('express')
const router = express.Router()
const os = require('os')
const axios = require('axios')

router.get('/status', (req, res) => {
	res.status(200).json({
		status: true,
		creator: global.creator,
		msg: 'Server is running',
		uptime: os.uptime(),
		memory: {
			total: os.totalmem(),
			free: os.freemem(),
			used: os.totalmem() - os.freemem()
		}
	})
})

router.get('/ping', (req, res) => {
	res.status(200).json({
		status: true,
		creator: global.creator,
		msg: 'Pong'
	})
})

// Free meta ai API Endpoint
router.get('/llama', async (req, res) => {
	const q = req.query.q

	try{
	const requstResponse = await axios.get(`https://api-rebix.zone.id/api/llama-meta?q=${q}`)
	if (requstResponse.status === 200)
		res.status(200).json({
			status: true,
			creator: global.creator,
			msg: 'Meta AI API is working',
			model: requstResponse.data.model,
			data: requstResponse.data.response
		})
	} else {
		res.status(500).json({
			status: false,
			creator: global.creator,
			msg: 'Meta AI API is not working'
		})
	}
	} catch (error) {
		res.status(500).json({
			status: false,
			creator: global.creator,
			msg: 'Meta AI API is not working'
		})
	}
})	

module.exports = router
