# Use a lightweight Node image
FROM node:16-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port (not strictly required by Railway, but good practice)
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
