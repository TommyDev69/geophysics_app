import frame from "../image/Frame.png";
import number from "../image/number.png";
import ProjectSetupWorkArea from "./ProjectSetupWorkArear";
const ProjectSetupArea = () => {
  const list = [
    {
      id: 1,
      icons: number,
      title: "Project Setup",
      subTopics: [
        { id: 1, icon: frame, subTopic: "Project name and description" },
        { id: 2, icon: frame, subTopic: "Survey objective selection" },
        { id: 3, icon: frame, subTopic: "Client information" },
        { id: 4, icon: frame, subTopic: "Timeline" },
      ],
    },
    {
      id: 2,
      title: "Survey Area Definition",
      subTopics: [],
    },
    {
      id: 3,
      title: "Site Characterisation",
      subTopics: [],
    },
    {
      id: 4,
      title: "Method Recommendation",
      subTopics: [],
    },
    {
      id: 5,
      title: "Survey Design",
      subTopics: [],
    },
    {
      id: 6,
      title: "Review and Export",
      subTopics: [],
    },
  ];

  return (
    <>
      <ProjectSetupWorkArea list={list} />
    </>
  );
};

export default ProjectSetupArea;