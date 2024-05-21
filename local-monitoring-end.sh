# 포트 번호
PORT=6379,8082

# 포트를 사용하는 프로세스의 PID를 찾기
PID=$(lsof -ti:$PORT)

if [ -z "$PID" ]; then
    echo "포트 $PORT를 사용하는 프로세스를 찾을 수 없습니다."
else
    # 프로세스 종료
    kill $PID
    echo "포트 $PORT를 사용하는 프로세스 (PID: $PID)를 종료했습니다."
fi