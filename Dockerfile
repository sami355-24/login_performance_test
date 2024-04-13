FROM gradle:jdk17 AS build
WORKDIR /app
COPY . /app
RUN ./gradlew bootjar

FROM sami355/performance-test:latest
WORKDIR /app
COPY --from=build /app/build/libs/Login-0.0.1-SNAPSHOT.jar /app/interceptor.jar
ENTRYPOINT ["sh", "-c"]
CMD ["redis-server & java -jar interceptor.jar --spring.profiles.active=interceptor"]