package main

import (
	"log"
	"net/http"

	"vfind/config"
	"vfind/server"

	"github.com/gin-gonic/gin"
)

func init() {
	err := config.LoadConfig()
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	r := gin.New()
	log.Fatal(http.ListenAndServe(":"+config.Cfg.ServerPort, server.NewServerImpl(r)))
}
