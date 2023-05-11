package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (s *Server) HelloWorld(c *gin.Context) {
	c.JSON(http.StatusOK, "Hello World")
}
