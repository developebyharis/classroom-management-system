export default function classroomCard({
  classroomName,
  teacherName,
  timeSlot,
  subject,
  semester,
  section,
  department,
  status
}) {
  const statusColor = {
    approved: "text-green-600 bg-green-100",
    pending: "text-yellow-600 bg-yellow-100",
    rejected: "text-red-600 bg-red-100",
  }[status.toLowerCase()] || "text-gray-600 bg-gray-100";

  return `
    <div class="relative bg-white shadow-md rounded-xl p-6 border border-gray-200 max-w-4xl mx-auto my-4">
      <!-- Department badge top-right -->
      <div class="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
        ${department}
      </div>

      <!-- Main layout -->
      <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
        <!-- Classroom Name -->
        <div class="md:w-1/4 text-xl font-bold text-blue-700">
          ${classroomName}
        </div>

        <!-- Info Grid -->
        <div class="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
          <div><span class="font-medium">Teacher:</span> ${teacherName}</div>
          <div><span class="font-medium">Time:</span> ${timeSlot}</div>
          <div><span class="font-medium">Subject:</span> ${subject}</div>
          <div><span class="font-medium">Semester:</span> ${semester}</div>
          <div><span class="font-medium">Section:</span> ${section}</div>
          <div>
            <span class="font-medium">Status:</span>
            <span class="ml-2 px-2 py-1 rounded-full text-xs font-semibold ${statusColor}">
              ${status}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}
