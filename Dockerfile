# build stage
FROM node:18.0-alpine3.14 as build-stage
#ARG a
#ARG b
#ENV a=${a}
#ENV b=${b}
WORKDIR /app
COPY package.json .
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM node:18.0-alpine3.14 as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install --production
RUN npm install -g pm2
EXPOSE 3000
CMD [ "pm2-runtime", "/app/main.js" ]