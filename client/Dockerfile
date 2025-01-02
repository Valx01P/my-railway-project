# ---- Stage 1: Build the React app ----
  FROM node:16-alpine as build
  WORKDIR /app
  
  # Copy package files and install
  COPY package*.json ./
  RUN npm install
  
  # Copy all client source code and build
  COPY . .
  RUN npm run build
  
  # ---- Stage 2: Serve with Nginx ----
  FROM nginx:1.23-alpine
  
  # Remove default Nginx static assets
  RUN rm -rf /usr/share/nginx/html/*
  
  # Copy the React build output to the default Nginx public dir
  COPY --from=build /app/dist /usr/share/nginx/html
  
  # Expose port 80 (Railway will map this automatically)
  EXPOSE 80
  
  # Run Nginx in the foreground (standard container entrypoint)
  CMD ["nginx", "-g", "daemon off;"]
  
