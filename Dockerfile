# Stage 1: Build Angular app
FROM node:20-bullseye-slim AS build

# Set working directory
WORKDIR /app

# Update OS packages to latest patches
RUN apt-get update && apt-get upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build Angular app in production mode
RUN npm run build -- --output-path=dist --configuration=production

# Stage 2: Serve Angular app
FROM nginx:1.26.1-alpine

# Remove default HTML
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build (browser folder)
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

