import React from 'react'
import ViewStudents from '@/components/academics/students/ViewStudents'

interface Props {
  params: { id: string }
}
const ViewStudentsPage = ({params}: Props) => {
  return (
    <div>
      <ViewStudents  params={params}/>
    </div>
  )
}

export default ViewStudentsPage