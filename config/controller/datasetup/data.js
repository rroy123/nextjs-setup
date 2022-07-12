import { executeQuery } from "../../dbsetup/db";
const getAllData = async (req, res) => {
    let tableData=await executeQuery('select * from table',[]);
    res.send(tableData);
};

export { getAllData };