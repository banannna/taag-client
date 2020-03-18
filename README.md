## taag client
taag is a saas that helps you visualize your github tasks and issues in a graph.

### install
- `git clone https://github.com/banannna/taag-client`
- `cd` to the directory
- run `npm install`
- you will need to add a `.env` file to the root dir. this is how it should look:
	```
	REACT_APP_CLIENT_ID = <your-github-client-id>
  REACT_APP_PROTOCOL = http://
  REACT_APP_SERVER_IP = localhost
  REACT_APP_SERVER_PORT = 8000
	```

### run
- `node start`