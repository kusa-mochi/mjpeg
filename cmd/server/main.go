package main

import (
	"image"
	"image/color"
	"image/jpeg"
	"log"
	"math/rand"
	"net/http"

	mjpeg_handler "github.com/nsmith5/mjpeg/cmd/server/mjpeg"
	"github.com/rs/cors"
)

func stream() (image.Image, error) {
	img := image.NewGray(image.Rect(0, 0, 100, 100))
	for i := 0; i < 100; i++ {
		for j := 0; j < 100; j++ {
			n := rand.Intn(256)
			gray := color.Gray{uint8(n)}
			img.SetGray(i, j, gray)
		}
	}

	return img, nil
}

func main() {
	handler := mjpeg_handler.Handler{
		Next:    stream,
		Options: &jpeg.Options{Quality: 60},
	}

	mux := http.NewServeMux()
	mux.Handle("/stream", handler)
	c := cors.AllowAll()
	corsHandler := c.Handler(mux)
	log.Println("listening...")
	log.Fatal(http.ListenAndServe(":8080", corsHandler))
}
