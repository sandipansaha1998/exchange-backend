FROM node:21

WORKDIR /api

COPY package*.json ./

RUN npm install

RUN npm install -g typescript

COPY . .

EXPOSE 8000

# Command to run the service
CMD ["npm","run", "dev"]
