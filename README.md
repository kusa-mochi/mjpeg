# mjpeg

The sample code to show how to stream MJPEG image & record it on a frontend.

## Structure

|Component|Summary|Dev environment|
|:---|:---|:---|
|HTTP server|The sample code to show how to stream MJPEG image|Golang (included in Dockerfile)|
|Web client|The sample code to show how to record MJPEG image from a streming|npm+Next.js (included in Dockerfile)|

## Execution environment

- Docker
- Docker Compose
- Visual Studio Code
    - "Docker" extension
    - "Dev Containers" extension

## How to run

### Docker container to run the code

```pwsh
cd .devcontainer
docker compose up -d
```

After that, attach to the Docker container using Visual Studio Code and **"Dev Containers" extension** (not shell), and open `/home/mochi/` directory.

### HTTP server

Run the following commands using Visual Studio Code that is attaching to the Docker container.

```bash
cd /home/mochi
go mod tidy
cd cmd/server
go run main.go
```

### Web client

Run the following commands using Visual Studio Code that is attaching to the Docker container.

```bash
cd /home/mochi/cmd/client
npm ci
npm run dev
```

Then open [http://localhost:4000](http://localhost:4000) using web browser (ex. Chrome) on the Docker host.

The streaming image with random dot pattern appear in the browser.

To record the image, follow these steps:

1. Push "Record" button, then the recording is started. The canvas element in HTML shows a recording frame.
1. Push "Stop" button, then the recording is stopped.
1. Click/Tap "Download" link, then you can get a recorded image to a local file.

## Reference repository for MJPEG streaming

[GitHub - nsmith5/mjpeg](https://github.com/nsmith5/mjpeg)