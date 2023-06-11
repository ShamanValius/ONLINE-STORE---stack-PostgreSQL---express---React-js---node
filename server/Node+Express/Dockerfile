FROM node:latest

WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 1900

CMD ["node", "index.js"]
