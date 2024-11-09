import React from "react";
import { ProjectType } from "../../types/ProjectType";
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";
import ProjectInfo from "./ProjectInfo";
import ApplyAndBenefits from "./ApplyAndBenefits";
import ApplierList from "./ApplierList";
import ClientInfo from "./ClientInfo";
import SimilarProjects from "./SimilarProjects";
import Breadcrumb from "../Public/Breadcrumb";

const ProjectDetailPage: React.FC<ProjectType> = (props) => {
  const breadcrumbItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/filter" },
    { name: props.projectName, link: "" },
  ];
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-6">
      {/* Left Column */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:w-3/4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        <ProjectHeader projectName={props.projectName} budget={props.budget} />
        <ProjectDescription description={props.projectDescription} />
        <ProjectTags
          tags={[
            "Tài năng giọng nói",
            "Dịch vụ âm thanh",
            "Quảng cáo",
            "Sản xuất âm thanh",
            "Tiếp tục truyền thông xã hội",
          ]}
        />
        <ProjectInfo />
        <ApplyAndBenefits
          clientId={Number(props.users?.id)}
          projectId={props.projectId}
        />
        <ApplierList />
      </div>

      {/* Right Column */}
      <div className="md:w-1/4 space-y-6">
        <button className="bg-pink-500 text-white font-semibold w-full p-3 rounded-lg">
          Đăng một dự án như thế này
        </button>
        <ClientInfo
          username={String(props.users?.username)}
          createAt={String(props.users?.createAt)}
        />
        <SimilarProjects />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
