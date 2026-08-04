/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/

import publicRoutes from "./publicRoutes";

import masterRoutes from "../../../master/routes/masterRoutes";

import workspaceRoutes from "../../../workspace/routes/workspaceRoutes";

const appRoutes = {

    public: publicRoutes,

    master: masterRoutes,

    workspace: workspaceRoutes,

};

export default appRoutes;
