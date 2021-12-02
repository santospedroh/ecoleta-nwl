FROM node:16.3.0-alpine
WORKDIR /app
COPY . .
ENV HOSTDB=parm1
ENV USERDB=parm2
ENV PASSDB=parm4
ENV SCHEDB=parm5
RUN npm install
RUN ["chmod", "+x", "entrypoint.sh"]
EXPOSE 8000
ENTRYPOINT [ "sh", "entrypoint.sh" ]
