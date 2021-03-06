const path = require("path");
const express = require("express");

const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: { expires: 3600000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "Public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () =>
    console.log("Now listening on port " + port + "!!!!!!!!!")
  );
});