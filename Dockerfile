FROM node:14-buster-slim 

WORKDIR /abb

COPY ./*.json ./
COPY ./packages/server/package.json ./packages/server/package.json
COPY ./packages/common/package.json ./packages/common/package.json

# RUN npm install -g lerna
# RUN yarn build:server 
RUN npm install -g tsc
RUN yarn --pure-lockfile --production
# RUN yarn install  

COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist
COPY ./packages/server/.env.prod ./packages/server/.env
COPY ./packages/server/.env.example ./packages/server/

WORKDIR ./packages/server

RUN yarn --pure-lockfile --production
RUN yarn build 
COPY ./packages/server/prisma ./prisma

RUN npx prisma migrate deploy
RUN npx prisma generate

ENV NODE_ENV production

EXPOSE 4000
CMD ["node", "dist/index.js"]
USER node


