FROM mysql:8.0.25
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 467B942D3A79BD29
RUN apt-get update
RUN apt-get install pv

ADD ./docker/base/dbconf.cnf /etc/mysql/conf.d/custom.cnf

EXPOSE 3306