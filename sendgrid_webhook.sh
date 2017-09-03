function localtunnel {
  lt -s jsklwiocnmdj000x0 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
