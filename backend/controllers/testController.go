package controllers

import "github.com/gofiber/fiber/v2"

func PageTest(c *fiber.Ctx) error {
	return c.SendString("Hello!")
}
