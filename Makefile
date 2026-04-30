.PHONY: help build up down test lint migrate ingest-billing analyze-cost generate-report

help:
	@echo "Multi-Cloud Billing Dashboard - Management Commands"
	@echo "---------------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + FinOps models)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "ingest-billing     : Manually trigger billing data ingestion"
	@echo "analyze-cost       : Run cost allocation and optimization analysis"
	@echo "generate-report    : Generate executive FinOps PDF report"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/models
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

ingest-billing:
	docker-compose exec api python scripts/ingest/provider_pull.py

analyze-cost:
	docker-compose exec api python scripts/analyze/engine.py

generate-report:
	docker-compose exec api python scripts/report/generator.py
