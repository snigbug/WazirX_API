# WazirX API Node.js Express Server

This project is a Node.js Express server backend designed to fetch the top 10 data from the WazirX API.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/snigyban18/WazirX_API
   ```

2. Navigate to the project directory:

   ```bash
   cd WazirX_api
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

## Configuration

Before running the server, you need to set up your WazirX API URL.

```bash
WAZIRX_API_URL=https://api.wazirx.com/api/v2/tickers
```

## Usage

To start the server, run:

```bash
node server.js
```

This will start the server at `http://localhost:3000`.

### Endpoints

- `/top10`: Fetches the top 10 data from the WazirX API.

## Dependencies

- express: Web framework for Node.js
- axios: Promise-based HTTP client for Node.js
- dotenv: Loads environment variables from a .env file

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
