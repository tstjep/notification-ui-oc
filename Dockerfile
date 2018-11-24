FROM nginx
COPY dist /usr/share/nginx/html
COPY nginx.conf.tpl /etc/nginx/nginx.conf.tpl
CMD /bin/bash -c "envsubst '\$BACKEND_BASE_URL'< /etc/nginx/nginx.conf.tpl > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"
