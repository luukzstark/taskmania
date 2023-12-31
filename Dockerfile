FROM node:18-alpine
WORKDIR /usr/src/app

COPY . .

RUN npm install
ENTRYPOINT [ "npm", "run", "dev"]
EXPOSE 3000