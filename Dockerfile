FROM node:lts-alpine AS build
WORKDIR /opt/server
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build

## this is stage two , where the app actually runs
FROM node:lts-alpine AS run
WORKDIR /opt/server
COPY --from=build /opt/server/dist .
EXPOSE 8888
CMD ["server.js"]
