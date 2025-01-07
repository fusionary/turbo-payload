FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
    gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
    --dearmor
RUN echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-8.0.list

RUN . /etc/os-release \
    && apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y mongodb-org-shell mongodb-org-tools \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

RUN su vscode -c "curl -s https://ohmyposh.dev/install.sh | bash"

RUN su vscode -c "curl -fsSL https://fnm.vercel.app/install | bash"

COPY .devcontainer/theme.omp.json /usr/local/share/theme.omp.json
COPY .devcontainer/docker-init.sh /usr/local/share/docker-init.sh
