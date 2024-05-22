FROM gradle:jdk17 AS build
WORKDIR /app
COPY . /app
RUN ./gradlew bootjar

FROM sami355/performance-test:latest
WORKDIR /app
COPY --from=build /app/build/libs/Login-0.0.1-SNAPSHOT.jar /app/security-jwt.jar
ENTRYPOINT ["sh", "-c"]
CMD ["redis-server & java -jar security-jwt.jar --spring.profiles.active=security-jwt"]