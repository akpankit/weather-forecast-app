include .env

docker-start:
	docker-compose up -d

docker-stop:
	@docker-compose down -v