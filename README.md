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

### Restaurant Resource

#### READ (GET)

- **Route**: `/restaurant`
- **Method**: GET
- **Parameters**:
  - `name` (String)
  - `location` (String)

#### READ ONE (GET)

- **Route**: `/restaurant/:id`
- **Method**: GET
- **Parameters**:
  - `name` (String)
  - `location` (String)

#### CREATE (POST)

- **Route**: `/restaurant`
- **Method**: POST
- **Parameters**:
  - `name` (String)
  - `location` (String)

#### UPDATE (PUT)

- **Route**: `/restaurant/:id`
- **Method**: PUT
- **Parameters**:
  - `name` (String)
  - `location` (String)

#### DELETE (DELETE)

- **Route**: `/restaurant/:id`
- **Method**: DELETE
- **Parameters**:
  - `name` (String)
  - `location` (String)

### Menu-Item Resource

#### READ (GET)

- **Route**: `/menu-item`
- **Method**: GET
- **Parameters**:
  - `name` (String)
  - `description` (String)

#### READ ONE (GET)

- **Route**: `/menu-item/:id`
- **Method**: GET
- **Parameters**:
  - `name` (String)
  - `description` (String)

#### CREATE (POST)

- **Route**: `/menu-item`
- **Method**: POST
- **Parameters**:
  - `name` (String)
  - `description` (String)

#### UPDATE (PUT)

- **Route**: `/menu-item/:id`
- **Method**: PUT
- **Parameters**:
  - `name` (String)
  - `description` (String)

#### DELETE (DELETE)

- **Route**: `/menu-item/:id`
- **Method**: DELETE
- **Parameters**:
  - `name` (String)
  - `description` (String)

## URLs

- [Main branch](https://api-server-pb8u.onrender.com)
- [PR](https://github.com/KatKho/api-server/pull/4)
- [GitHub Actions](https://github.com/KatKho/api-server/actions)

## Lab04 documentation

- Partner: Josh Shea
- Takeaway: It is a good practice to leave comments.
- [Partner review PR(Josh)](https://github.com/jshea44/api-server/pull/4)
- [Partner review PR(myself)](https://github.com/KatKho/api-server/pull/3)

## Contributors

Ekaterina Khoroshilova