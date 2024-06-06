# Use an official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the build script to generate the 'dist' folder
RUN npm run build

# Set the command to start your application
CMD ["npm", "run", "dev"]
