# api-server

This is a basic Espress server that includes Dynamic API performing CRUD Operations on a database.

## Installation

* `npm install`

Set your PORT and Database environment with an .env file

```text
PORT=3001
SQL_CONNECTION_STRING=postgres://localhost:5434/database_name
```

## Usage

READ:

```text
method: GET
route: /food
```

READ ONE:

```text
method: GET
route: /food/id
params:
  name{String}
  type{String}
```

CREATE:

```text
method: POST
route: /food
params:
  name{String}
  type{String}
```

UPDATE:

```text
method: PUT
route: /food/id
params:
  name{String}
  type{String}
```

DELETE:

```text
method: DELETE
route: /food/id
params:
  name{String}
  type{String}
```

## URLs

- [Main branch](https://api-server-pb8u.onrender.com)
- [PR](https://github.com/KatKho/api-server/pull/1)
- [GitHub Actions](https://github.com/KatKho/api-server/actions)

## Contributors

Ekaterina Khoroshilova