
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

#  docker build -t my-nginx .
#  docker run --rm -p 7070:80 my-nginx
