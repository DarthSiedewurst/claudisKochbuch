FROM node:12.14
LABEL MAINTAINER="marcomueller"
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
CMD npm run start