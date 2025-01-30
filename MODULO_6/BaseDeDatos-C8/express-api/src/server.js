import express from 'express';
import path from 'path';
   

export class Server {
     
    constructor(port, routes, publicPath = 'public') {
        this.port = port;
        this.routes = routes;
        this.app = express();
        this.publicPath = publicPath;
    };


    start () {
        this.app.use(express.json());

        this.app.use(express.static(this.publicPath));

        this.app.use(this.routes);

        this.app.get('*', (req, res) => {
            const dirName = path.resolve();
            const indexPath = path.join(dirName, `/${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        });

        this.app.listen(this.port, () => {
            console.log('listening on port ' + this.port);
        });
    }

}