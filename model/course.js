export const course = {
   type: "course",
   props: {
      name: {
         required: true,
         multiple: false,
         dataType: "string",
         change: ["superAdmin"],
         get: ["admin"],
      },
      description: {
         required: false,
         multiple: false,
         dataType: "string",
         change: ["superAdmin"],
      },
      abbreviation: {
         required: false,
         multiple: false,
         dataType: "string",
         change: ["superAdmin"],
      },
      hasPrerequisite: {
         required: false,
         multiple: true,
         dataType: "node",
         objectClass: "course",
         change: ["superAdmin"],
      },
      mentions: {
         required: false,
         multiple: true,
         dataType: "node",
         objectClass: "topic",
         change: ["superAdmin"],
      },
      covers: {
         required: false,
         multiple: true,
         dataType: "node",
         objectClass: "topic",
         change: ["superAdmin"],
      },
   },
   create: ["superAdmin"],
};
