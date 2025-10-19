import EditTeacher from '@/components/academics/teacher/EditTeachers'
import React from 'react'

interface Props {
  params: { id: string }
}

const EditTeacherPage = ({ params }: Props) => {
  return (
    <div>
      <EditTeacher params={params} />
    </div>
  )
}

export default EditTeacherPage