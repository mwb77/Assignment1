FROM node:20 AS build
ARG VITE_BACKEND_URL=https://glowing-potato-7rjq56ggq452p44x-3001.app.github.dev/api/v1
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

# Start the SSR server
CMD ["npm", "start"]
