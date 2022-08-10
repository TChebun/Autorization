import LoginPage from "@/views/LoginPage/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage/RegistrationPage";
import RecoveryPage from "@/views/RecoveryPage/RecoveryPage";

export default [
    {
        path: '/',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'register',
        component: RegistrationPage
    },
    {
        path: '/recovery',
        name: 'recovery',
        component: RecoveryPage
    },
];