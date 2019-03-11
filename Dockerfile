FROM centos/nginx-112-centos7
COPY dist /opt/app-root/src
COPY nginx.conf /etc/opt/rh/rh-nginx112/nginx/nginx.conf
CMD /bin/bash -c "exec nginx -g 'daemon off;'"
EXPOSE 8080
