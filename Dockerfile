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

# 3. FIX: Override the system's locked Bundler version
ENV BUNDLER_VERSION=2.3.27

# 4. Install the correct Bundler version
RUN gem install bundler -v 2.3.27

# 5. Install Gems and Node packages
RUN bundle install --without development test
RUN npm install

# 6. FIX: Configure the environment for Production
ENV RAILS_ENV=production
ENV RAILS_LOG_TO_STDOUT=true
ENV RAILS_SERVE_STATIC_FILES=true

# 7. Compile assets (Using a dummy secret just for this build step)
RUN SECRET_KEY_BASE=dummy bundle exec rake assets:precompile

# Start the server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]