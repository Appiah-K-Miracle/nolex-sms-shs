"use client";

import React from "react";

export default function EditSubjectPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Edit Subject</h1>
      <p>Editing subject with ID: {params.id}</p>
      {/* Your form and component logic will go here */}
    </div>
  );
}