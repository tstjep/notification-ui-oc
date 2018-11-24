events { worker_connections 1024; }

http {
    server {
        listen 80;

        server_name localhost;

        location / {
            root /usr/share/nginx/html;

            index index.html;

            try_files $uri /index.html;

            location /config/conf.json {
                default_type application/json;
                return 200 '{"backendBaseUrl": "$BACKEND_BASE_URL"}';
            }
        }
    }
}
