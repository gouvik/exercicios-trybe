FROM alpine:3.14

RUN mkdir teste

COPY teste.txt /teste

RUN apk add curl

RUN apk update

RUN apk add vim

RUN apk add git

RUN echo "Pegou"

RUN mkdir /minha_pasta

RUN echo "hello world" > /minha_pasta/hello.txt

VOLUME /minha_pasta

CMD [ "echo", "image created" ]