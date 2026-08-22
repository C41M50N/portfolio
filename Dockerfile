FROM node:22-alpine

WORKDIR /app

# Copy package files and pnpm settings
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install the package manager version declared by the project and its dependencies
RUN npm install -g pnpm@11.22.0
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Use nginx to serve static files
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
