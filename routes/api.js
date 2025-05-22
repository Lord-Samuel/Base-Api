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

// Free deepseek API Endpoint
router.get('/deepseek', async (req, res) => {
	const q = req.query.q

	try{
	const requstResponse = await axios.get(`https://api-rebix.vercel.app/api/deepseek-r1?q=${q}`)
	if (requstResponse.status === 200) {
		res.status(200).json({
			status: true,
			creator: global.creator,
			msg: 'Deepseek API is working',
			model: requstResponse.data.model,
			data: requstResponse.data.response
		})
	} else {
		res.status(500).json({
			status: false,
			creator: global.creator,
			msg: 'Deepseek API is not working'
		})
	}
	} catch (error) {
		res.status(500).json({
			status: false,
			creator: global.creator,
			msg: 'Deepseek API is not working'
		})
	}
})	

module.exports = router