# notification-ui-oc

An app for showing the capabilities of OpenShift. This is the UI component.

## Create a new version

1. Run a productive webpack build

```
npm run build:prd
```

2. Build a new docker image

```
docker build --no-cache -t mathiskretz/notification-ui-oc .
```

3. Push the docker image to dockerhub

```
docker push mathiskretz/notification-ui-oc:latest
```

## Requirements to run

1. Assumes that there exists an api service named `notification-api`
