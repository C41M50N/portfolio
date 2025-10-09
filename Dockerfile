# Railway Deployment
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Expose port
EXPOSE $PORT

# Start the application
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "$PORT"]