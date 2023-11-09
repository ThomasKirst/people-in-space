# People in Space API (with Proxy)

This repository contains a simple UI and an API proxy for the [Open Notify API](http://open-notify.org/Open-Notify-API/People-In-Space/).

## Getting Started

Open a codespace and run the following commands:

```bash
npm install
npm start
```

**Important**: Make the Port of the API proxy (3000) public by clicking on the "Ports" tab in the bottom of the codespace and in the row with port 3000 open the context menu in the Visibility column and choose the "Port Visibility" option "Public".

## API Proxy

The API proxy is a simple Node.js application that uses [Express](https://expressjs.com/) to proxy requests to the Open Notify API.
