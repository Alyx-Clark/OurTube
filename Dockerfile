# Use the older Ruby image
FROM ruby:2.5.1

# 1. Fix the "Archive" sources so we can still install basic tools
# We use [check-valid-until=no] to ignore the expired security keys of Debian Stretch
RUN printf "deb [check-valid-until=no] http://archive.debian.org/debian/ stretch main\n" > /etc/apt/sources.list && \
    printf "deb [check-valid-until=no] http://archive.debian.org/debian-security stretch/updates main\n" >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y --allow-unauthenticated postgresql-client xz-utils

# 2. Install Node.js 10.13.0 manually
RUN curl -SLO https://nodejs.org/dist/v10.13.0/node-v10.13.0-linux-x64.tar.xz && \
    tar -xJf node-v10.13.0-linux-x64.tar.xz -C /usr/local --strip-components=1 && \
    rm node-v10.13.0-linux-x64.tar.xz

# Set up the app directory
WORKDIR /app
COPY . .

# 3. FIX: Install Bundler 2.3.27
RUN gem install bundler -v 2.3.27

# 4. Force the use of Bundler 2.3.27 for installation
RUN bundle _2.3.27_ install --without development test
RUN npm install

# 5. Force the use of Bundler 2.3.27 for compiling assets
RUN RAILS_ENV=production bundle _2.3.27_ exec rake assets:precompile

# 6. Start the server using Bundler 2.3.27
CMD ["bundle", "_2.3.27_", "exec", "rails", "server", "-b", "0.0.0.0"]