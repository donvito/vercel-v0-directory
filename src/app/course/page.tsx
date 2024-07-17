
import AuthWrapper from "@/components/AuthWrapper";
import CoursePage from "@/components/CoursePage";

export default function CoursePageHome() {
  return (
    <>    
      <AuthWrapper>
        <CoursePage />
      </AuthWrapper>      
    </>
  );
}
