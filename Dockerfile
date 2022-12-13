FROM nginxinc/nginx-unprivileged

#  Docker image that runs NGINX as a non root

#  FROM is always the first instruction and it creates the base image layer

LABEL maintainer = "imsos"

#  The name of the maintainer :)

COPY index.html /usr/share/nginx/html

#  copies index.html into the image and create a new layer

COPY index.js /usr/share/nginx/html

#  copies index.js into the image in the same layer

EXPOSE 8080

#  Inform Docker that the container listens on the specified network ports at runtime.
#  1- type in cmd [ docker image build -t melodick/rps:tagname .] to build the image.
#  2- type in cmd [ docker container run -d --name web -p 8080:8080 melodick/rps:tagname ]
#  to make the container up and running :) .