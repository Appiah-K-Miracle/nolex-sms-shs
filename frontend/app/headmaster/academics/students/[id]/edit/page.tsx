import EditStudent from '@/components/academics/students/EditStudents'
import React from 'react'

interface Props {
  params: { id: string }
}
const EditStudentPage = ({params}: Props) => {
  return (
    <div>
      <EditStudent params={params}/>
    </div>
  )
}

export default EditStudentPage