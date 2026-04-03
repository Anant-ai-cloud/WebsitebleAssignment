# Stage 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

RUN npm ci --frozen-lockfile

# Copy all source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Nginx (very small & fast)
FROM nginx:stable-alpine

# Copy built files from previous stage
# Change `dist` to `build` if you are using Create React App
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (for React Router support)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
