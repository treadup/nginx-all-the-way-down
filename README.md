# NGINX all the way down
This project contains a docker-compose file that spins up three Nginx
containers.

1. api
2. web
3. proxy

## The api container
The api container serves static JSON files from the /api path.

    docker run --name api-nginx-all-the-way-down -p 9090:80 -v (pwd)/src/api/html:/usr/share/nginx/html:ro nginx

This will serve the api on the url [http://localhost:9090/people.json](http://localhost:9090/api/people.json).

## The web container
The web container serves a web page that uses JavaScript to fetch
data from the API and display it.

From inside the root project folder the web container can be started
using the following fish shell command.

    docker run --name web-nginx-all-the-way-down -p 7070:80 -v (pwd)/src/web/html:/usr/share/nginx/html:ro nginx

This will serve the web application on the url [http://localhost:7070](http://localhost:7070).

## The proxy container
The proxy container is a reverse proxy that makes it so that the
api and the web app are available on the same hostname and port.
This way we do not have to worry about CORS when the app talks
to the API.


## References
[https://hub.docker.com/_/nginx/](https://hub.docker.com/_/nginx/)
