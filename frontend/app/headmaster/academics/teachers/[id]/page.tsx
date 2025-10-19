import ViewTeacher from '@/components/academics/teacher/ViewTeachers'
import React from 'react'

interface Props {
  params: { id: string }
}
const ViewTeacherPage = ({params}: Props) => {
  return (
    <div>
      <ViewTeacher params={params}/>
    </div>
  )
}

export default ViewTeacherPage