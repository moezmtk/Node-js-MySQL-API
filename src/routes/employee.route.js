
const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');


//get all employees
router.get('/',employeeController.getEmployeeList);

//get employees by ID
router.get('/:id',employeeController.getEmployeeByID);

//creat new employee
router.post('/',employeeController.createNewEmployee);


// update employee
router.put('/:id',employeeController.updateEmployee);

//delete employee
router.delete('/:id',employeeController.deleteEmployee);



module.exports = router;















