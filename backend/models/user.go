package models

// gorm.Model
type User struct {
	Id    uint   `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email" gorm:"unique"`
	// json:"-"はjsonに変換した場合に除かれる
	Password []byte `json:"-"`
}
