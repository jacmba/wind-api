FROM node:boron-alpine

# Create app dir
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Copy app source
COPY . /usr/app

# Install dependencies
RUN npm Install

# Publish HTTP port
EXPOSE 3000

# Run app
CMD ["npm", "start"]