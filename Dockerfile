# FROM node:14-buster-slim 

# WORKDIR /abb

# COPY ./package.json .
# COPY ./Procfile .
# COPY ./packages/server/package.json ./packages/server/
# COPY ./packages/common/package.json ./packages/common/

# RUN yarn install --production

# COPY ./packages/server/dist ./packages/server/dist
# COPY ./packages/common/dist ./packages/common/dist
# COPY ./packages/server/.env.prod ./packages/server/.env
# COPY ./packages/server/.env.example ./packages/server/

# WORKDIR ./packages/server

# COPY ./packages/server/prisma ./prisma
# RUN yarn install --production

# # RUN npx prisma generate

# ENV NODE_ENV production

# EXPOSE 4000   
# CMD ["yarn", "start"]
# USER node

FROM node 

WORKDIR /abb

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/package.json
COPY ./packages/common/package.json ./packages/common/package.json

RUN yarn install --production 

COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist
COPY ./packages/server/.env.prod ./packages/server/.env
COPY ./packages/server/.env.example ./packages/server/

WORKDIR ./packages/server

RUN yarn install --production 
COPY ./packages/server/prisma ./prisma

RUN npx prisma migrate deploy
RUN npx prisma generate

ENV NODE_ENV production

EXPOSE 4000
CMD ["node", "dist/index.js"]
USER node


