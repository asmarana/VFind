package db

import (
	"context"
	"fmt"
	"log"

	"vfind/config"

	_ "github.com/go-sql-driver/mysql"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type TemplateDB interface {
}

type TemplateDBImpl struct {
	Client      *mongo.Client
	Collections map[string]*mongo.Collection
}

func NewTemplateDBImpl() *TemplateDBImpl {
	fmt.Println(config.Cfg.MongoURL)
	clientOptions := options.Client().ApplyURI(config.Cfg.MongoURL)
	var err error

	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal("Connection Failed to Database")
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal("Connection Failed to Connect Mongo Database")
		log.Fatal(err)
	}
	log.Println("⛁ Connected to Mongo Database!")

	return &TemplateDBImpl{}
}

var _ TemplateDB = &TemplateDBImpl{}
