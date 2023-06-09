FROM node:16.7.0-alpine

WORKDIR /app

RUN npm install -g pnpm@7.5.2

COPY . .
RUN pnpm -r install
RUN pnpm -r build

EXPOSE 3300
EXPOSE 3400
CMD ["sh", "boot.sh"]
