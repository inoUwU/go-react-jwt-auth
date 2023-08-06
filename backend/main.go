package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"go-jwt-auth/database"
	"go-jwt-auth/routes"
)

func main() {
	// DBへ接続する
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		// フロントエンドがcookieを送受信できるようになる
		AllowCredentials: true,
		AllowOrigins:     "http://localhost:5173",
	}))

	routes.Setup(app)

	app.Listen("localhost:3000")
}
