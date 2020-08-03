const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "Iv1.a5fae71cefa30900",
      clientSecret: "7d2e8d68922df46bd83edc30fd161b392c542777",
      callbackURL: "https://trabalho-final-node.herokuapp.com/auth/github/callback",
      scope: 'user:email',
    },
    function(accessToken, refreshToken, profile, done) {
      return done(undefined, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(undefined, user);
});

passport.deserializeUser(function(user, done) {
  done(undefined, user);
});