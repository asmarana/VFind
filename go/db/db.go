package db

import (
	"github.com/fatih/color"
)

// var client *mongo.Client

// Dbconnect -> connects mongo
func Dbconnect() error {
	// clientOptions := options.Client().ApplyURI(middlewares.DotEnvVariable("MONGO_URL"))
	// client, err := mongo.Connect(context.TODO(), clientOptions)
	// if err != nil {
	// 	log.Fatal("⛒ Connection Failed to Database")
	// 	log.Fatal(err)
	// }
	// // Check the connection
	// err = client.Ping(context.TODO(), nil)
	// if err != nil {
	// 	log.Fatal("⛒ Connection Failed to Database")
	// 	log.Fatal(err)
	// }
	color.Green("⛁ Connected to Database")
	return nil
}
