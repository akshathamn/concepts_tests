import{ login,getlogin } from '../controller/signincontroller';

const routes = (app) => {
    app.route('/')
        .get(getlogin )
        .post(login)

    }

    export default routes