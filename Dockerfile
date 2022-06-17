FROM node:14-alpine

WORKDIR /service

COPY . /service

RUN npm install

RUN npm run tsc

EXPOSE 4000

CMD ["npm","run","start"]