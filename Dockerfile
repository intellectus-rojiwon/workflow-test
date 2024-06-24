FROM  node:20-alpine AS builder

WORKDIR /usr/src/app

COPY  package*.json tsconfig*.json ./
RUN npm i -g npm && npm ci

COPY  . .
RUN npm run build && npm prune --omit=dev

FROM public.ecr.aws/lambda/nodejs:20 AS runner
# aws lambda working directory
WORKDIR /var/task

COPY  --from=builder /usr/src/app/node_modules ./node_modules
COPY  --from=builder /usr/src/app/build ./build

ENTRYPOINT [ "/lambda-entrypoint.sh" ]
CMD [ "build/lambda.handler" ]