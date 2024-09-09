

REDIS_CONTAINER_NAME = redis-server

.PHONY: all
all: start

.PHONY: start
start: 
	docker-compose -f docker-compose.yml up -d

# Target to stop all services and Redis
.PHONY: stop
stop:
	docker-compose down
	docker stop $(REDIS_CONTAINER_NAME)
	docker rm $(REDIS_CONTAINER_NAME)

# Target to clean up (remove stopped containers)
.PHONY: clean
clean: stop
	docker system prune -f

# Target to restart all services and Redis
.PHONY: restart
restart: stop start
