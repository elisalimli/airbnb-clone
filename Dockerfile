FROM node

WORKDIR /abb

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

# RUN yarn install --production
RUN yarn install 

COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist
# COPY /packages/server/.env.prod ./packages/server/.env
COPY /packages/server/.env ./packages/server/.env
COPY /packages/server/.env.example ./packages/server/.env.example

WORKDIR ./packages/server

COPY ./packages/server/prisma ./prisma
# RUN yarn install --production
RUN yarn install 

RUN npx prisma generate
RUN npx prisma db push --preview-feature
RUN npx prisma generate

ENV NODE_ENV production

EXPOSE 4000
CMD ["node", "dist/index.js"]
USER node