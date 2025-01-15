run: 
	@docker run --name=mysql \
		-p 3306:3306 \
		-e MYSQL_ROOT_PASSWORD=pass \
		-v mysql:/var/lib/mysql \
		-d mysql/mysql-server:latest

exec:
	@docker exec -it mysql1 mysql -uroot -p

stop:
	@docker stop mysql

remove:
	@docker container rm mysql

up:
	@migrate -path=./migrations -database="mysql://root:pass@tcp(127.0.0.1:3306)/careerise" up

down:
	@migrate -path=./migrations -database="mysql://root:pass@tcp(127.0.0.1:3306)/careerise" down

serve:
	@go run .
