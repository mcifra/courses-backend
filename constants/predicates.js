import * as Prefixes from "./prefixes";

export const created = { prefix: Prefixes.courses, value: "created" };
export const type = { prefix: Prefixes.rdf, value: "type" };
export const subclassOf = { prefix: Prefixes.rdfs, value: "subClassOf" };
export const label = { prefix: Prefixes.rdfs, value: "label" };
export const description = { prefix: Prefixes.courses, value: "description" };
export const abbreviation = { prefix: Prefixes.courses, value: "abbreviation" };
export const date = { prefix: Prefixes.courses, value: "date" };
export const year = { prefix: Prefixes.courses, value: "year" };
export const name = { prefix: Prefixes.courses, value: "name" };
export const firstName = { prefix: Prefixes.courses, value: "firstName" };
export const lastName = { prefix: Prefixes.courses, value: "lastName" };
export const email = { prefix: Prefixes.courses, value: "email" };
export const nickname = { prefix: Prefixes.courses, value: "nickname" };
export const location = { prefix: Prefixes.courses, value: "location" };
export const duration = { prefix: Prefixes.courses, value: "duration" };
export const time = { prefix: Prefixes.courses, value: "time" };
export const startDate = { prefix: Prefixes.courses, value: "startDate", inverse: endDate };
export const endDate = { prefix: Prefixes.courses, value: "endDate", inverse: startDate };
export const extraTime = { prefix: Prefixes.courses, value: "extraTime" };
export const comment = { prefix: Prefixes.courses, value: "comment" };
export const commentedText = { prefix: Prefixes.courses, value: "commentedText" };
export const occurance = { prefix: Prefixes.courses, value: "occurance" };
export const filePath = { prefix: Prefixes.courses, value: "filePath" };
export const room = { prefix: Prefixes.courses, value: "room" };
export const hasPrerequisite = { prefix: Prefixes.courses, value: "hasPrerequisite" };
export const mentions = { prefix: Prefixes.courses, value: "mentions" };
export const covers = { prefix: Prefixes.courses, value: "covers" };
export const uses = { prefix: Prefixes.courses, value: "uses" };
export const recommends = { prefix: Prefixes.courses, value: "recommends" };
export const requires = { prefix: Prefixes.courses, value: "requires" };
export const instanceOf = { prefix: Prefixes.courses, value: "instanceOf" };
export const hasInstructor = { prefix: Prefixes.courses, value: "hasInstructor" };
export const hasMember = { prefix: Prefixes.courses, value: "hasMember" };
export const courseInstance = { prefix: Prefixes.courses, value: "courseInstance" };
export const subtopicOf = { prefix: Prefixes.courses, value: "subtopicOf" };
export const memberOf = { prefix: Prefixes.courses, value: "memberOf" };
export const requests = { prefix: Prefixes.courses, value: "requests" };
export const studentOf = { prefix: Prefixes.courses, value: "studentOf" };
export const understands = { prefix: Prefixes.courses, value: "understands" };
export const task = { prefix: Prefixes.courses, value: "task" };
export const subEvent = { prefix: Prefixes.courses, value: "subEvent" };
export const superEvent = { prefix: Prefixes.courses, value: "superEvent" };
export const author = { prefix: Prefixes.courses, value: "author" };
export const hasCodeComment = { prefix: Prefixes.courses, value: "hasCodeComment" };
export const hasGeneralComment = { prefix: Prefixes.courses, value: "hasGeneralComment" };
export const ofAssignment = { prefix: Prefixes.courses, value: "ofAssignment" };
export const submittedField = { prefix: Prefixes.courses, value: "submittedField" };
export const submittedByStudent = { prefix: Prefixes.courses, value: "submittedByStudent" };
export const submittedByTeam = { prefix: Prefixes.courses, value: "submittedByTeam" };
export const submittedAt = { prefix: Prefixes.courses, value: "submittedAt" };
export const hasReview = { prefix: Prefixes.courses, value: "hasReview" };
export const hasTeacherComment = { prefix: Prefixes.courses, value: "hasTeacherComment" };
export const hasCodeReview = { prefix: Prefixes.courses, value: "hasCodeReview" };
export const hasTeamReview = { prefix: Prefixes.courses, value: "hasTeamReview" };
export const isComplete = { prefix: Prefixes.courses, value: "isComplete" };
export const hasSubmission = { prefix: Prefixes.courses, value: "hasSubmission" };
export const avatar = { prefix: Prefixes.courses, value: "avatar" };
export const takingEvent = { prefix: Prefixes.courses, value: "takingEvent" };
export const creationPeriod = { prefix: Prefixes.courses, value: "creationPeriod" };
export const initialSubmissionPeriod = { prefix: Prefixes.courses, value: "initialSubmissionPeriod" };
export const peerReviewPeriod = { prefix: Prefixes.courses, value: "peerReviewPeriod" };
export const improvedSubmissionPeriod = { prefix: Prefixes.courses, value: "improvedSubmissionPeriod" };
export const teamReviewPeriod = { prefix: Prefixes.courses, value: "teamReviewPeriod" };
export const text = { prefix: Prefixes.courses, value: "text" };
export const visibilityIsRestricted = { prefix: Prefixes.courses, value: "visibilityIsRestricted" };
export const hasQuestionState = { prefix: Prefixes.courses, value: "hasQuestionState" };
export const ofTopic = { prefix: Prefixes.courses, value: "ofTopic" };
export const hasAuthor = { prefix: Prefixes.courses, value: "hasAuthor" };
export const hasComment = { prefix: Prefixes.courses, value: "hasComment" };
export const approver = { prefix: Prefixes.courses, value: "approver" };
export const hasChangeEvent = { prefix: Prefixes.courses, value: "hasChangeEvent" };
export const question = { prefix: Prefixes.courses, value: "question" };
export const userAnswer = { prefix: Prefixes.courses, value: "userAnswer" };
export const quizTake = { prefix: Prefixes.courses, value: "quizTake" };
export const next = { prefix: Prefixes.courses, value: "next" };
export const score = { prefix: Prefixes.courses, value: "score" };
export const orderedQuestion = { prefix: Prefixes.courses, value: "orderedQuestion" };
export const position = { prefix: Prefixes.courses, value: "position" };
export const userChoice = { prefix: Prefixes.courses, value: "userChoice" };
export const predefinedAnswer = { prefix: Prefixes.courses, value: "predefinedAnswer" };
export const correct = { prefix: Prefixes.courses, value: "correct" };
export const submitedDate = { prefix: Prefixes.courses, value: "submitedDate" };
export const reviewedDate = { prefix: Prefixes.courses, value: "reviewedDate" };
export const commentText = { prefix: Prefixes.courses, value: "commentText" };
export const useNickName = { prefix: Prefixes.courses, value: "useNickName" };
export const reviews = { prefix: Prefixes.courses, value: "reviews" };
export const creator = { prefix: Prefixes.courses, value: "creator" };
export const commentTime = { prefix: Prefixes.courses, value: "commentTime" };
export const commentedTextFrom = { prefix: Prefixes.courses, value: "commentedTextFrom" };
export const commentedTextTo = { prefix: Prefixes.courses, value: "commentedTextTo" };
export const regexp = { prefix: Prefixes.courses, value: "regexp" };
export const hasAnswer = { prefix: Prefixes.courses, value: "hasAnswer" };
export const password = { prefix: Prefixes.courses, value: "password" };
export const publicProfile = { prefix: Prefixes.courses, value: "publicProfile" };
export const showCourses = { prefix: Prefixes.courses, value: "showCourses" };
export const showBadges = { prefix: Prefixes.courses, value: "showBadges" };
export const allowContact = { prefix: Prefixes.courses, value: "allowContact" };
export const hasQuestion = { prefix: Prefixes.courses, value: "hasQuestion" };
export const hasQuestionAssignment = { prefix: Prefixes.courses, value: "hasQuestionAssignment" };
export const createdBy = { prefix: Prefixes.courses, value: "createdBy" };
export const infoName = { prefix: Prefixes.courses, value: "infoName" };
export const infoDescription = { prefix: Prefixes.courses, value: "infoDescription" };
export const infoShortDescription = { prefix: Prefixes.courses, value: "infoShortDescription" };
export const infoDocuments = { prefix: Prefixes.courses, value: "infoDocuments" };
export const hasField = { prefix: Prefixes.courses, value: "hasField" };
export const submissionAnonymousSubmission = { prefix: Prefixes.courses, value: "submissionAnonymousSubmission" };
export const submissionOpenTime = { prefix: Prefixes.courses, value: "submissionOpenTime" };
export const submissionDeadline = { prefix: Prefixes.courses, value: "submissionDeadline" };
export const submissionExtraTime = { prefix: Prefixes.courses, value: "submissionExtraTime" };
export const submissionImprovedSubmission = { prefix: Prefixes.courses, value: "submissionImprovedSubmission" };
export const submissionImprovedOpenTime = { prefix: Prefixes.courses, value: "submissionImprovedOpenTime" };
export const submissionImprovedDeadline = { prefix: Prefixes.courses, value: "submissionImprovedDeadline" };
export const submissionImprovedExtraTime = { prefix: Prefixes.courses, value: "submissionImprovedExtraTime" };
export const teamsDisabled = { prefix: Prefixes.courses, value: "teamsDisabled" };
export const teamsSubmittedAsTeam = { prefix: Prefixes.courses, value: "teamsSubmittedAsTeam" };
export const teamsMinimumInTeam = { prefix: Prefixes.courses, value: "teamsMinimumInTeam" };
export const teamsMaximumInTeam = { prefix: Prefixes.courses, value: "teamsMaximumInTeam" };
export const teamsMultipleSubmissions = { prefix: Prefixes.courses, value: "teamsMultipleSubmissions" };
export const reviewsDisabled = { prefix: Prefixes.courses, value: "reviewsDisabled" };
export const reviewsOpenTime = { prefix: Prefixes.courses, value: "reviewsOpenTime" };
export const reviewsDeadline = { prefix: Prefixes.courses, value: "reviewsDeadline" };
export const reviewsExtraTime = { prefix: Prefixes.courses, value: "reviewsExtraTime" };
export const reviewsPerSubmission = { prefix: Prefixes.courses, value: "reviewsPerSubmission" };
export const reviewedByTeam = { prefix: Prefixes.courses, value: "reviewedByTeam" };
export const reviewsVisibility = { prefix: Prefixes.courses, value: "reviewsVisibility" };
export const reviewsQuestions = { prefix: Prefixes.courses, value: "reviewsQuestions" };
export const teamReviewsDisabled = { prefix: Prefixes.courses, value: "teamReviewsDisabled" };
export const teamReviewsOpenTime = { prefix: Prefixes.courses, value: "teamReviewsOpenTime" };
export const teamReviewsDeadline = { prefix: Prefixes.courses, value: "teamReviewsDeadline" };
export const teamReviewsExtraTime = { prefix: Prefixes.courses, value: "teamReviewsExtraTime" };
export const ofType = { prefix: Prefixes.courses, value: "ofType" };
export const value = { prefix: Prefixes.courses, value: "value" };
export const hasTopicAppearance = { prefix: Prefixes.courses, value: "hasTopicAppearance" };
export const hasQuizTakePrototype = { prefix: Prefixes.courses, value: "hasQuizTakePrototype" };
export const elaborates = { prefix: Prefixes.courses, value: "elaborates" };
export const assignedTo = { prefix: Prefixes.courses, value: "assignedTo" };
export const hasQuizTake = { prefix: Prefixes.courses, value: "hasQuizTake" };
export const hasQuestionAnswer = { prefix: Prefixes.courses, value: "hasQuestionAnswer" };
export const reviewedByStudent = { prefix: Prefixes.courses, value: "reviewedByStudent" };
export const percentage = { prefix: Prefixes.courses, value: "percentage" };
export const reviewedStudent = { prefix: Prefixes.courses, value: "reviewedStudent" };
export const studentComment = { prefix: Prefixes.courses, value: "studentComment" };
export const privateComment = { prefix: Prefixes.courses, value: "privateComment" };
export const field = { prefix: Prefixes.courses, value: "field" };
export const hasStudentReview = { prefix: Prefixes.courses, value: "hasStudentReview" };
export const reviewedBy = { prefix: Prefixes.courses, value: "reviewedBy" };
export const amount = { prefix: Prefixes.courses, value: "amount" };
export const topic = { prefix: Prefixes.courses, value: "topic" };
export const submission = { prefix: Prefixes.courses, value: "submission" };
export const assignment = { prefix: Prefixes.courses, value: "assignment" };
export const user = { prefix: Prefixes.courses, value: "user" };
export const team = { prefix: Prefixes.courses, value: "team" };
export const instructorOf = { prefix: Prefixes.courses, value: "instructorOf" };
export const ofQuestion = { prefix: Prefixes.courses, value: "ofQuestion" };
export const ofSubmission = { prefix: Prefixes.courses, value: "ofSubmission" };
export const ofQuizAssignment = { prefix: Prefixes.courses, value: "ofQuizAssignment" };
export const shortDescription = { prefix: Prefixes.courses, value: "shortDescription" };
export const hasDocument = { prefix: Prefixes.courses, value: "hasDocument" };
export const ofComment = { prefix: Prefixes.courses, value: "ofComment" };
