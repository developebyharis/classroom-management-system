import classroomCard from "./classroomCard.js";
import { tagFilter } from "./filter.js";

const filters = [
  {
    tagName: "Department",
    options: [ "Computer Science", "Software Engineering"],
  },
  {
    tagName: "Status",
    options: [ "Booked", "Available"],
  },
];
const classroomsData = [
  {
    classroomName: "Room B-202",
    teacherName: "Prof. Ali",
    timeSlot: "8:00 AM - 9:30 AM",
    subject: "Operating Systems",
    semester: "6th",
    section: "A",
    department: "Computer Science",
    status: "Booked",
  },
  {
    classroomName: "Room C-105",
    teacherName: "Dr. Sara",
    timeSlot: "10:00 AM - 11:30 AM",
    subject: "Data Structures",
    semester: "4th",
    section: "B",
    department: "Software Engineering",
    status: "Available",
  },
];

const selectedFilter = {
  Department: "All",
  Status: "All",
};

export function initClassrooms() {
  function renderClassrooms() {
    const filteredClassrooms = classroomsData.filter((cls) => {
      return (
        (selectedFilter.Department === "All" ||
          cls.department === selectedFilter.Department) &&
        (selectedFilter.Status === "All" ||
          cls.status.toLowerCase() === selectedFilter.Status.toLowerCase())
      );
    });
    const cont = document.getElementById("classroomCard");
    if (cont) {
      cont.innerHTML = filteredClassrooms
        .map((cls) =>
          classroomCard({
            classroomName: cls.classroomName,
            teacherName: cls.teacherName,
            timeSlot: cls.timeSlot,
            subject: cls.subject,
            semester: cls.semester,
            section: cls.section,
            department: cls.department,
            status: cls.status,
          })
        )
        .join("");
    }
  }

  filters.forEach((fil) => {
    const select = document.getElementById(fil.tagName);
    if (select) {
      select.addEventListener("change", (e) => {
        selectedFilter[fil.tagName] = e.target.value;
        renderClassrooms();
      });
    }
  });

  renderClassrooms();
}

export default function classrooms() {
  return `
    <div class="max-w-5xl mx-auto p-4">
      <div class="flex gap-4 mb-6 flex-wrap">
        ${filters
          .map((filter) =>
            tagFilter({
              style:
                "border border-zinc-800 rounded-full px-3 py-1 cursor-pointer hover:bg-zinc-200 transition",
              tagName: filter.tagName,
              options: filter.options,
            })
          )
          .join("")}
      </div>
      <div id="classroomCard"></div>
    </div>
  `;
}