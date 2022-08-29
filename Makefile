.PHONY:
	run-dev
	frontend-test

run-dev:
	docker-compose -f docker-compose.yml up

# Frontend tests
frontend-test:
	docker exec -it survey_frontend npm test -- -u
	