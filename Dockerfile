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

# 3. FIX: Upgrade Bundler to version 2+ (Required for your lockfile)
RUN gem install bundler

# Install Gems and Node packages
RUN bundle install --without development test
RUN npm install

# Compile assets
RUN RAILS_ENV=production bundle exec rake assets:precompile

# Start the server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]