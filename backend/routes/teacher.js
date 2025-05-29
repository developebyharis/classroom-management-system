import express from "express";
import { createTeacher, deleteTeacher, getAllTeachers, getTeacherById, updateTeacher } from "../controllers/teacherController.js";


const router = express.Router();

router.post("/", createTeacher);
router.get("/", getAllTeachers);
router.post("/:id", getTeacherById);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher)

export {router as teacherRouter}