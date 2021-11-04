
const { GroupCreatePostController } = require("../../controllers/GroupController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const GroupRoute = require("express").Router();

GroupRoute.use([authMiddleware, permissionMiddleware]);

GroupRoute.post("/",
	GroupCreatePostController
);

// GroupRoute.get("/", CourseGetController);

// GroupRoute.get("/:course_id", CourseGetOneController);

module.exports = GroupRoute;
