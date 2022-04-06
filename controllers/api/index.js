// All routes within the API folder

const router = require("express").Router();

const projectsRoutes = require("./projects-routes");
const startupsRoutes = require("./startups-routes");
const teamsRoutes = require("./teams-routes");
const userRoutes = require("./user-routes");

router.use("/projects", projectsRoutes);
router.use("/startups", startupsRoutes);
router.use("/teams", teamsRoutes);
router.use("/user", userRoutes);

module.exports = router;
