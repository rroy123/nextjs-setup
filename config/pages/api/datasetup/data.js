import { createRouter } from 'next-connect';
import { getAllData } from "../../../controller/datasetup/data";

const router = createRouter();
router.get(getAllData);
export default router.handler();