// Different subject performance data for each student
const subjectsByStudent = {
  "1": [
    { name: "Physics", grade: "A", teacher: "Mr. Osei Bonsu", score: 88 },
    { name: "Chemistry", grade: "B+", teacher: "Mrs. Ama Serwaa", score: 82 },
    { name: "Elective Mathematics", grade: "A-", teacher: "Dr. Akosua Frimpong", score: 85 }
  ],
  "2": [
    { name: "Biology", grade: "B", teacher: "Mrs. Ama Serwaa", score: 78 },
    { name: "Chemistry", grade: "B+", teacher: "Mrs. Ama Serwaa", score: 80 },
    { name: "Physics", grade: "B-", teacher: "Mr. Osei Bonsu", score: 75 }
  ],
  "3": [
    { name: "Physics", grade: "A+", teacher: "Mr. Osei Bonsu", score: 94 },
    { name: "Mathematics", grade: "A+", teacher: "Dr. Akosua Frimpong", score: 96 },
    { name: "Chemistry", grade: "A", teacher: "Mrs. Ama Serwaa", score: 89 }
  ],
  "4": [
    { name: "Biology", grade: "D+", teacher: "Mrs. Ama Serwaa", score: 53 },
    { name: "Chemistry", grade: "D", teacher: "Mrs. Ama Serwaa", score: 50 },
    { name: "Physics", grade: "D-", teacher: "Mr. Osei Bonsu", score: 48 }
  ],
  "5": [
    { name: "Physics", grade: "F", teacher: "Mr. Osei Bonsu", score: 38 },
    { name: "Chemistry", grade: "F", teacher: "Mrs. Ama Serwaa", score: 35 },
    { name: "Mathematics", grade: "F", teacher: "Dr. Akosua Frimpong", score: 42 }
  ],
  "6": [
    { name: "Biology", grade: "A", teacher: "Mrs. Ama Serwaa", score: 92 },
    { name: "Mathematics", grade: "A", teacher: "Dr. Akosua Frimpong", score: 90 },
    { name: "Physics", grade: "A-", teacher: "Mr. Osei Bonsu", score: 86 }
  ]
};

interface SubjectPerformanceCardsProps {
  studentId: string;
}

export default function SubjectPerformanceCards({ studentId }: SubjectPerformanceCardsProps) {
  const subjects = subjectsByStudent[studentId as keyof typeof subjectsByStudent] || subjectsByStudent["1"];
  return (
    <div className="space-y-4">
      {subjects.map((subject, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-semibold text-gray-900">{subject.name}</h4>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  {subject.grade}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Teacher: {subject.teacher}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{subject.score}%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${subject.score}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
