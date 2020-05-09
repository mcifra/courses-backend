export const peerReviewQuestionAnswer = {
   type: "peerReviewQuestionAnswer",
   courseInstance: "^hasQuestionAnswer/ofSubmission/ofAssignment/courseInstance",
   props: {
      question: {
         required: true,
         multiple: false,
         dataType: "node",
         objectClass: "questionAssignment",
      },
      answer: {
         required: true,
         multiple: false,
         dataType: "string",
      },
   },
};
