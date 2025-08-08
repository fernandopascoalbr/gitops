FROM node:20 as builder
WORKDIR /app/server
COPY . .

CMD ["npm", "start"]