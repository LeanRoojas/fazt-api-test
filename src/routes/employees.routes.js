import { Router } from "express";
import { createEmployee, deleteEmployee, getEmploybyId, getEmployees, updateEmployee } from "../controllers/employees.controller.js";

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmploybyId)

router.post('/employees', createEmployee)

router.patch('/employees/:id', updateEmployee)

router.delete('/employees/:id', deleteEmployee)


export default router