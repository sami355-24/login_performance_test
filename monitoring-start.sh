# 스프링부트, 마리아디비, 프로메테우스, 그라파나를 실행하는 스크립트
# 스프링부트 빌드
docker compose -f docker-compose.yaml build --no-cache
# 스프링부트, 마리아디비 실행
docker compose -f docker-compose.yaml up -d
echo "Docker compose started and sleeping for 40 seconds..."

# 프로메테우스, 그라파나 실행
cd /Users/sangmin/Local/prometheus-2.51.1.darwin-amd64 || exit
./monitoring-prometheus.sh &
echo "Prometheus started"

cd /Users/sangmin/Local/grafana-v10.4.1/bin || exit
./monitoring-grafana.sh &
echo "Grafana started"