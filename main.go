package main

import (
	"crypto/ed25519"
	"encoding/base32"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"os"
	"time"
)

var publicKey ed25519.PublicKey

func main() {
	pub, priv, err := ed25519.GenerateKey(nil)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Public key (hex):  %s\n", hex.EncodeToString(pub))
	fmt.Printf("Private key (hex): %s\n", hex.EncodeToString(priv))

	// Save private key somewhere safe, NOT in your repo
	os.WriteFile("key_ed25519", priv, 0600)

	publicKeyHex := hex.EncodeToString(pub)

	b, err := hex.DecodeString(publicKeyHex)
	if err != nil || len(b) != ed25519.PublicKeySize {
		panic("invalid embedded public key")
	}
	publicKey = ed25519.PublicKey(b)

	fmt.Println(string(publicKey))

	lic := License{
		Customer: "ABCDEFG",
		Expires:  time.Date(2028, 3, 3, 12, 12, 12, 12, time.UTC),
		Features: 32,
	}
	activationKey, err := GenerateKey(priv, lic)
	newLic, err := VerifyKey(publicKey, activationKey)
	fmt.Println("hello", newLic)
}

type License struct {
	Customer string    `json:"c"`
	Expires  time.Time `json:"e"`
	Features uint32    `json:"f"`
}

// --- Vendor side (offline, run once to generate keys) ---
func GenerateKey(priv ed25519.PrivateKey, lic License) (string, error) {
	payload, err := json.Marshal(lic)
	if err != nil {
		return "", err
	}
	sig := ed25519.Sign(priv, payload)
	full := append(payload, sig...)
	return base32.StdEncoding.EncodeToString(full), nil
}

func VerifyKey(pubKey ed25519.PublicKey, key string) (*License, error) {
	full, err := base32.StdEncoding.DecodeString(key)
	if err != nil {
		return nil, fmt.Errorf("bad encoding: %w", err)
	}
	if len(full) < ed25519.SignatureSize {
		return nil, fmt.Errorf("key too short")
	}
	sigStart := len(full) - ed25519.SignatureSize
	payload, sig := full[:sigStart], full[sigStart:]

	if !ed25519.Verify(pubKey, payload, sig) {
		return nil, fmt.Errorf("invalid signature")
	}
	var lic License
	if err := json.Unmarshal(payload, &lic); err != nil {
		return nil, err
	}
	if time.Now().After(lic.Expires) {
		return nil, fmt.Errorf("license expired")
	}
	return &lic, nil
}
