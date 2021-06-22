const Employee = require('../models/employee.model');
const EmployeeModel = require('../models/employee.model');

// get all employee list
exports.getEmployeeList = (req,res)=>{
    //console.log('here all employees list');
    EmployeeModel.getAllEmployees((err,employees)=>{
        console.log('we are here');
        if(err)
        res.send(err);
        console.log('Employees',employees);
        res.send(employees)


    })

}

// get employee by ID
exports.getEmployeeByID = (req,res)=>{
    //console.log('get employee by ID');
    EmployeeModel.getEmployeeByID(req.params.id,(err,employee)=>{
        if(err)
        res.send(err);
        console.log('singel employee data',employee);
        res.send(employee);
    })
}

// creat new employee
exports.createNewEmployee = (req,res) =>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);

    // check if null
    if(req.body.contructor === Object && Object(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        console.log('valid Data');
       
        EmployeeModel.createdEmployee(employeeReqData,(err,employee)=>{
            if(err)
                res.send(err);
                res.json({status: true ,message: 'Employee succufully created ',data: employee})
            
        })
    }
}

// update employee
exports.updateEmployee =(req,res)=>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);    

    // check if null
    if(req.body.contructor === Object && Object(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        console.log('valid Data');
       
        EmployeeModel.updateEmployee(req.params.id,employeeReqData,(err,employee)=>{
            if(err)
                res.send(err);
                res.json({status: true ,message: 'Employee succufully updated ',data: employee.insertId})
            
        })
    }


}

//delete employee
exports.deleteEmployee =(req,res)=>{
    EmployeeModel.deleteEmployee(req.params.id,(err,eployee)=>{
        if(err)
        res.send(err);
        res.json({succes:true,message: 'Employee deleted succesfully '});
    })
}




