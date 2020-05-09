import { agent } from "./agent";

export const user = {
   type: "user",
   subclassOf: agent,
   create: ["register"],
   props: {
      firstName: {
         required: true,
         multiple: false,
         dataType: "string",
      },
      lastName: {
         required: true,
         multiple: false,
         dataType: "string",
      },
      email: {
         required: true,
         multiple: false,
         dataType: "string",
      },
      password: {
         required: true,
         multiple: false,
         dataType: "string",
      },
      description: {
         required: true,
         multiple: false,
         dataType: "string",
      },
      nickname: {
         required: true,
         multiple: false,
         dataType: "string",
      },
      publicProfile: {
         required: true,
         multiple: false,
         dataType: "boolean",
      },
      showCourses: {
         required: true,
         multiple: false,
         dataType: "boolean",
      },
      showBadges: {
         required: true,
         multiple: false,
         dataType: "boolean",
      },
      allowContact: {
         required: true,
         multiple: false,
         dataType: "boolean",
      },
      useNickName: {
         required: true,
         multiple: false,
         dataType: "boolean",
      },
      isSuperAdmin: {
         required: false,
         multiple: false,
         dataType: "boolean",
         change: ["supeAdmin"],
      },
      nickNameTeamException: {
         required: true,
         multiple: false,
         dataType: "boolean",
      },
      memberOf: {
         required: false,
         multiple: true,
         dataType: "node",
         objectClass: "teamInstance",
         change: ["creator"],
      },
      requests: {
         required: false,
         multiple: true,
         dataType: "node",
         objectClass: "courseInstance",
      },
      studentOf: {
         required: false,
         multiple: true,
         dataType: "node",
         objectClass: "courseInstance",
         change: ["hasInstructor"],
      },
      understands: {
         required: false,
         multiple: true,
         dataType: "node",
         objectClass: "topic",
      },
      githubToken: {
         required: false,
         multiple: false,
         dataType: "string",
      },
   },
};
