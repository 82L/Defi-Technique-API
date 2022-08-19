# Technical Challenge
The goal of this repository, was to make a server call every 30 seconds an API then sending the data to a client, who will display them in a custom way.

## Technologies used
Node.js, Socket.IO, Express, Vue.js

## Creation process
The development process was followed using Notion. You can find the view [here](https://82l.notion.site/82l/ccf152bf4554419ab3429a91bfe84880?v=6c2254b1733d4839b2a3830b19c3de5b). 
###
In the directory Concepts, you can find different ideas for the interface of the client and the representation of the system. The Vincent Lhoste website is in reference to [this](https://littlemeteo.com/).
###
A figma of the interface is also available [here](https://www.figma.com/file/CJv9fOBLlVpFwrk4vmQoMj/DT-API-Interface?node-id=2%3A19).

## Launch the project
To launch the project, you need to have the last version of node installed (v18.7.0 at the time of redaction)

### Launch Server
Go to the server directory, and do the following to commands
```sh
npm install
node index.js
```

### Launch client
Go to client-weather-api, and do the following commands
```sh
npm install
npm run dev
```

