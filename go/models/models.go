package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User Model
type User struct {
	ID    primitive.ObjectID `json:"_id" bson:"_id,omitempty"`
	Email string             `json:"email" bson:"email"`
	Role  string             `json:"role" bson:"role"`
}

type GetAllCreatorsResp struct {
	ID       primitive.ObjectID `json:"_id" bson:"_id,omitempty"`
	Username string             `json:"username" bson:"username,omitempty"`
	Role     string             `json:"role" bson:"role,omitempty"`
	// Mnemonic       string             `json:"mnemonic" bson:"mnemonic,omitempty"`
	Bio            string   `json:"bio" bson:"bio,omitempty"`
	Avatar         string   `json:"avatar" bson:"avatar,omitempty"`
	Dash           string   `json:"dash" bson:"dash,omitempty"`
	HeaderImage    string   `json:"header_image" bson:"header_image,omitempty"`
	Title          string   `json:"title" bson:"title,omitempty"`
	SubTitle       string   `json:"subtitle" bson:"subtitle,omitempty"`
	Categories     []string `json:"categories" bson:"categories,omitempty"`
	TotalDonations float64  `json:"total_donations" bson:"total_donations,omitempty"`
	Supporters     int64    `json:"supporters" bson:"supporters,omitempty"`
	Description    string   `json:"description" bson:"description,omitempty"`
	Facebook       string   `json:"facebook" bson:"facebook,omitempty"`
	Twitter        string   `json:"twitter" bson:"twitter,omitempty"`
	Youtube        string   `json:"youtube" bson:"youtube,omitempty"`
	Odysee         string   `json:"odysee" bson:"odysee,omitempty"`
}

type GetCreatorProfileResp struct {
	ID       primitive.ObjectID `json:"_id" bson:"_id,omitempty"`
	Username string             `json:"username" bson:"username,omitempty"`
	Role     string             `json:"role" bson:"role,omitempty"`
	// Mnemonic       string             `json:"mnemonic" bson:"mnemonic,omitempty"`
	Bio            string   `json:"bio" bson:"bio,omitempty"`
	Avatar         string   `json:"avatar" bson:"avatar,omitempty"`
	Dash           string   `json:"dash" bson:"dash,omitempty"`
	HeaderImage    string   `json:"header_image" bson:"header_image,omitempty"`
	Title          string   `json:"title" bson:"title,omitempty"`
	SubTitle       string   `json:"subtitle" bson:"subtitle,omitempty"`
	Categories     []string `json:"categories" bson:"categories,omitempty"`
	TotalDonations float64  `json:"total_donations" bson:"total_donations,omitempty"`
	Description    string   `json:"description" bson:"description,omitempty"`
	Facebook       string   `json:"facebook" bson:"facebook,omitempty"`
	Twitter        string   `json:"twitter" bson:"twitter,omitempty"`
	Youtube        string   `json:"youtube" bson:"youtube,omitempty"`
	Odysee         string   `json:"odysee" bson:"odysee,omitempty"`
}

type NotificationSetting struct {
	ID                     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserID                 string             `json:"user_id,omitempty" bson:"user_id"`
	Email                  string             `json:"email,omitempty" bson:"email,omitempty"`
	NewSupporterAlerts     bool               `json:"new_supporters_alerts" bson:"new_supporters_alerts"`
	WeeklyTips             bool               `json:"weekly_tips" bson:"weekly_tips"`
	WeeklySupporterSummary bool               `json:"weekly_supporter_summary" bson:"weekly_supporter_summary"`
	NewCryptoSupport       bool               `json:"new_crypto_support" bson:"new_crypto_support"`
	CreatedAt              time.Time          `json:"created_at,omitempty" bson:"created_at,omitempty"`
	UpdatedAt              time.Time          `json:"updated_at,omitempty" bson:"updated_at,omitempty"`
}

type Followers struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	CreatorID string             `json:"creator_id,omitempty" bson:"creator_id,omitempty"`
	UserID    string             `json:"user_id,omitempty" bson:"user_id"`
	CreatedAt time.Time          `json:"created_at,omitempty" bson:"created_at,omitempty"`
}

// Content Model
type Content struct {
	ID           primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	ContentID    string             `json:"content_id,omitempty" bson:"content_id,omitempty"`
	UserID       string             `json:"user_id,omitempty" bson:"user_id,omitempty"`
	CategoryName string             `json:"category_name,omitempty" bson:"category_name,omitempty"`
	Title        string             `json:"title,omitempty" bson:"title,omitempty"`
	Body         string             `json:"body,omitempty" bson:"body,omitempty"`
	ContentType  string             `json:"content_type,omitempty" bson:"content_type,omitempty"`
	Type         string             `json:"type,omitempty" bson:"type,omitempty"`
	IpfsURL      string             `json:"ipfs_url,omitempty" bson:"ipfs_url,omitempty"`
	Fund         float64            `json:"fund,omitempty" bson:"fund,omitempty"`
	Public       bool               `json:"public,omitempty" bson:"public,omitempty"`
	// CurrencyType string             `json:"currency_type,omitempty" bson:"currency_type,omitempty"`
	Locked    bool      `json:"locked" bson:"locked"`
	CreatedAt time.Time `json:"created_at,omitempty" bson:"created_at,omitempty"`
	UpdatedAt time.Time `json:"updated_at,omitempty" bson:"updated_at,omitempty"`
}

type GetContentResp struct {
	ID           primitive.ObjectID `json:"_id" bson:"_id,omitempty"`
	UserID       string             `json:"user_id" bson:"user_id,omitempty"`
	CategoryName string             `json:"category_name" bson:"category_name,omitempty"`
	Title        string             `json:"title" bson:"title,omitempty"`
	Body         string             `json:"body" bson:"body,omitempty"`
	ContentType  string             `json:"content_type" bson:"content_type,omitempty"`
	Type         string             `json:"type" bson:"type,omitempty"`
	IpfsURL      string             `json:"ipfs_url" bson:"ipfs_url,omitempty"`
	Fund         float64            `json:"fund" bson:"fund,omitempty"`
	Public       bool               `json:"public" bson:"public,omitempty"`
	// CurrencyType string             `json:"currency_type,omitempty" bson:"currency_type,omitempty"`
	Locked    bool      `json:"locked" bson:"locked"`
	CreatedAt time.Time `json:"created_at" bson:"created_at,omitempty"`
}

type GetAllContentWithCreatorResp struct {
	ID           primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	ContentID    string             `json:"content_id,omitempty" bson:"content_id,omitempty"`
	UserID       string             `json:"user_id,omitempty" bson:"user_id,omitempty"`
	User         User               `json:"user_detail,omitempty" bson:"user_detail,omitempty"`
	CategoryName string             `json:"category_name,omitempty" bson:"category_name,omitempty"`
	Title        string             `json:"title,omitempty" bson:"title,omitempty"`
	Body         string             `json:"body,omitempty" bson:"body,omitempty"`
	Type         string             `json:"type,omitempty" bson:"type,omitempty"`
	IpfsURL      string             `json:"ipfs_url,omitempty" bson:"ipfs_url,omitempty"`
	Fund         float64            `json:"fund,omitempty" bson:"fund,omitempty"`
	Public       bool               `json:"public" bson:"public"`
	ContentType  string             `json:"content_type,omitempty" bson:"content_type,omitempty"`
	Locked       bool               `json:"locked" bson:"locked"`
	// CurrencyType string             `json:"currency_type,omitempty" bson:"currency_type,omitempty"`
	CreatedAt time.Time `json:"created_at,omitempty" bson:"created_at,omitempty"`
	UpdatedAt time.Time `json:"updated_at,omitempty" bson:"updated_at,omitempty"`
}

type FollowersCount struct {
	Count int64 `json:"count,omitempty" bson:"count"`
}

type SupporterCount struct {
	Count int64 `json:"count,omitempty" bson:"count"`
}

type FileResp struct {
	FileHash string `json:"file_hash,omitempty" bson:"file_hash,omitempty"`
	Filename string `json:"filename,omitempty" bson:"filename,omitempty"`
	FileSize int64  `json:"file_size,omitempty" bson:"file_size,omitempty"`
	IpfsURL  string `json:"ipfs_url,omitempty" bson:"ipfs_url,omitempty"`
}

type Donate struct {
	ID           primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserID       string             `json:"user_id,omitempty" bson:"user_id,omitempty"`
	CreatorID    string             `json:"creator_id,omitempty" bson:"creator_id,omitempty"`
	Donate       float64            `json:"donate,omitempty" bson:"donate,omitempty"`
	CurrencyType string             `json:"currency_type,omitempty" bson:"currency_type,omitempty"`
	CreatedAt    time.Time          `json:"created_at,omitempty" bson:"created_at,omitempty"`
	ExpiredAt    time.Time          `json:"expired_at,omitempty" bson:"expired_at,omitempty"`
}

type DonateContent struct {
	ID           primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserID       string             `json:"user_id,omitempty" bson:"user_id,omitempty"`
	ContentID    string             `json:"content_id,omitempty" bson:"content_id,omitempty"`
	Donate       float64            `json:"donate,omitempty" bson:"donate,omitempty"`
	CurrencyType string             `json:"currency_type,omitempty" bson:"currency_type,omitempty"`
	CreatedAt    time.Time          `json:"created_at,omitempty" bson:"created_at,omitempty"`
	ExpiredAt    time.Time          `json:"expired_at,omitempty" bson:"expired_at,omitempty"`
}

type DonateResp struct {
	ID           primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserID       string             `json:"user_id,omitempty" bson:"user_id,omitempty"`
	User         User               `json:"user_detail,omitempty" bson:"user_detail,omitempty"`
	CreatorID    string             `json:"creator_id,omitempty" bson:"creator_id,omitempty"`
	Donate       float64            `json:"donate,omitempty" bson:"donate,omitempty"`
	CurrencyType string             `json:"currency_type,omitempty" bson:"currency_type,omitempty"`
	CreatedAt    time.Time          `json:"created_at,omitempty" bson:"created_at,omitempty"`
	ExpiredAt    time.Time          `json:"expired_at,omitempty" bson:"expired_at,omitempty"`
}

type GenerateAuthURL struct {
	OTPSecret string `json:"otp_secret,omitempty" bson:"otp_secret,omitempty"`
	URL       string `json:"otpauth_url,omitempty" bson:"otpauth_url,omitempty"`
}

type Subscribe struct {
	Token []string `json:"token" bson:"token"`
	Topic string   `json:"topic" bson:"topic"`
}

type Send struct {
	Message string `json:"message" bson:"message"`
	Topic   string `json:"topic" bson:"topic"`
}
