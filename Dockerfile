# Use an older Ruby image that matches your Gemfile
FROM ruby:2.5.1

# Install dependencies (Node.js 10 and Postgres client)
# We use archived sources because Debian Stretch (Ruby 2.5 base) is EOL
RUN printf "deb http://archive.debian.org/debian/ stretch main" > /etc/apt/sources.list && \
    printf "deb http://archive.debian.org/debian-security stretch/updates main" >> /etc/apt/sources.list && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get update && apt-get install -y nodejs postgresql-client --allow-unauthenticated

# Set up the app directory
WORKDIR /app
COPY . .

# Install Gems and Node packages
RUN bundle install --without development test
RUN npm install

# Compile assets
RUN RAILS_ENV=production bundle exec rake assets:precompile

# Start the server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]