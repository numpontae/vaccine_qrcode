FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./

RUN npm install

RUN npm install -g @vue/cli
RUN npm install scss
RUN npm install sass-loader sass webpack


COPY . .

RUN npm run build



# production stage


FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

