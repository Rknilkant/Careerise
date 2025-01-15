# Careerise Backend


### File structure

```
.
├── Makefile 
├── README.md
├── go.mod
├── handlers   <--(http route handlers)
├── internal 
│   ├── controller <--(business logics)
│   ├── middleware <--(middleware)
│   └── model
├── main.go
├── migrations <--(db migrations)
├── mysql <--(docker volume for mysql)
├── temp
└── views
```

#### Current Features (before january 21)

- [ ] db schema
- [ ] login system (cookie based)
- [ ] filtering of mentor
- [ ] booking of a mentor
