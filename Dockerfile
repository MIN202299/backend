FROM node:lts-alpine

WORKDIR /nest

RUN npm config set registry https://registry.npm.taobao.org

COPY package.json ./package.json

COPY . .

RUN npm install

RUN npm run build

# 删除开发期依赖
RUN rm -rf node_modules && rm package-lock.json
# 安装生产环境依赖
RUN npm install --production

CMD ["npm", "run", "start:prod"]

EXPOSE 3000

# docker build -t test-nest .
# docker run --name nest-server -p 3000:3000 --network will-be-remove_custom-net test-nest
# docker container rm nest-server
# docker image rm test-nest
