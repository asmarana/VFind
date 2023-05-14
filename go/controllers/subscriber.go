package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"path/filepath"

	middlewares "vfind/handlers"
	"vfind/models"

	firebase "firebase.google.com/go"
	"firebase.google.com/go/messaging"
	"google.golang.org/api/option"
)

type Auth struct {
	Client *firebase.App
}

func NewAuth() *Auth {
	authClient := SetupFirebase("./vfind.json")
	auth := &Auth{
		Client: authClient,
	}
	return auth
}

func SetupFirebase(authenticationFilePath string) *firebase.App {
	serviceAccountKeyFilePath, err := filepath.Abs(authenticationFilePath)
	if err != nil {
		log.Fatalln("Unable to load serviceAccountKeys.json file")
	}
	// conf := &firebase.Config{ProjectID: "vfind-e4911"}

	opt := option.WithCredentialsFile(serviceAccountKeyFilePath)
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		log.Fatalln("Firebase load error")
	}
	return app
}

var Subscribe = http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
	var user models.Subscribe
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		middlewares.ServerErrResponse(err.Error(), rw)
		return
	}
	client := NewAuth()
	// Create Firebase messaging client
	clientMessaging, err := client.Client.Messaging(r.Context())
	if err != nil {
		middlewares.ErrorResponse("error getting Messaging client: "+err.Error(), rw)
		return
	}
	// Subscribe devices to topic
	response, err := clientMessaging.SubscribeToTopic(r.Context(), user.Token, user.Topic)
	if err != nil {
		middlewares.ErrorResponse("error subscribing to topic: "+err.Error(), rw)
		return
	}
	middlewares.SuccessResponse("tokens were subscribed successfully: "+fmt.Sprint(response.SuccessCount), rw)
})

var Unsubscribe = http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
	var user models.Subscribe
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		middlewares.ServerErrResponse(err.Error(), rw)
		return
	}
	client := NewAuth()
	// Create Firebase messaging client
	clientMessaging, err := client.Client.Messaging(r.Context())
	if err != nil {
		middlewares.ErrorResponse("error getting Messaging client: "+err.Error(), rw)
		return
	}
	// Subscribe devices to topic
	response, err := clientMessaging.UnsubscribeFromTopic(r.Context(), user.Token, user.Topic)
	if err != nil {
		middlewares.ErrorResponse("error unsubscribing to topic: "+err.Error(), rw)
		return
	}
	middlewares.SuccessResponse("tokens were unsubscribed successfully: "+fmt.Sprint(response.SuccessCount), rw)
})

var Send = http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
	var user models.Send
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		middlewares.ServerErrResponse(err.Error(), rw)
		return
	}
	message := &messaging.Message{
		Data: map[string]string{
			"message": user.Message,
		},
		Topic: user.Topic,
	}
	client := NewAuth()
	// Create Firebase messaging client
	clientMessaging, err := client.Client.Messaging(r.Context())
	if err != nil {
		middlewares.ErrorResponse("error getting Messaging client: "+err.Error(), rw)
		return
	}
	// Subscribe devices to topic
	response, err := clientMessaging.Send(r.Context(), message)
	if err != nil {
		middlewares.ErrorResponse("error send message to topic: "+err.Error(), rw)
		return
	}
	middlewares.SuccessResponse("Successfully sent message: "+fmt.Sprint(response), rw)
})
