# set base from node's official docker repo
FROM node:boron

# make app dir
RUN mkdir -p /usr/src/app

# set working dir
WORKDIR /usr/src/app

# copy app bundle
COPY ./code /usr/src/app

# install node modules
RUN npm install

# expose 3000
EXPOSE 3000

CMD [ "npm", "start" ]