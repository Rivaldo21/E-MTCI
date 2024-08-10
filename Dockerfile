# Use an official Node.js image as the base image
FROM node:20.11.1-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular SSR application
RUN npm run build
EXPOSE 80
CMD ["npm", "run", "serve:ssr:ecomercemci"]
