package server

import (
	"vfind/api"

	"github.com/gin-gonic/gin"
)

type ServerImpl interface {
	HelloWorld(c *gin.Context)
}

type Server struct {
	api api.TemplateAPI
}

func NewServer() *Server {
	api := api.NewTemplateAPIImpl()
	return &Server{
		api: api,
	}
}

func NewServerImpl(r *gin.Engine) *gin.Engine {
	server := NewServer()
	r.GET("/hello", server.HelloWorld)
	return r
}

var _ ServerImpl = &Server{}
