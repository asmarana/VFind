package routes

import (
	"vfind/controllers"

	"github.com/gorilla/mux"
)

// Routes -> define endpoints
func Routes() *mux.Router {
	router := mux.NewRouter()

	// User API routes
	user := router.PathPrefix("/user").Subrouter()
	// user.HandleFunc("/register", controllers.RegisterUser).Methods("POST")
	// user.HandleFunc("/login", controllers.LoginUser).Methods("POST")

	user.HandleFunc("/subscribe", controllers.Subscribe).Methods("POST")
	user.HandleFunc("/unsubscribe", controllers.Unsubscribe).Methods("POST")
	user.HandleFunc("/send", controllers.Send).Methods("POST")

	// user.HandleFunc("/{id}", controllers.GetUserByID).Methods("GET")
	// user.HandleFunc("/profile/", middlewares.IsAuthorized(controllers.GetProfile)).Methods("GET")
	// user.HandleFunc("/update", middlewares.IsAuthorized(controllers.UpdateUser)).Methods("PUT")

	return router
}
