
# Project Title

A notification engine to send notification to slack through a webpage and configureslack using the web page

## run

To run this project run

```bash
  docker-compose up
```


## Configure application.properties
```bash
spring.datasource.url= jdbc:postgresql://localhost:5432/yourdb
spring.datasource.username= your username
spring.datasource.password=your password

spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true
spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect

# Hibernate ddl auto (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto= update

spring.webHookUrl.url=webHookurl

server.port = port
```
