const config = require('../config/db');
const User = require('../models/user');

module.exports = (passport) => {
	const JwtStrategy = require('passport-jwt').Strategy;
	const ExtractJwt = require('passport-jwt').ExtractJwt;
	const opts = {}
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		User.findOne({login: jwt_payload.sub}, (err, user) => {
			if (err) {
				return done(err, false);
			}
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}));
}