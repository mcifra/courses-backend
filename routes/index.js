import { User, Team, Topic, Course, CourseInstance, Session } from "../controllers";
import express from "express";
import { validationResult } from "express-validator";
const router = express.Router();

function validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    } else next();
}

router.get("/user", User.getAllUsers);
router.get("/user/:id", User.idValidation, User.getUser);
router.post("/user/requestCourseInstance", User.requestCourseInstanceValidation, User.requestCourseInstance);
router.post("/user/setCourseInstance", User.requestCourseInstanceValidation, User.setCourseInstance);
router.post("/user/setTeam", User.setTeamValidation, User.setTeam);
router.delete("/user/:id", async (req, res) => {});

router.post("/topic", Topic.createTopicValidation, validate, Topic.createTopic);
router.get("/topic", Topic.getAllTopics);
router.get("/topic/:id", Topic.getTopic);
router.delete("/topic/:id", Topic.idValidation, validate, Topic.deleteTopic);
router.patch("/topic/:id", Topic.idValidation, validate, Topic.patchTopic);
router.put("/topic/:id", Topic.idValidation, validate, Topic.putTopic);

router.post("/team", Team.createTeamValidation, validate, Team.createTeam);
router.get("/team", Team.getAllTeams);
router.get("/team/:id", Team.getTeam);

router.post("/session/lecture", Session.createSessionValidation, validate, Session.createLecture);
router.post("/session/lab", Session.createSessionValidation, validate, Session.createLab);
router.get("/session", Session.paramsValidation, validate, Session.getSessions);

router.post("/courseInstance", CourseInstance.createCourseInstance);
router.get("/courseInstance", CourseInstance.getCourseInstance);

router.post("/course", Course.createCourse);
router.get("/course", Course.getAllCourses);
router.get("/course/:id", Course.getCourse);

export default router;