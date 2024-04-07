FROM sami355/performance-test:latest

WORKDIR /app

COPY ./build/libs/Login-0.0.1-SNAPSHOT.jar /app/interceptor.jar

ENTRYPOINT ["sh", "-c"]
CMD ["redis-server & java -jar interceptor.jar --spring.profiles.active=interceptor"]