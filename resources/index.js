import { userRouter } from "./user";
import { coursesRouter } from "./course";
import { teamsRouter } from "./team";
import { sessionsRouter } from "./sessions";
import { quizRouter } from "./quiz";
import { topicsRouter } from "./topic";

module.exports = {
    user: userRouter,
    course: coursesRouter,
    team: teamsRouter,
    quiz: quizRouter,
    topic: topicsRouter,
    sessions: sessionsRouter
};