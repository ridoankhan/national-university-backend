const App = require('./App/app.js');
const http = require('http');

class Server {

	constructor() {
		this.app = new App();
		this.port = process.env.PORT || 3000;
	}

	configureApp() {
		this.app.configure();
	}

	createServer() {
		this.server = http.createServer(this.app.getAppServer());
	}

	startServer() {
		this.server.listen(this.port, () =>
			console.log(`University Demo server is running at http://localhost:${this.port}`)
		);
	}
}

const server = new Server();
server.configureApp();
server.createServer();
server.startServer();
