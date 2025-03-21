## Layerd Architecture:
Controller(route/client request) <--> Services(handle business logic) <--> Respository(Handle DB)
Other classes:
1. DTO (Data tarnsfer object), responsible for mapping clinet input, Serviices and Repo will interraction with this. Two types of DTO, respinse, request DTO. In response DTO, if a column change in the Repository, the changed response will be mapped to Service and send to DTO>
2. Utility: is reponsible for handling common methods
3. Entity: Reponsoble for having a direct represntaiton of a DB table. Genera;;y, the service layer will creare a class of Enttiy and update the value to post in the database. Similarly, when the database return a list of values or fileds it can be mapped tot the entity class, then pass it tio the service layer and mapped to DTO and send to the controller then send to the client.
4. Configuration: will be applied to the application.properties to read the config value or secret value and update to the variable
