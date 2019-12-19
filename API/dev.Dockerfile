FROM node:12.13.1

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install

CMD ["npm", "start"]