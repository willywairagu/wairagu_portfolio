FROM node:16 as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Add these lines to serve the built files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html