# Hotel Price Comparison API

## Description
This Node.js project utilizes the MAKCorps Hotel API to fetch hotel details and compare hotel prices. It is designed to help users find hotel information and compare prices for specific dates and requirements.

## Installation

Before installation, ensure you have Node.js and npm installed on your machine.

1. **Clone the Repository**
   ```
   git clone https://github.com/adanzweig/node-makcorps.git
   cd node-makcorps
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Environment Variables**
   - Create a `.env` file in the project root.
   - Add the following line:
     ```
     API_KEY=your_makcorps_api_key
     ```

## Usage

To run the script, use the following command:

```
node index.js
```

This will execute the script, which fetches details for 'The Plaza New York' hotel and its price comparisons.

## Features

- Fetch hotel details using hotel names.
- Compare hotel prices for specific dates, room count, and guest numbers.

## Contributing

Contributions are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes or add new features.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.
