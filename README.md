# HNG Task 1

This is a simple Express application created for the HNG internship task 1.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Oluwaseun.Adesina/HNGTask1.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will start on port 3000.

## API Endpoints

### GET /

Returns personal information.

**Response:**

```json
{
    "status": "success",
    "message": "My Rule-Validation API",
    "data": {
        "name": "Oluwaseun Adesina",
        "github": "@OluwaseunAdesina",
        "email": "oluwaseunadesina8@gmail.com",
        "mobile": "08137271798",
        "twitter": "@OluwaseunAdesina"
    }
}
```

### GET /me

Returns a random cat fact along with user information.

**Response:**

```json
{
    "status": "success",
    "user": {
        "email": "oluwaseunadesina8@gmail",
        "name": "Oluwaseun Adesina",
        "stack": "JavaScript, Nodejs, Expressjs"
    },
    "timestamp": "2025-10-17T12:00:00.000Z",
    "fact": "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance."
}
```

## Author

Oluwaseun Adesina
