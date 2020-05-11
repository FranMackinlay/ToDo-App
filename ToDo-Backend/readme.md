# Todo App API

### Install dependencies:

```shell
npm install
```

### Start a mongoDB instance:

```shell
<root-mongodb-folder>$ ./bin/mongod --dbpath ./data/db --directoryperdb
```

### Enviroment variables

> Look at the .env.example to know how to declare the necessary .env variables and create a .env file

### To initialize database you can run:

```shell
npm run db-init
```

### To start the api in dev mode:

```shell
npm run dev
```

### API Endopints:

**GET: /api/todos**

- Result:

```shell
[
    {
        "_id": "5eb45782fb56011b0667fc7e",
        "todo": "Create Todo App",
        "__v": 0
    },
    {
        "_id": "5eb45782fb56011b0667fc7f",
        "todo": "Submit Todo App",
        "__v": 0
    },
]
```

**POST: /api/todos**

- Payload required in body:

```shell
{
 todo: String,
}
```

**PUT: /api/todos/:id**

To update a Todo, provide the id of the Todo to be modified and send the payload in the body to be modified:

- Original parameter:

```shell
{
  todo: "Create a Todo app",
}
```

- New parameter:

```shell
{
  price: "Create an Angular Todo app",
}
```

**DELETE: /api/todos/:id**

To delete a Todo provide the id parameter in URL.
