# Rebix Base Api For Serve As A Guide For Developers

![Image](https://files.catbox.moe/685kie.png)

<hr>

An API for developers. Built with Node.js and Express.

## Getting Started (Installation)

```sh
git clone https://github.com/Lord-Samuel/base-api.git
cd base-api
npm install
```

Or If Possible, create a folk

After Installation, Modify as you want

# Deployment
If you want to deploy on vercel, add a file named

#### vercel.json. Inside of this file, incert this

```js
{
  "version": 2,
  "builds": [
    { "src": "./index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}
```

# Running On Server
```sh
npm start
```

The server will run on

- http://localhost:3000


## Added examples such as

- api/status
- api/ping
- api/deepseek?q=


# Am Still A Noob Or NewBie Coder 
<hr>

## If There Are Suggestions or Errors, Feel Free To Submit An Issue

All Credits [Lord-Samuel](https://github.com/Lord-Samuel)
