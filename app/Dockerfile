# -------------------------
# Stage 1: Build Stage
# -------------------------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy rest of the code
COPY . .

# -------------------------
# Stage 2: Final Secure Image
# -------------------------
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files
COPY --from=build /app /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Switch to non-root
USER appuser

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
