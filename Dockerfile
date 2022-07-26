FROM node:16.16-bullseye

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4321

CMD ["npm", "start"]