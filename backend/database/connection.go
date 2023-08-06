package database

import (
	"github.com/joho/godotenv"
	"go-jwt-auth/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"os"
)

// DBへの接続をグローバル変数で公開
var DB *gorm.DB

func Connect() {

	// envファイルからDBへの接続文字列を取得する
	err := godotenv.Load(".env")
	if err != nil {
		panic("could not read .env")
	}

	dsn := os.Getenv("DSN")

	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("could not connect to the database")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
