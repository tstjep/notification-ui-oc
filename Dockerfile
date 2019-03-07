FROM bitnami/nginx
COPY dist /usr/share/nginx/html
COPY nginx.conf /opt/bitnami/nginx/conf/nginx.conf
CMD /bin/bash -c "exec nginx -g 'daemon off;'"
EXPOSE 8080
