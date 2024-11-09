FROM node:18
WORKDIR /app
COPY package*.json /app
RUN npm install -g npm@10.9.0 
COPY . /app
EXPOSE 4000
CMD ["npm", "start"]
