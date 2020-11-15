export default function auth ({ next, store }){
    if(store.getters.isEmailVerified) {
        return next({
            name: 'dashboard'
        });
    }
    return next();
}
