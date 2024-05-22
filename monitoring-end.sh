#스프링부트, 마리아디비, 프로메테우스, 그라파나를 종료하는 스크립트
echo "Attempting to kill Grafana and Prometheus processes..."
pkill -f grafana
pkill -f prometheus
echo "Grafana and Prometheus processes have been terminated."

# 프로메테우스, 그라파나 종료
PORTS=(8080 9090)
for PORT in "${PORTS[@]}"; do
    PIDS=$(lsof -t -i:$PORT)
    for PID in $PIDS; do
        if [ ! -z "$PID" ]; then
            echo "Killing process $PID on port $PORT."
            kill -9 $PID
        else
            echo "No process is using port $PORT."
        fi
    done
done
echo "All specified processes have been killed."

# 스프링부트 마리아디비 종료
echo "Shutting down Docker Compose..."
docker compose -f docker-compose.yaml down --remove-orphans
echo "Docker Compose has been shut down."