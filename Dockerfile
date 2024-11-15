FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn --production=false --silent
COPY . .
EXPOSE 4200
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start", "--host=0.0.0.0"]
