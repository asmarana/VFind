package config

import (
	"os"

	"github.com/spf13/viper"
)

type Config struct {
	MongoURL   string `mapstructure:"MONGO_URL"`
	ServerPort string `mapstructure:"SERVER_PORT"`
}

var Cfg Config

func LoadConfig() error {
	viper.AddConfigPath("./")
	// export ENV=production // To load the production env
	if os.Getenv("ENV") == "production" {
		viper.SetConfigName(".env.production")
	} else if os.Getenv("ENV") == "staging" {
		viper.SetConfigName(".env.staging")
	} else if os.Getenv("ENV") == "dev" {
		viper.SetConfigName(".env.dev")
	} else {
		viper.SetConfigName(".env.local")
	}
	viper.SetConfigType("env")
	err := viper.ReadInConfig()
	viper.AutomaticEnv()
	if err != nil {
		return err
	}
	err = viper.Unmarshal(&Cfg)
	return err
}
