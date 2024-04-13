#!/bin/bash

# Grafana와 Prometheus 프로세스 종료
echo "Attempting to kill Grafana and Prometheus processes..."
sudo pkill -f grafana
sudo pkill -f prometheus
echo "Grafana and Prometheus processes have been terminated."

# 특정 포트를 사용하는 프로세스 종료
PORTS=(8080 9090)
for PORT in "${PORTS[@]}"; do
    PIDS=$(sudo lsof -t -i:$PORT)
    for PID in $PIDS; do
        if [ ! -z "$PID" ]; then
            echo "Killing process $PID on port $PORT."
            sudo kill -9 $PID
        else
            echo "No process is using port $PORT."
        fi
    done
done
echo "All specified processes have been killed."

# Docker Compose 관련 작업 종료
echo "Shutting down Docker Compose..."
docker compose down --remove-orphans
echo "Docker Compose has been shut down."
