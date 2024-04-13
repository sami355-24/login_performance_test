cd /Users/sangmin/Desktop/Login || exit
docker compose up --build -d
echo "Docker compose started and sleeping for 40 seconds..."
sleep 40

cd /Users/sangmin/Local/prometheus-2.51.1.darwin-amd64 || exit
./monitoring-prometheus.sh &
echo "Prometheus started"

cd /Users/sangmin/Local/grafana-v10.4.1/bin || exit
./monitoring-grafana.sh &
echo "Grafana started"
