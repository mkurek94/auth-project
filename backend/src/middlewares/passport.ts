import passport from "passport";
import { setupJwtStategy } from "../common/strategies/jwt.strategy";

const initializePassport = () => {
  setupJwtStategy(passport);
};

initializePassport();

export default passport;
